import {BaseTemplate} from "./BaseTemplate";

export class PreviewButtonTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number) {
        super(container, positionAfterIndex);
        this.setElementId('popupPreviewButton');
    }

    getTemplate() {
        // language=HTML
        return `
            <button id="${this.getElementId()}" class="autoSize paper-icon-button-light" is="paper-icon-button-light"
                    title="Episode Preview">
                <!-- Created with Inkscape (http://www.inkscape.org/) -->
                <svg
                        width="24"
                        height="24"
                        viewBox="0 0 6 4"
                        id="svg1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg">
                    <defs
                            id="defs1">
                        <linearGradient
                                id="swatch47">
                            <stop
                                    style="stop-color:#ffffff;stop-opacity:1;"
                                    offset="0"
                                    id="stop47"/>
                        </linearGradient>
                        <linearGradient
                                id="swatch12">
                            <stop
                                    style="stop-color:#ffffff;stop-opacity:1;"
                                    offset="0"
                                    id="stop12"/>
                        </linearGradient>
                        <linearGradient
                                id="swatch11">
                            <stop
                                    style="stop-color:#000000;stop-opacity:0.39405206;"
                                    offset="0"
                                    id="stop11"/>
                        </linearGradient>
                        <linearGradient
                                id="swatch4">
                            <stop
                                    style="stop-color:#ffffff;stop-opacity:0;"
                                    offset="0"
                                    id="stop4"/>
                        </linearGradient>
                        <linearGradient
                                xlink:href="#swatch47"
                                id="linearGradient47"
                                x1="59.173363"
                                y1="116.25832"
                                x2="146.67133"
                                y2="116.25832"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="matrix(0.04306705,0,0,0.0476792,-2.3158959,-2.6326857)"/>
                        <linearGradient
                                xlink:href="#swatch47"
                                id="linearGradient48"
                                gradientUnits="userSpaceOnUse"
                                x1="59.173363"
                                y1="116.25832"
                                x2="146.67133"
                                y2="116.25832"
                                gradientTransform="matrix(0.04302157,0,0,0.04774236,-1.5222896,-3.4322796)"/>
                        <linearGradient
                                xlink:href="#swatch47"
                                id="linearGradient49"
                                gradientUnits="userSpaceOnUse"
                                x1="59.173363"
                                y1="116.25832"
                                x2="146.67133"
                                y2="116.25832"
                                gradientTransform="matrix(0.04309446,0,0,0.04772409,-0.7328926,-4.2239038)"/>
                    </defs>
                    <g
                            id="layer1">
                        <rect
                                style="fill:none;fill-opacity:1;fill-rule:nonzero;stroke:url(#linearGradient47);stroke-width:0.476467;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:stroke markers fill"
                                id="rect47"
                                width="3.7568676"
                                height="2.1693661"
                                x="0.23823303"
                                y="1.8257335"/>
                        <path
                                id="rect47-5"
                                style="fill:none;stroke:url(#linearGradient48);stroke-width:0.476597;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:stroke markers fill"
                                d="m 1.0291437,1.0320482 h 3.7528991 v 2.1722394 l 0.00676,-2.1572595 z"/>
                        <path
                                id="rect47-8"
                                style="fill:none;stroke:url(#linearGradient49);stroke-width:0.477427;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;paint-order:stroke markers fill"
                                d="m 1.8228614,0.23871336 h 3.759259 V 2.4101211 l -0.0068,-2.17140774 z"/>
                    </g>
                </svg>

            </button>
        `;
    }

    public render(clickHandler: Function) {
        let renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', () => clickHandler());
    }
}