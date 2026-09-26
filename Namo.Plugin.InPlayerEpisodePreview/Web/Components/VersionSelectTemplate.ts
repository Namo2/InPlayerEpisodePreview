import {BaseTemplate} from "./BaseTemplate"
import {ItemVersion} from "../Models/PreviewData/ItemVersion"
import {PreviewItem} from "../Models/PreviewData/PreviewItem"

// True while the playing item shows a version other than the playing one
export const isPreviewingOtherVersion = (itemId: string): boolean => {
    const select = document.getElementById(`versionSelect-${itemId}`) as HTMLSelectElement | null
    const playingVersionId = select?.dataset.playingVersionId
    return !!playingVersionId && select.value !== playingVersionId
}

export const getSelectedVersionRunTimeTicks = (itemId: string): number | undefined => {
    const select = document.getElementById(`versionSelect-${itemId}`) as HTMLSelectElement | null
    return Number(select?.selectedOptions[0]?.dataset.runTimeTicks) || undefined
}

// Switching keeps the playback position. Position is clamped to the item's runtime.
export const carryPositionOver = (item: PreviewItem, positionTicks: number): PreviewItem => {
    const clampedPositionTicks = item.RunTimeTicks ? Math.min(Math.max(positionTicks, 0), item.RunTimeTicks) : positionTicks
    return {
        ...item,
        UserData: {
            ...item.UserData,
            PlaybackPositionTicks: clampedPositionTicks,
            PlayedPercentage: item.RunTimeTicks ? (clampedPositionTicks / item.RunTimeTicks) * 100 : item.UserData.PlayedPercentage
        }
    }
}

export class VersionSelectTemplate extends BaseTemplate {
    private readonly selectId: string
    private readonly buttonId: string

    constructor(container: HTMLElement, positionAfterIndex: number, itemId: string, private versionCount: number) {
        super(container, positionAfterIndex)
        this.setElementId(`versionRow-${itemId}`)
        this.selectId = `versionSelect-${itemId}`
        this.buttonId = `versionPlayButton-${itemId}`
    }

    getTemplate(): string {
        // language=HTML
        return `
            <div id="${this.getElementId()}" class="flex previewVersionRow">
                <select id="${this.selectId}" class="emby-select-withcolor previewVersionSelect" title="Version" disabled>
                    <option>${this.versionCount} versions</option>
                </select>
                <button id="${this.buttonId}"
                        is="paper-icon-button-light"
                        type="button"
                        class="paper-icon-button-light emby-button previewVersionPlayButton"
                        disabled
                        title="Switch to this version">
                    <span class="material-icons swap_horiz" aria-hidden="true"></span>
                </button>
            </div>
        `
    }

    public render(changeHandler: (versionId: string) => void, playHandler: () => void): void {
        this.addElementToContainer()
        
        this.select.addEventListener('click', (e: MouseEvent) => e.stopPropagation())
        this.select.addEventListener('change', (e: Event) => {
            e.stopPropagation()
            changeHandler(this.select.value)
        })
        this.button.addEventListener('click', (e: MouseEvent) => {
            e.stopPropagation()
            playHandler()
        })
    }

    public setVersions(versions: ItemVersion[], selectedVersionId: string): void {
        this.select.replaceChildren(...versions.map((version, i) => {
            const option = new Option(version.Name || `Version ${i + 1}`, version.Id)
            option.dataset.runTimeTicks = String(version.Item.RunTimeTicks ?? '')
            return option
        }))
        this.select.value = selectedVersionId
        this.select.disabled = false
    }

    public get selectedVersionId(): string {
        return this.select.value
    }

    public setPlayingVersion(versionId: string): void {
        this.select.dataset.playingVersionId = versionId
    }

    public setButtonEnabled(enabled: boolean): void {
        this.button.disabled = !enabled
    }

    public remove(): void {
        this.getElement()?.remove()
    }

    private get select(): HTMLSelectElement {
        return document.getElementById(this.selectId) as HTMLSelectElement
    }

    private get button(): HTMLButtonElement {
        return document.getElementById(this.buttonId) as HTMLButtonElement
    }
}
