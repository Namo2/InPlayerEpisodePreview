import {BaseTemplate} from "./BaseTemplate";
import {FavoriteIconTemplate} from "./QuickActions/FavoriteIconTemplate";
import {PlayStateIconTemplate} from "./QuickActions/PlayStateIconTemplate";
import {PlaybackHandler} from "../Services/PlaybackHandler";
import {EpisodeDetailsTemplate} from "./EpisodeDetails";
import {ProgramDataStore} from "../Services/ProgramDataStore";
import {BaseItem} from "../Models/Episode";
import {ItemType} from "../Models/ItemType";
import {Season} from "../Models/Season";

export class ListElementTemplate extends BaseTemplate {
    private readonly quickActionContainer: HTMLElement;
    private playStateIcon: PlayStateIconTemplate;
    private favoriteIcon: FavoriteIconTemplate;
    
    constructor(container: HTMLElement, positionAfterIndex: number, private item: BaseItem, private playbackHandler: PlaybackHandler, private programDataStore: ProgramDataStore) {
        super(container, positionAfterIndex);
        this.setElementId(`episode-${item.IndexNumber}`);

        // create temp quick action container
        this.quickActionContainer = document.createElement('div');
        
        // create quick actions
        this.playStateIcon = new PlayStateIconTemplate(this.quickActionContainer, -1, this.item, this.programDataStore);
        this.favoriteIcon = new FavoriteIconTemplate(this.quickActionContainer, 0, this.item, this.programDataStore);
    }
    
    getTemplate(): string {
        // add quick actions
        this.playStateIcon.render();
        this.favoriteIcon.render();
        
        // add episode details/info
        const detailsContainer: HTMLDivElement = document.createElement('div');
        const details: EpisodeDetailsTemplate = new EpisodeDetailsTemplate(detailsContainer, -1, this.item);
        details.render();
        
        const backgroundImageStyle: string = `background-image: url('../Items/${this.item.Id}/Images/Primary?tag=${this.item.ImageTags.Primary}')`
        
        // language=HTML
        return `
            <div id="${this.getElementId()}"
                 class="listItem listItem-button actionSheetMenuItem emby-button previewListItem"
                 is="emby-button"
                 data-id="${this.item.IndexNumber}">
                <div class="previewEpisodeContainer flex">
                    <button class="listItem previewEpisodeTitle" type="button">
                        ${this.item.IndexNumber && (this.programDataStore.isSeries || this.programDataStore.boxSetName !== '') 
                            ? `<span>${this.item.IndexNumber}</span>`
                            : ''
                        }
                        <div class="listItemBody actionsheetListItemBody">
                            <span class="actionSheetItemText">${this.item.Name}</span>
                        </div>
                    </button>
                    <div class="previewQuickActionContainer flex">
                        ${this.quickActionContainer.innerHTML}
                    </div>
                </div>

                <div class="previewListItemContent hide">
                    ${detailsContainer.innerHTML}
                    <div class="flex">
                        <div class="card overflowBackdropCard card-hoverable card-withuserdata previewEpisodeImageCard">
                            <div class="cardBox">
                                <div class="cardScalable">
                                    <div class="cardPadder cardPadder-overflowBackdrop lazy-hidden-children">
                                        <span class="cardImageIcon material-icons tv" aria-hidden="true"/>
                                    </div>
                                    <canvas aria-hidden="true" width="20" height="20"
                                            class="blurhash-canvas lazy-hidden"></canvas>
                                    <button id="previewEpisodeImageCard-${this.item.IndexNumber}"
                                            class="cardImageContainer cardContent itemAction lazy blurhashed lazy-image-fadein-fast"
                                            data-action="link"
                                            style="${backgroundImageStyle}">
                                        <div class="innerCardFooter fullInnerCardFooter innerCardFooterClear ${this.item.UserData.PlayedPercentage ? '' : 'hide'}">
                                            <div class="itemProgressBar">
                                                <div class="itemProgressBarForeground"
                                                     style="width:${this.item.UserData.PlayedPercentage}%;"></div>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="cardOverlayContainer itemAction"
                                         data-action="link">
                                        <button id="start-episode-${this.item.IndexNumber}"
                                                is="paper-icon-button-light"
                                                class="cardOverlayButton cardOverlayButton-hover itemAction paper-icon-button-light cardOverlayFab-primary"
                                                data-action="resume">
                                    <span class="material-icons cardOverlayButtonIcon cardOverlayButtonIcon-hover play_arrow"
                                          aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="previewEpisodeDescription">${this.item.Description ?? 'loading...'}</span>
                    </div>
                </div>
            </div>
        `;
    }

    public render(clickHandler: Function): void {
        let renderedElement: HTMLElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
        
        // add event handler to start the playback of this episode
        let episodeImageCard: HTMLElement = document.getElementById(`start-episode-${this.item.IndexNumber}`);
        episodeImageCard.addEventListener('click', () => this.playbackHandler.play(this.item.Id, this.item.UserData.PlaybackPositionTicks));
    }

    /**
     * Unused - Will maybe be used in further updates on this
     */
    public update(): void {
        let newData: BaseItem;
        // get current episode data
        if (ItemType[this.item.Type] === ItemType.Series) {
            const season: Season = this.programDataStore.seasons.find((s: Season): boolean => s.episodes.some((e: BaseItem): boolean => e.Id === this.item.Id));
            newData = season.episodes.find((e: BaseItem): boolean => e.Id === this.item.Id);
        } else if (ItemType[this.item.Type] === ItemType.Movie) {
            newData = this.programDataStore.movies.find((m: BaseItem): boolean => m.Id === this.item.Id);
        }
        
        // update playtime percentage
        const playtime: Element = this.getElement().querySelector('.itemProgressBarForeground');
        playtime.setAttribute("style", `width:${newData.UserData.PlayedPercentage}%`);
        
        // update quick actions state
        this.playStateIcon.update();
        this.favoriteIcon.update();
    }
}