import {ListElementTemplate} from "./Components/ListElementTemplate";
import {PreviewItem} from "./Models/PreviewData/PreviewItem";
import {ProgramDataStore} from "./Services/ProgramDataStore";
import {Group} from "./Models/PreviewData/Group";
import {GroupListElementTemplate} from "./Components/GroupListElementTemplate";
import {PopupTitleTemplate} from "./Components/PopupTitleTemplate";
import {PlaybackHandler} from "./Services/PlaybackHandler";
import {Endpoints} from "./Endpoints";
import {GroupItemsResult} from "./Models/PreviewData/GroupItemsResult";
import {ItemType} from "./Models/ItemType";

// The backend already returns Playlists/BoxSets in their own manual item order.
// sorting should only apply for season-based (Episode) groups, where it reflects actual episode order.
const preserveBackendOrderTypes: Set<ItemType> = new Set([ItemType.Playlist, ItemType.BoxSet])

export class ListElementFactory {
    constructor(private playbackHandler: PlaybackHandler, private programDataStore: ProgramDataStore) { }

    public async createItemElements(items: PreviewItem[], parentDiv: HTMLElement, offset: number = 0): Promise<void> {
        const preserveOrder = preserveBackendOrderTypes.has(this.programDataStore.type)
        if (!preserveOrder)
            items.sort((a, b) => a.IndexNumber - b.IndexNumber)

        for (let i: number = 0; i < items.length; i++) {
            // For Playlists/BoxSets, show the actual list position instead of the IndexNumber from their season/episode.
            const item = preserveOrder ? { ...items[i], IndexNumber: offset + i + 1 } : items[i]
            await this.renderItem(item, parentDiv, offset + i)
        }
    }
    
    public async prependItemElements(items: PreviewItem[], parentDiv: HTMLElement, offset: number): Promise<void> {
        const preserveOrder = preserveBackendOrderTypes.has(this.programDataStore.type)
        if (!preserveOrder)
            items.sort((a, b) => a.IndexNumber - b.IndexNumber)

        for (let i: number = items.length - 1; i >= 0; i--) {
            const item = preserveOrder ? { ...items[i], IndexNumber: offset + i + 1 } : items[i]
            await this.renderItem(item, parentDiv, -1)
        }
    }

