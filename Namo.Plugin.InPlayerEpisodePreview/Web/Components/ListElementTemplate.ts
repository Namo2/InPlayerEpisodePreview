import {BaseTemplate} from "./BaseTemplate";
import {FavoriteIconTemplate} from "./QuickActions/FavoriteIconTemplate";
import {PlayStateIconTemplate} from "./QuickActions/PlayStateIconTemplate";
import {PlaybackHandler} from "../Services/PlaybackHandler";
import {EpisodeDetailsTemplate} from "./EpisodeDetails";
import {ProgramDataStore} from "../Services/ProgramDataStore";

export class ListElementTemplate extends BaseTemplate {
    private quickActionContainer: HTMLElement;
    private playStateIcon: PlayStateIconTemplate;
    private favoriteIcon: FavoriteIconTemplate;
    
    constructor(container: HTMLElement, positionAfterIndex: number, private episode: Episode, private playbackHandler: PlaybackHandler, private programDataStore: ProgramDataStore) {
        super(container, positionAfterIndex);
        this.setElementId(`episode-${episode.IndexNumber}`);

        // create temp quick action container
        this.quickActionContainer = document.createElement('div');
        
        // create quick actions
        this.playStateIcon = new PlayStateIconTemplate(this.quickActionContainer, -1, this.episode, this.programDataStore);
        this.favoriteIcon = new FavoriteIconTemplate(this.quickActionContainer, 0, this.episode, this.programDataStore);
    }
    
    getTemplate(): string {
        // add quick actions
        this.playStateIcon.render();
        this.favoriteIcon.render();
        
        // add episode details/info
        const detailsContainer: HTMLDivElement = document.createElement('div');
        const details: EpisodeDetailsTemplate = new EpisodeDetailsTemplate(detailsContainer, -1, this.episode);
        details.render();
        
        const backgroundImageStyle: string = `background-image: url('../Items/${this.episode.Id}/Images/Primary?tag=${this.episode.ImageTags.Primary}')`
        
        // language=HTML
        return `
            <div id="${this.getElementId()}"
                 class="listItem listItem-button actionSheetMenuItem emby-button previewListItem"
                 is="emby-button"
                 data-id="${this.episode.IndexNumber}">
                <div class="previewEpisodeContainer flex">
                    <button class="listItem previewEpisodeTitle" type="button">
                        <span>${this.episode.IndexNumber}</span>
                        <div class="listItemBody actionsheetListItemBody">
                            <span class="actionSheetItemText">${this.episode.Name}</span>
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
                                    <button id="previewEpisodeImageCard-${this.episode.IndexNumber}"
                                            class="cardImageContainer cardContent itemAction lazy blurhashed lazy-image-fadein-fast"
                                            data-action="link"
                                            style="${backgroundImageStyle}">
                                        <div class="innerCardFooter fullInnerCardFooter innerCardFooterClear ${!this.episode.UserData.PlayedPercentage ? "hide" : ""}">
                                            <div class="itemProgressBar">
                                                <div class="itemProgressBarForeground"
                                                     style="width:${this.episode.UserData.PlayedPercentage}%;"></div>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="cardOverlayContainer itemAction"
                                         data-action="link">
                                        <button id="start-episode-${this.episode.IndexNumber}"
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
                        <span class="previewEpisodeDescription">${this.episode.Description}</span>
                    </div>
                </div>
            </div>
        `;
    }

    public render(clickHandler: Function): void {
        let renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', (e) => clickHandler(e));
        
        // add event handler to start the playback of this episode
        let episodeImageCard = document.getElementById(`start-episode-${this.episode.IndexNumber}`);
        episodeImageCard.addEventListener('click', () => this.playbackHandler.play(this.episode.Id, this.episode.UserData.PlaybackPositionTicks));
    }

    /**
     * Unused - Will maybe be used in further updates on this
     */
    public update(): void {
        // get current episode data
        const season = this.programDataStore.seasons.find(s => s.episodes.some(e => e.Id === this.episode.Id));
        const newData = season.episodes.find(e => e.Id === this.episode.Id);
        
        // update playtime percentage
        const playtime = this.getElement().querySelector('.itemProgressBarForeground');
        playtime.setAttribute("style", `width:${newData.UserData.PlayedPercentage}%`);
        
        // update quick actions state
        this.playStateIcon.update();
        this.favoriteIcon.update();
    }
}