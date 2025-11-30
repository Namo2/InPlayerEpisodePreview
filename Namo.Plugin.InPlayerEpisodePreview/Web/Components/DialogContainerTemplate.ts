import {BaseTemplate} from "./BaseTemplate";

export class DialogContainerTemplate extends BaseTemplate {
    dialogBackdropId = 'dialogBackdrop'
    dialogContainerId = 'dialogContainer'
    popupContentContainerId = 'popupContentContainer'
    popupFocusContainerId = 'popupFocusContainer'

    private keydownHandler!: (e: KeyboardEvent) => void
    private popstateHandler!: () => void

    constructor(container: HTMLElement, positionAfterIndex: number) {
        super(container, positionAfterIndex)
        this.setElementId('previewPopup')
    }

    getTemplate(): string {
        return `
            <div id="${this.getElementId()}">
                <div id="${this.dialogBackdropId}" class="dialogBackdrop dialogBackdropOpened"></div>
                <div id="${this.dialogContainerId}" class="dialogContainer" role="dialog" aria-modal="true" tabindex="-1">
                    <div id="${this.popupFocusContainerId}"
                        class="focuscontainer dialog actionsheet-not-fullscreen actionSheet centeredDialog opened previewPopup actionSheetContent" 
                        data-history="true" 
                        data-removeonclose="true"
                        role="document"
                        tabindex="-1">
                        <div id="${this.popupContentContainerId}" class="actionSheetScroller scrollY previewPopupScroller"/>
                    </div>
                </div>
            </div>
        `
    }

    public render(): void {
        const root = this.addElementToContainer()
        const focusContainer = root.querySelector(`#${this.popupFocusContainerId}`) as HTMLElement

        root.addEventListener('click', (_: MouseEvent) => this.close())

        this.popstateHandler = () => this.close()
        history.pushState(null, '', location.href)
        window.addEventListener('popstate', this.popstateHandler)

        document.addEventListener("keydown", (event: KeyboardEvent) => {
            console.log("keyboard nav:", event.key, event)
            const supportedActions = [
                "ArrowUp", "ArrowDown", 
                "GamepadDPadUp", "GamepadDPadDown", 
                "GamepadLeftThumbStickUp", "GamepadLeftThumbStickDown", 
                "Tab", 'Escape', ' '
            ]
            
            if (!supportedActions.includes(event.key)) return

            event.stopImmediatePropagation()
            event.preventDefault()

            if (event.key === 'Escape') {
                this.close()
                return
            }

            if (event.key === "ArrowUp" || event.key === "GamepadDPadUp" || event.key === "GamepadLeftThumbStickUp") this.customNavigation("up")
            if (event.key === "ArrowDown" || event.key === "GamepadDPadDown" || event.key === "GamepadLeftThumbStickDown") this.customNavigation("down")
            if (event.key === 'Tab') this.customNavigation("down")
        }, true)

        // setTimeout(() => {
        //     const focusable = Array.from(
        //         root.querySelectorAll<HTMLElement>(
        //             'button:not([disabled]), select:not([disabled]), input:not([disabled]), [tabindex="0"]'
        //         )
        //     )
        //     const firstFocusable = focusable.find(el => el.querySelector('.selectedListItem')) || focusable[0] || null
        //
        //     if (firstFocusable) firstFocusable.focus()
        //     else focusContainer.focus()
        //
        //     // scroll to the episode that is currently playing
        //     // this.getContainer().getEle.parentElement.scrollIntoView()
        // }, 10)
    }

    private customNavigation(action: string) {
        console.log("navigation:", action)
        
        const focusableItems = this.getFocusableElements()
        if (focusableItems.length === 0) return

        let index = focusableItems.indexOf(document.activeElement as HTMLElement)
        // fallback if active element is not in list
        if (index === -1) index = action === 'down' ? -1 : 0;

        const newIndex = action === 'down'
            ? (index + 1) % focusableItems.length
            : (index - 1 + focusableItems.length) % focusableItems.length

        focusableItems[newIndex].focus();
    }

    private close(): void {
        const elem = document.getElementById(this.getElementId())
        if (!elem) return

        window.removeEventListener('popstate', this.popstateHandler)
        document.removeEventListener('keydown', this.keydownHandler)

        this.getContainer().removeChild(elem)
    }

    private getFocusableElements(): HTMLElement[] {
        const container = this.getContainer().querySelector(`#${this.popupFocusContainerId}`) as HTMLElement
        if (!container) return []

        const selector = `
            a[href],
            button:not([disabled]),
            input:not([disabled]),
            select:not([disabled]),
            textarea:not([disabled]),
            [tabindex]:not([tabindex="-1"])
        `

        return Array.from(container.querySelectorAll<HTMLElement>(selector))
            .filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null); // ignore hidden
    }
}