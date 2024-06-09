class inPlayerEpisodePreviewPlugin {
    constructor({ playbackManager, events, ServerConnections }) {
        this.name = 'InPlayerEpisodePreview Plugin';
        this.type = 'input';
        this.id = 'inPlayerEpisodePreviewPlugin';

        (async () => {
            await window.initCompleted;
            const enabled = window.jmpInfo.settings.plugins.inPlayerEpisodePreviewPlugin;

            console.log("InPlayerEpisodePreview Plugin enabled: " + enabled);
            // if (!enabled) return;

            // InPlayerEpisodePreview Web-Client Code Start

            // JMP_CLIENT_CODE
            // InPlayerEpisodePreview Web-Client Code End
        })();
    }
}

window._inPlayerEpisodePreviewPlugin = inPlayerEpisodePreviewPlugin;