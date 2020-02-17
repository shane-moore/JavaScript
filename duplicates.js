// count the duplicates
// return count of distinct case-insensitive alphabetic characters and numeric digits that occur > once in input string
// loop over text
// run global match on string for the indexed element
// add contents of matched array to storage array if i is not present in storage array

function duplicateCount(text) {
    let distinctArray = [];
    for( let i = 0; i < text.length; i++ ) {
        let char = text.charAt(i).toLowerCase();
        let regexp = new RegExp(char, "gi");
        let tempMatchArray = text.match(regexp);
        let stringify = tempMatchArray.join('')
        if( stringify.length > 1 && !distinctArray.includes(stringify) ) {
            distinctArray.push(stringify);
        }
    }
    console.log(distinctArray);
    return distinctArray.length;
}

duplicateCount("abcdefABCabA");