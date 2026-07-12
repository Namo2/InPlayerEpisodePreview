import {BaseTemplate} from "./BaseTemplate";
import {PreviewItem} from "../Models/PreviewData/PreviewItem";

export class ItemDetailsTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number, private item: PreviewItem) {
        super(container, positionAfterIndex);
        this.setElementId(`item-${item.Id}`);
    }

    getTemplate(): string {
        // language=HTML
        return `
            <div id="${this.getElementId()}-details" class="itemMiscInfo itemMiscInfo-primary previewItemDetails">
                ${this.item.PremiereDate ? `<div class="mediaInfoItem">
                    ${(new Date(this.item.PremiereDate)).toLocaleDateString(this.getLocale())}
                </div>` : ''}
                <div class="mediaInfoItem">${this.formatRunTime(this.item.RunTimeTicks)}</div>
                ${this.item.CommunityRating ? `<div class="starRatingContainer mediaInfoItem">
                    <span class="material-icons starIcon star" aria-hidden="true"></span>
                    ${this.item.CommunityRating.toFixed(1)}
                </div>` : ''}
                ${this.item.CriticRating ? `<div class="mediaInfoItem mediaInfoCriticRating ${this.item.CriticRating >= 60 ? 'mediaInfoCriticRatingFresh' : 'mediaInfoCriticRatingRotten'}">
                    ${this.item.CriticRating}
                </div>` : ''}
                <div class="endsAt mediaInfoItem">${this.formatEndTime(this.item.RunTimeTicks, this.item.UserData.PlaybackPositionTicks)}</div>
            </div>
        `;
    }

    public render(): void {
        this.addElementToContainer();
    }

    private getLocale(): string {
        return navigator.languages
            ? navigator.languages[0] // @ts-ignore for userLanguage (this adds support for IE) TODO: Move to interface
            : (navigator.language || navigator.userLanguage);
    }

    private formatRunTime(ticks: number): string {
        // format the ticks to a string with minutes and hours
        ticks /= 10000; // convert from microseconds to milliseconds
        let hours: number = Math.floor((ticks / 1000 / 3600) % 24);
        let minutes: number = Math.floor((ticks / 1000 / 60) % 60);
        let hoursString: string = hours > 0 ? `${hours}h ` : '';
        return `${hoursString}${minutes}m`;
    }

    private formatEndTime(runtimeTicks: number, playbackPositionTicks: number): string {
        // convert from microseconds to milliseconds
        runtimeTicks /= 10000;
        playbackPositionTicks /= 10000;

        let ticks: number = Date.now() + (runtimeTicks);
        ticks -= (new Date()).getTimezoneOffset() * 60 * 1000; // adjust for timezone
        ticks -= playbackPositionTicks; // subtract the playback position

        let hours: string = this.zeroPad(Math.floor((ticks / 1000 / 3600) % 24));
        let minutes: string = this.zeroPad(Math.floor((ticks / 1000 / 60) % 60));

        return `Ends at ${hours}:${minutes}`;
    }

    private zeroPad(num: number, places: number = 2): string {
        return String(num).padStart(places, '0');
    }
}
