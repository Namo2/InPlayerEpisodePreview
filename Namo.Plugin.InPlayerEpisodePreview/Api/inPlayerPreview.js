    // to avoid conflicts with other plugins in the same scope, each global variable and function is prefixed with 'iPP_'

    const iPP_EPISODE_INFO_ENDPOINT = '/Users/{userId}/Items/{episodeId}';
    const iPP_EMBY_AUTH_HEADER = 'X-Emby-Authorization';
    let iPP_embyAuthValue = '';

    let iPP_mediaSourceId = null;
    let iPP_userId = null;
    let iPP_episodeList = null;

    let iPP_previewButton = document.createElement('button');
    let iPP_actionSheetContentContainer = document.createElement('div');
    let iPP_actionSheetTitle = document.createElement('h1');
    let iPP_dialogBackdrop = document.createElement('div');
    let iPP_dialogContainer = document.createElement('div');

    /*
     * Utility methods for logging
     */
    const iPP_LOG_PREFIX = '[InPlayerEpisodePreview]';

    function iPP_debug(msg) {
        console.debug(iPP_LOG_PREFIX + ' ' + msg);
    }

    function iPP_error(msg) {
        console.error(iPP_LOG_PREFIX + ' ' + msg);
    }

    function iPP_info(msg) {
        console.info(iPP_LOG_PREFIX + ' ' + msg);
    }

    /*
     * Inject style to be used for the preview popup
     */
    let iPP_inPlayerPreviewStyle = document.createElement('style');
    iPP_inPlayerPreviewStyle.id = 'inPlayerPreviewStyle';
    iPP_inPlayerPreviewStyle.textContent += '.selectedListItem {height: 22vh;}';
    iPP_inPlayerPreviewStyle.textContent += '.previewListItem {flex-direction: column; align-items: flex-start;}';
    iPP_inPlayerPreviewStyle.textContent += '.previewListItemContent {width: 100%; height: 16.5vh; position: relative; top: 0.5em}';
    iPP_inPlayerPreviewStyle.textContent += '.previewPopup {animation: 140ms ease-out 0s 1 normal both running scaleup; position: fixed; margin: 0px; bottom: 1.5vh; left: 68vw; width: 30vw;}';
    iPP_inPlayerPreviewStyle.textContent += '.previewPopupTitle {height: 4vh;}';
    iPP_inPlayerPreviewStyle.textContent += '.previewPopupScroller {height: 60vh;}';
    iPP_inPlayerPreviewStyle.textContent += '.previewEpisodeImageCard {width: 12vw; height: 15vh; left: 1em;}';
    iPP_inPlayerPreviewStyle.textContent += '.previewEpisodeDescription {position: absolute; right: 1em; left: 13.5vw;}';
    document.body.appendChild(iPP_inPlayerPreviewStyle);

    /*
     * Update
     */
    if (window.isJMPClient) {
        function iPP_onPlayback(e, player, state) {
            if (state.NowPlayingItem) {
                // mediaRuntimeTicks = state.NowPlayingItem.RunTimeTicks;
                iPP_mediaSourceId = state.NowPlayingItem.Id;
                iPP_userId = window.ApiClient._currentUser.Id;
                window.ApiClient.getEpisodes(state.NowPlayingItem.SeriesId, {
                    IsVirtualUnaired: !1,
                    IsMissing: !1,
                    UserId: iPP_userId,
                    Fields: "Chapters"
                }).then((data) => iPP_episodeList = data)
            }
        }
        events.on(playbackManager, 'playbackstart', iPP_onPlayback);
    } else {
        // Override fetch method used by jellyfin-web internal API calls
        const {fetch: iPP_originalFetch} = window;

        window.fetch = async (...args) => {
            let [resource, config] = args;

            if (config) {
                let auth = config.headers[iPP_EMBY_AUTH_HEADER];
                iPP_embyAuthValue = auth ? auth : '';
            }

            iPP_debug(`Fetching data`);
            const response = await iPP_originalFetch(resource, config);

            let url = new URL(resource);
            let urlParts = url.pathname.split('/');
            let urlDictionary = iPP_sortUrlPartsIntoDictionary(urlParts.slice(1));

            for (const key of Object.keys(urlDictionary)) {
                // save the userId for later use
                if (!iPP_userId && key === 'Users') {
                    iPP_userId = urlDictionary[key];
                }

                if (key === 'PlaybackInfo') {
                    iPP_mediaSourceId = urlDictionary['Items'];
                    continue;
                }

                if (key === 'Items') {
                    let handleResponseFunction = (data) => iPP_handleItemResponse(data);
                    if (!urlDictionary[key])
                        handleResponseFunction = (data) => iPP_handleItemWithoutIdResponse(data);

                    response.clone().json().then(handleResponseFunction);
                    continue;
                }

                if (key === 'Episodes') {
                    response.clone().json().then(iPP_handleItemWithoutIdResponse);
                }
            }

            return response;
        };
    }

    function iPP_sortUrlPartsIntoDictionary(urlParts) {
        let urlPartsDictionary = {};
        for (let i = 0; i < urlParts.length; i++) {
            if (i % 2 === 0)
                urlPartsDictionary[urlParts[i]] = urlParts[i + 1];
        }

        return urlPartsDictionary;
    }

    function iPP_handleItemWithoutIdResponse(data) {
        iPP_episodeList = data;
    }

    function iPP_handleItemResponse(data) {
        if (data.Type === 'Movie') {
            iPP_previewButton.classList.add('hide');
            iPP_debug(`Found movie -- hiding preview button`)
        } else if (data.Type === 'Series') {
            iPP_previewButton.classList.remove('hide');
            iPP_debug(`Found series -- showing preview button`)
        }
    }

    /*
     * Monitor current page to be used for load/unload preview functions
     */
    const iPP_videoPaths = ['playback/video/index.html', '/video'];
    let iPP_previousRoutePath = null;
    document.addEventListener('viewshow', function () {
        let currentRoutePath = Emby.Page.currentRouteInfo.route.path;

        if (!currentRoutePath) {
            currentRoutePath = Emby.Page.currentRouteInfo.path;
            iPP_debug(`Current route path not found`);
        }

        iPP_debug(`Previous route path: ${iPP_previousRoutePath}`);
        iPP_debug(`Current route path: ${currentRoutePath}`)
        if (iPP_videoPaths.includes(currentRoutePath)) {
            iPP_loadVideoView();
        } else if (iPP_videoPaths.includes(iPP_previousRoutePath)) {
            iPP_unloadVideoView();
        }

        iPP_previousRoutePath = currentRoutePath;
    });

    function iPP_loadVideoView() {
        let buttonDiv = document.getElementsByClassName('buttons')[0];
        if (!buttonDiv)
            return;

        iPP_initPreviewButton();
        buttonDiv.querySelector('.osdTimeText').after(iPP_previewButton);

        iPP_initActionSheetContentContainer();
        iPP_initPreviewButtonPopup();
    }

    function iPP_unloadVideoView() {
        // Clear old values
        iPP_mediaSourceId = null;
        iPP_userId = null;
        iPP_episodeList = null;
        iPP_embyAuthValue = '';
    }

    function iPP_initPreviewButton() {
        let newPreviewButton = document.createElement('button');
        newPreviewButton.classList.add('autoSize', 'paper-icon-button-light');
        newPreviewButton.setAttribute('is', 'paper-icon-button-light');
        newPreviewButton.setAttribute('title', 'Episodes')
        newPreviewButton.appendChild(createPreviewButtonSvg());
        newPreviewButton.addEventListener('click', () => {
            // remove old content
            while (iPP_actionSheetContentContainer.firstChild)
                iPP_actionSheetContentContainer.removeChild(iPP_actionSheetContentContainer.firstChild);

            iPP_actionSheetTitle.textContent = iPP_episodeList.Items[0].SeasonName;
            iPP_createActionSheetContent();

            document.body.appendChild(iPP_dialogBackdrop);
            document.body.appendChild(iPP_dialogContainer);

            // scroll to the episode that is currently playing
            iPP_dialogContainer.querySelector('.selectedListItem').parentElement.scrollIntoView();
        });

        if (iPP_previewButton.classList.contains('hide'))
            newPreviewButton.classList.add('hide');

        iPP_previewButton = newPreviewButton;

        // helper function for creating the button icon as svg
        function createPreviewButtonSvg() {
            let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('fill-rule', 'evenodd');
            path.setAttribute('clip-rule', 'evenodd');
            path.setAttribute('fill', 'currentColor');
            path.setAttribute('d', 'M8 5H22V13H24V5C24 3.89543 23.1046 3 22 3H8V5ZM18 9H4V7H18C19.1046 7 20 7.89543 20 9V17H18V9ZM0 13C0 11.8954 0.895431 11 2 11H14C15.1046 11 16 11.8954 16 13V19C16 20.1046 15.1046 21 14 21H2C0.895431 21 0 20.1046 0 19V13ZM14 19V13H2V19H14Z');

            let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.appendChild(path);
            svg.setAttribute('viewBox', '0 0 24 24');
            svg.setAttribute('width', '24');
            svg.setAttribute('height', '24');

            return svg;
        }
    }

    function iPP_initPreviewButtonPopup() {
        let newDialogBackdrop = document.createElement('div');
        newDialogBackdrop.classList.add('dialogBackdrop', 'dialogBackdropOpened');
        iPP_dialogBackdrop = newDialogBackdrop;

        let newDialogContainer = document.createElement('div');
        newDialogContainer.classList.add('dialogContainer');
        newDialogContainer.appendChild(createFocusContainer());
        iPP_dialogContainer = newDialogContainer;

        // event listener for closing the preview popup and backdrop
        iPP_dialogContainer.addEventListener('click', () => {
            document.body.removeChild(iPP_dialogBackdrop);
            document.body.removeChild(iPP_dialogContainer);
        });

        // helper functions for creating preview popup components
        function createFocusContainer() {
            let focusContainer = document.createElement('div');
            focusContainer.classList.add('focuscontainer', 'dialog', 'actionsheet-not-fullscreen', 'actionSheet', 'centeredDialog', 'opened', 'previewPopup');
            focusContainer.setAttribute('data-history', 'true');
            focusContainer.setAttribute('data-removeonclose', 'true');

            focusContainer.appendChild(createActionSheet());
            return focusContainer;
        }
        function createActionSheet() {
            let actionSheetContent = document.createElement('div');
            actionSheetContent.classList.add('actionSheetContent');

            actionSheetContent.appendChild(createActionSheetTitle());
            actionSheetContent.appendChild(iPP_actionSheetContentContainer);
            return actionSheetContent;
        }
        function createActionSheetTitle() {
            let actionSheetTitleContainer = document.createElement('div');
            actionSheetTitleContainer.classList.add('actionSheetTitle', 'listItem', 'previewPopupTitle');
            actionSheetTitleContainer.addEventListener('click', (e) => {
                iPP_actionSheetTitle.textContent = 'Not implemented';
                e.stopPropagation();
            });

            iPP_actionSheetTitle = document.createElement('h1');
            iPP_actionSheetTitle.classList.add('actionSheetTitle');
            iPP_actionSheetTitle.textContent = "Season";

            let actionSheetTitleIcon = document.createElement('span');
            actionSheetTitleIcon.classList.add('actionsheetMenuItemIcon', 'listItemIcon', 'listItemIcon-transparent', 'material-icons', 'keyboard_backspace');

            actionSheetTitleContainer.appendChild(actionSheetTitleIcon);
            actionSheetTitleContainer.appendChild(iPP_actionSheetTitle);
            return actionSheetTitleContainer;
        }
    }

    function iPP_initActionSheetContentContainer() {
        let newActionSheetContentContainer = document.createElement('div');
        newActionSheetContentContainer.classList.add('actionSheetScroller', 'scrollY', 'previewPopupScroller');

        iPP_actionSheetContentContainer = newActionSheetContentContainer;
    }

    function iPP_createActionSheetContent() {
        let seasonId = iPP_episodeList.Items.find((item) => item.Id === iPP_mediaSourceId).SeasonId;
        let episodesInSeason = iPP_episodeList.Items.filter((item) => item.SeasonId === seasonId)
        episodesInSeason.forEach((episode) => {
            iPP_actionSheetContentContainer.appendChild(iPP_createEpisodeElement(episode));
        });
    }

    function iPP_createEpisodeElement(episode) {
        let container = document.createElement('div');
        container.classList.add('listItem', 'listItem-button', 'actionSheetMenuItem', 'emby-button', 'previewListItem');
        container.setAttribute('is', 'emby-button');
        container.setAttribute('data-id', episode.IndexNumber);

        container.appendChild(createEpisodeHeader(episode));
        container.appendChild(createEpisodeInfoContainer(episode));

        // event listener for showing episode content on click
        container.addEventListener('click', (e) => {
            // hide episode content for all existing episodes in the preview list
            for (let child of $(".previewListItemContent")) {
                child.classList.add('hide');
                child.classList.remove('selectedListItem');
            }

            // show episode content for the selected episode
            let episodeContainer = container.querySelector('.previewListItemContent')
            episodeContainer.classList.remove('hide');
            episodeContainer.classList.add('selectedListItem');

            e.stopPropagation();
        });
        return container;

        // helper functions for creating episode elements
        function createEpisodeHeader(episode) {
            let button = document.createElement('button');
            button.classList.add('listItem');
            button.setAttribute('type', 'button');

            let indexSpan = document.createElement('span');
            indexSpan.textContent = episode.IndexNumber;

            let contentDiv = document.createElement('div');
            contentDiv.classList.add('listItemBody', 'actionsheetListItemBody');

            let titleSpan = document.createElement('span');
            titleSpan.classList.add('actionSheetItemText');
            titleSpan.textContent = episode.Name;

            contentDiv.appendChild(titleSpan);
            button.appendChild(indexSpan);
            button.appendChild(contentDiv);

            return button;
        }
        function createEpisodeInfoContainer(episode) {
            let episodeInfoContainer = document.createElement('div');
            episodeInfoContainer.classList.add('previewListItemContent', 'hide');

            // for the episode that is currently playing, show the episode content
            if (episode.Id === iPP_mediaSourceId) {
                episodeInfoContainer.classList.remove('hide')
                episodeInfoContainer.classList.add('selectedListItem');
            }

            // create the episode preview image as a button to switch to the episode
            let episodePreviewImage = document.createElement('button');
            episodePreviewImage.classList.add('cardImageContainer', 'cardContent', 'itemAction', 'lazy', 'blurhashed', 'lazy-image-fadein-fast', 'previewEpisodeImageCard');
            episodePreviewImage.setAttribute('data-action', 'link');
            episodePreviewImage.setAttribute('style', 'background-image: url("' + (window.isJMPClient ? iPP_getServerUrl() : "..") + '/Items/' + episode.Id + '/Images/Primary?tag=' + episode.ImageTags.Primary + '");');
            episodePreviewImage.addEventListener('click', () => {
                
            });
            episodeInfoContainer.appendChild(episodePreviewImage);

            let request = iPP_loadEpisodeDescription(episode.Id);
            request.onloadend = () => {
                let episodeDescription = document.createElement('span');
                episodeDescription.classList.add('previewEpisodeDescription');
                episodeDescription.textContent = request.response.Overview;
                iPP_dialogContainer.querySelector('[data-id="' + episode.IndexNumber + '"]').lastElementChild.appendChild(episodeDescription);
            }

            return episodeInfoContainer;
        }
    }

    /*
     * Load data from backend
     */
    function iPP_loadEpisodeDescription(episodeId) {
        let requestUrl = iPP_buildRequestUrl(iPP_EPISODE_INFO_ENDPOINT)
            .replace('{userId}', iPP_userId)
            .replace('{episodeId}', episodeId);
        let episodeDescriptionRequest = new XMLHttpRequest();
        episodeDescriptionRequest.responseType = 'json';

        episodeDescriptionRequest.open('GET', requestUrl);

        if (window.isJMPClient) {
            const apiClient = ServerConnections
                ? ServerConnections.currentApiClient()
                : window.ApiClient;

            const address = apiClient.serverAddress();
            episodeDescriptionRequest.setRequestHeader('Authorization', `MediaBrowser Token=${apiClient.accessToken()}`);
        } else
            episodeDescriptionRequest.setRequestHeader(iPP_EMBY_AUTH_HEADER, iPP_embyAuthValue);
        episodeDescriptionRequest.send();

        return episodeDescriptionRequest;
    }

    /*
     * utility methods for building request urls
     */
    function iPP_buildRequestUrl(endpoint) {
        if (window.isJMPClient)
            return iPP_getServerUrl() + endpoint;
        return endpoint;
    }

    /*
     * retrieves the server url, if using local Jellyfin Media Player (JMP)
     */
    function iPP_getServerUrl() {
        const apiClient = ServerConnections
            ? ServerConnections.currentApiClient()
            : window.ApiClient;
        return apiClient.serverAddress();
    }
