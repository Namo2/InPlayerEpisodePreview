import { readFileSync } from 'fs';
class inPlayerPreviewPlugin {
    constructor({ playbackManager, events, ServerConnections }) {
        this.name = 'InPlayerPreview Plugin';
        this.type = 'input';
        this.id = 'inPlayerPreviewPlugin';

        (async () => {
            await window.initCompleted;
            const enabled = window.jmpInfo.settings.plugins.inPlayerPreviewPlugin;

            console.log("InPlayerPreviewPlugin Plugin enabled: " + enabled);
            // if (!enabled) return;

            // Execute InPlayerPreview Code
            eval(readFileSync('./inPlayerPreview.js', 'utf8')+'');
        })();
    }
}

window._inPlayerPreviewPlugin = inPlayerPreviewPlugin;