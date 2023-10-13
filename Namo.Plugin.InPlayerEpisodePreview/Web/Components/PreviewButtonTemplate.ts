import {BaseTemplate} from "./BaseTemplate";

export class PreviewButtonTemplate extends BaseTemplate {
    constructor(container: HTMLElement, positionAfterIndex: number) {
        super(container, positionAfterIndex);
        this.setElementId('popupPreviewButton');
    }

    getTemplate() {
        return `
            <button id="${this.getElementId()}" class="autoSize paper-icon-button-light" is="paper-icon-button-light" title="Episode Preview">
                <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill-rule="evenodd"
                        clip-rule="evenodd"
                        fill="currentColor"
                        d="M8 5H22V13H24V5C24 3.89543 23.1046 3 22 3H8V5ZM18 9H4V7H18C19.1046 7 20 7.89543 20 9V17H18V9ZM0 13C0 11.8954 0.895431 11 2 11H14C15.1046 11 16 11.8954 16 13V19C16 20.1046 15.1046 21 14 21H2C0.895431 21 0 20.1046 0 19V13ZM14 19V13H2V19H14Z" >
                    </path>
                </svg>
            </button>
        `;
    }

    public render(clickHandler: Function) {
        let renderedElement = this.addElementToContainer();
        renderedElement.addEventListener('click', () => clickHandler());
    }
}