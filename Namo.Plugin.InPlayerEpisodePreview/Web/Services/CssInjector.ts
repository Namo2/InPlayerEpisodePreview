export class CssInjector {
    constructor() {
    }

    public injectCss(cssFilePath: string, node: HTMLElement = document.head) {
        let stylesheet = document.createElement('link');
        stylesheet.rel = 'stylesheet';
        stylesheet.type = 'text/css';
        stylesheet.href = cssFilePath;
        node.appendChild(stylesheet);
    }
}