    private async renderItem(item: PreviewItem, parentDiv: HTMLElement, positionAfterIndex: number): Promise<void> {
        const itemListElementTemplate = new ListElementTemplate(parentDiv, positionAfterIndex, item, this.playbackHandler, this.programDataStore);
        itemListElementTemplate.render(async (e: MouseEvent) => {
            e.stopPropagation();

            // hide item content for all existing items in the preview list
            document.querySelectorAll(".previewListItemContent").forEach((element: Element): void => {
                element.classList.add('hide');
                element.classList.remove('selectedListItem');
            });

            const itemContainer: Element = document.getElementById(`item-${item.Id}`).querySelector('.previewListItemContent');

            // load item description
            if (!item.Description) {
                const url = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.ITEM_DESCRIPTION}`
                    .replace('{itemId}', item.Id));
                const result = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' })
                const newDescription: string = result?.Description

                this.programDataStore.updateItem({
                    ...item,
                    Description: newDescription
                })
                itemContainer.querySelector('.previewItemDescription').textContent = newDescription
            }

            // show item content for the selected item
            itemContainer.classList.remove('hide');
            itemContainer.classList.add('selectedListItem');

            // scroll to the selected item
            itemContainer.parentElement.scrollIntoView({ block: "start" });
        });

        if (item.Id === this.programDataStore.activeMediaSourceId) {
            const itemNode: Element = document.getElementById(`item-${item.Id}`).querySelector('.previewListItemContent');

            // preload description for the currently playing item
            if (!item.Description) {
                const url = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.ITEM_DESCRIPTION}`
                    .replace('{itemId}', item.Id));
                const result = await ApiClient.ajax({ type: 'GET', url, dataType: 'json' })
                const newDescription: string = result?.Description

                this.programDataStore.updateItem({
                    ...item,
                    Description: newDescription
                })
                itemNode.querySelector('.previewItemDescription').textContent = newDescription
            }

            itemNode.classList.remove('hide');
            itemNode.classList.add('selectedListItem');
        }
    }

    // Appends pages when scrolling to the bottom.
    private addScrollSentinel(
        parentDiv: HTMLElement,
        loadPage: (startIndex: number) => Promise<GroupItemsResult>,
        nextStartIndex: number,
        totalLoaded: number
    ): void {
        const sentinel = document.createElement('div')
        parentDiv.appendChild(sentinel)

        const observer = new IntersectionObserver(async ([entry]) => {
            if (!entry.isIntersecting) return
            observer.disconnect()
            sentinel.remove()

            const { items, totalRecordCount } = await loadPage(nextStartIndex)
            if (parentDiv.children.length === 0) return

            await this.createItemElements(items, parentDiv, totalLoaded)

            const newTotalLoaded = totalLoaded + items.length
            if (newTotalLoaded < totalRecordCount)
                this.addScrollSentinel(parentDiv, loadPage, newTotalLoaded, newTotalLoaded)
        }, { root: parentDiv, threshold: 0 })

        observer.observe(sentinel)
    }

    // Prepends pages when scrolling to the top.
    // currentStartIndex is the absolute index of whatever is currently the first loaded item
    private addScrollSentinelBackward(
        parentDiv: HTMLElement,
        loadPage: (startIndex: number) => Promise<GroupItemsResult>,
        currentStartIndex: number
    ): void {
        if (currentStartIndex <= 0) return

        const sentinel = document.createElement('div')
        parentDiv.insertBefore(sentinel, parentDiv.firstChild)

        const observer = new IntersectionObserver(async ([entry]) => {
            if (!entry.isIntersecting) return
            observer.disconnect()
            sentinel.remove()

            const pageSize = this.programDataStore.pluginSettings.EpisodePageSize
            const newStartIndex = Math.max(0, currentStartIndex - pageSize)
            const { items } = await loadPage(newStartIndex)
            if (parentDiv.children.length === 0) return

            await this.prependItemElements(items, parentDiv, newStartIndex)

            this.addScrollSentinelBackward(parentDiv, loadPage, newStartIndex)
        }, { root: parentDiv, threshold: 0 })

        observer.observe(sentinel)
    }

    public async createLazyItemList(
        parentDiv: HTMLElement,
        loadPage: (startIndex: number) => Promise<GroupItemsResult>,
        initialPage?: GroupItemsResult,
        initialOffset: number = 0
    ): Promise<void> {
        const firstPage = initialPage ?? await loadPage(0)
        await this.createItemElements(firstPage.items, parentDiv, initialOffset)

        const totalLoaded = initialOffset + firstPage.items.length
        if (totalLoaded < firstPage.totalRecordCount)
            this.addScrollSentinel(parentDiv, loadPage, totalLoaded, totalLoaded)

        this.addScrollSentinelBackward(parentDiv, loadPage, initialOffset)
    }

    public createGroupElements(
        groups: Group[],
        parentDiv: HTMLElement,
        currentGroupIndex: number,
        titleContainer: PopupTitleTemplate,
        loadItems: (groupId: string, startIndex: number) => Promise<GroupItemsResult>
    ): void {
        groups.sort((a, b) => a.indexNumber - b.indexNumber)

        for (let i: number = 0; i < groups.length; i++) {
            const group = new GroupListElementTemplate(parentDiv, i, groups[i], groups[i].indexNumber === currentGroupIndex)
            group.render(async (e: MouseEvent): Promise<void> => {
                e.stopPropagation()

                titleContainer.setText(groups[i].groupName)
                titleContainer.setVisible(true)

                parentDiv.innerHTML = ''
                // Reset in case this group was already loaded earlier in the same popup session,
                // so re-fetching page 0 doesn't duplicate items already sitting in the store.
                this.programDataStore.updateGroupItems(groups[i].groupId, [])
                await this.createLazyItemList(parentDiv, (startIndex) => loadItems(groups[i].groupId, startIndex))
            })
        }
    }
}
