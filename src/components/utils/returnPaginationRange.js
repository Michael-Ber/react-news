import { _range } from "./_range";

export const returnPaginationRange = (totalPage, page, limit, siblings) => {
    let totalPageNoInArray = 5 + siblings; 
    if(totalPageNoInArray >= totalPage) { // No Dots
        return _range(1, totalPage + 1);
    }
    let leftSiblingsIndex = Math.max(page - siblings, 1);
    let rightSiblingsIndex = Math.min(page + siblings, totalPage);
    let showLeftDots = leftSiblingsIndex > 2;
    let showRightDots = rightSiblingsIndex < totalPage - 2;

    if(!showLeftDots && showRightDots) {
        let leftItemsCount = 1 + 2 * siblings;
        let leftRange = _range(1, leftItemsCount + 1);
        return [...leftRange, " ...", totalPage]
    }else if(showLeftDots && !showRightDots) {
        let rightItemsCount = 1 + 2*siblings;
        let rightRange = _range(totalPage - rightItemsCount + 1, totalPage + 1);
        return [1, "... ", ...rightRange];
    }else {
        let middleRange = _range(leftSiblingsIndex, rightSiblingsIndex + 1);
        return [...middleRange, " ...", totalPage];
        // return [1, '... ', ...middleRange, ' ...', totalPage] both side dots
    }
}