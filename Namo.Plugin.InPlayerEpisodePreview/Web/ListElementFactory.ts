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
import {activateSpinner, spinnerHtml} from "./Components/Spinner";

// The backend already returns Playlists/BoxSets and Folders in their own manual item/dissplay order
// sorting should only apply for season-based (Episode) groups, where it reflects actual episode order.
const preserveBackendOrderTypes: Set<ItemType> = new Set([ItemType.Playlist, ItemType.BoxSet, ItemType.Folder])

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

    // Show a "Read more" button if description exceeds max height
    private applyDescriptionReadMore(itemContainer: Element): void {
        const description = itemContainer.querySelector<HTMLElement>('.previewItemDescription')
        const readMoreButton = itemContainer.querySelector<HTMLElement>('.previewItemReadMoreButton')
        if (!description || !readMoreButton) return

        description.classList.remove('expanded')
        readMoreButton.textContent = 'Read more'

        const isOverflowing = description.scrollHeight > description.clientHeight
        readMoreButton.classList.toggle('hide', !isOverflowing)
        if (!isOverflowing) return

        readMoreButton.onclick = (e: MouseEvent): void => {
            e.stopPropagation()
            const expanded = description.classList.toggle('expanded')
            readMoreButton.textContent = expanded ? 'Read less' : 'Read more'
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
            this.applyDescriptionReadMore(itemContainer);

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
            this.applyDescriptionReadMore(itemNode);
        }
    }

    // Swaps an idle sentinel marker into a visible spinner once it's actually triggered a page load.
    private showSentinelSpinner(sentinel: HTMLElement): void {
        sentinel.classList.add('previewScrollSpinner')
        sentinel.innerHTML = spinnerHtml()
        activateSpinner(sentinel)
    }

    // Appends pages when scrolling to the bottom.
    private addScrollSentinel(
        parentDiv: HTMLElement,
        loadPage: (startIndex: number) => Promise<GroupItemsResult>,
        nextStartIndex: number,
        totalLoaded: number,
        viewToken: number
    ): void {
        const sentinel = document.createElement('div')
        parentDiv.appendChild(sentinel)

        const observer = new IntersectionObserver(async ([entry]) => {
            if (!entry.isIntersecting) return
            observer.disconnect()
            this.showSentinelSpinner(sentinel)

            const { items, totalRecordCount } = await loadPage(nextStartIndex)
            // The view may have moved on (e.g. back to the group list) while this page was loading.
            if (!this.programDataStore.isCurrentView(viewToken)) return

            sentinel.remove()
            await this.createItemElements(items, parentDiv, totalLoaded)

            const newTotalLoaded = totalLoaded + items.length
            if (newTotalLoaded < totalRecordCount)
                this.addScrollSentinel(parentDiv, loadPage, newTotalLoaded, newTotalLoaded, viewToken)
        }, { root: parentDiv, threshold: 0 })

        observer.observe(sentinel)
    }

    // Prepends pages when scrolling to the top.
    // currentStartIndex is the absolute index of whatever is currently the first loaded item
    private addScrollSentinelBackward(
        parentDiv: HTMLElement,
        loadPage: (startIndex: number) => Promise<GroupItemsResult>,
        currentStartIndex: number,
        viewToken: number
    ): void {
        if (currentStartIndex <= 0) return

        const sentinel = document.createElement('div')
        parentDiv.insertBefore(sentinel, parentDiv.firstChild)

        const observer = new IntersectionObserver(async ([entry]) => {
            if (!entry.isIntersecting) return
            observer.disconnect()

            const scrollHeightBeforeSpinner = parentDiv.scrollHeight
            this.showSentinelSpinner(sentinel)
            parentDiv.scrollTop += parentDiv.scrollHeight - scrollHeightBeforeSpinner

            const pageSize = this.programDataStore.pluginSettings.EpisodePageSize
            const newStartIndex = Math.max(0, currentStartIndex - pageSize)
            const { items } = await loadPage(newStartIndex)
            // The view may have moved on (e.g. back to the group list) while this page was loading.
            if (!this.programDataStore.isCurrentView(viewToken)) return

            const scrollHeightBeforePrepend = parentDiv.scrollHeight
            sentinel.remove()
            await this.prependItemElements(items, parentDiv, newStartIndex)
            parentDiv.scrollTop += parentDiv.scrollHeight - scrollHeightBeforePrepend

            this.addScrollSentinelBackward(parentDiv, loadPage, newStartIndex, viewToken)
        }, { root: parentDiv, threshold: 0 })

        observer.observe(sentinel)
    }

    public async createLazyItemList(
        parentDiv: HTMLElement,
        loadPage: (startIndex: number) => Promise<GroupItemsResult>,
        viewToken: number,
        initialPage?: GroupItemsResult,
        initialOffset: number = 0
    ): Promise<void> {
        const firstPage = initialPage ?? await loadPage(0)
        // The view may have moved on (e.g. back to the group list) while this page was loading.
        if (!this.programDataStore.isCurrentView(viewToken)) return

        await this.createItemElements(firstPage.items, parentDiv, initialOffset)

        const totalLoaded = initialOffset + firstPage.items.length
        if (totalLoaded < firstPage.totalRecordCount)
            this.addScrollSentinel(parentDiv, loadPage, totalLoaded, totalLoaded, viewToken)

        this.addScrollSentinelBackward(parentDiv, loadPage, initialOffset, viewToken)
    }

    public createGroupElements(
        groups: Group[],
        parentDiv: HTMLElement,
        currentGroupIndex: number,
        titleContainer: PopupTitleTemplate,
        loadItems: (groupId: string, startIndex: number) => Promise<GroupItemsResult>
    ): void {
        groups.sort((a, b) => a.indexNumber - b.indexNumber)

        // Invalidates any item load still in progresss
        this.programDataStore.beginNewView()

        for (let i: number = 0; i < groups.length; i++) {
            const group = new GroupListElementTemplate(parentDiv, i, groups[i], groups[i].indexNumber === currentGroupIndex, this.programDataStore.pluginSettings.ShowWatchedCount)
            group.render(async (e: MouseEvent): Promise<void> => {
                e.stopPropagation()

                this.programDataStore.activeGroupId = groups[i].groupId
                titleContainer.setText(groups[i].groupName)
                if (this.programDataStore.pluginSettings.ShowWatchedCount)
                    titleContainer.setWatchedCount(groups[i].playedItemCount, groups[i].totalItemCount)
                titleContainer.setVisible(true)

                parentDiv.innerHTML = ''
                const viewToken = this.programDataStore.beginNewView()
                
                const cached = !this.programDataStore.isGroupsCacheExpired
                    ? this.programDataStore.groups.find(g => g.groupId === groups[i].groupId)
                    : undefined
                const initialPage: GroupItemsResult | undefined = cached?.loadedStartIndex !== undefined
                    ? { items: [...cached.items], totalRecordCount: cached.totalItemCount }
                    : undefined
                const initialOffset = cached?.loadedStartIndex ?? 0

                await this.createLazyItemList(parentDiv, (startIndex) => loadItems(groups[i].groupId, startIndex), viewToken, initialPage, initialOffset)
            })
        }
    }
}
