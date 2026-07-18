const SPINNER_LAYERS_HTML: string = [1, 2, 3, 4].map(layer =>
    `<div class="mdl-spinner__layer mdl-spinner__layer-${layer}">` +
        `<div class="mdl-spinner__circle-clipper mdl-spinner__left">` +
            `<div class="mdl-spinner__circle mdl-spinner__circleLeft"></div>` +
        `</div>` +
        `<div class="mdl-spinner__circle-clipper mdl-spinner__right">` +
            `<div class="mdl-spinner__circle mdl-spinner__circleRight"></div>` +
        `</div>` +
    `</div>`
).join('')

export function spinnerHtml(extraClasses: string = ''): string {
    return `<div dir="ltr" class="docspinner mdl-spinner ${extraClasses}">${SPINNER_LAYERS_HTML}</div>`
}

export function activateSpinner(container: ParentNode): void {
    container.querySelector('.mdl-spinner')?.classList.add('mdlSpinnerActive')
}