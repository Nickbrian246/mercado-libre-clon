/**
 * 
 * @param {start index} startIndex 
 * @param {endIndex} endIndex 
 * @param {productsArray} ItemsGroup 
 * @returns array items between first index and last index 
 */
export function extractProductsFromArray (startIndex, endIndex, ItemsGroup) {
    let newGroupOfItems = [];

    for (let i = startIndex; i < endIndex; i++) { 
    let product = ItemsGroup[i];
    newGroupOfItems.push(product);
    }
    return newGroupOfItems
} 