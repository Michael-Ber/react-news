export const findNodeAfterClick = (element, desireElement) => {
    if(element.tagName === desireElement) {
        return element
    }
    if(element.tagName === 'BODY') {
        return null
    }
    return findNodeAfterClick(element.parentNode, desireElement)
}