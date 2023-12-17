export abstract class BaseTemplate {
    /*
     * the HTML based ID of the new generated Element
     */
    private elementId: string;

    protected constructor(private container: HTMLElement, private positionAfterIndex: number) { }

    public getContainer(): HTMLElement {
        return this.container;
    }

    public getPositionAfterIndex(): number {
        return this.positionAfterIndex;
    }

    protected setElementId(elementId: string): void {
        this.elementId = elementId;
    }

    public getElementId(): string {
        return this.elementId;
    }

    abstract getTemplate(): string;

    abstract render(...clickHandlers: Function[]): void;

    protected addElementToContainer(...clickHandlers: Function[]): HTMLElement {
        // Add Element as the first child if position is negative
        if (this.getPositionAfterIndex() < 0 && this.getContainer().hasChildNodes()) {
            this.getContainer().firstElementChild.before(this.stringToNode(this.getTemplate(...clickHandlers)));
            return this.getElement();
        }
        
        // Add Element if container is empty
        if (!this.getContainer().hasChildNodes()) {
            this.getContainer().innerHTML = this.getTemplate();
            return this.getContainer().querySelector(`#${this.getElementId()}`);
        }
        
        let childBefore = this.getContainer().lastElementChild
        if (this.getContainer().children.length > this.getPositionAfterIndex() && this.getPositionAfterIndex() >= 0)
            childBefore = this.getContainer().children[this.getPositionAfterIndex()];

        childBefore.after(this.stringToNode(this.getTemplate()));

        return this.getContainer().querySelector(`#${this.getElementId()}`);
    }
    
    private stringToNode(templateString: string): Node {
        let placeholder = document.createElement('div');
        placeholder.innerHTML = templateString;
        return placeholder.firstElementChild;
    }
}