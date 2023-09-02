export function createListOfNameswithComas(listOfProducts){
    const size = listOfProducts.length
    let listOfNames = []
    for(let i= 0; i<listOfProducts.length; i++) { 
        let currentWorld = listOfProducts[i].title
        if(i=== (size-1) ) { 
            let currentWordWithoutLastWhiteSpace = removeLastWhiteSpace(currentWorld)
            currentWordWithoutLastWhiteSpace= currentWordWithoutLastWhiteSpace + "." 
            listOfNames.push(currentWordWithoutLastWhiteSpace)
        }else {
            let currentWordWithoutLastWhiteSpace = removeLastWhiteSpace(currentWorld)
            currentWordWithoutLastWhiteSpace= currentWordWithoutLastWhiteSpace + ", " 
            listOfNames.push(currentWordWithoutLastWhiteSpace)
        }
    }
    return listOfNames
}

export function removeLastWhiteSpace(text) {
    if (text.length === 0) {
        return text; 
    } else {
        return text.slice(0, text.lastIndexOf(" ")) + text.slice(text.lastIndexOf(" ") + 1);
    }
}