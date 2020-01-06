// lower case letters need to be added
// letters can overflow
// overflow is possible
// default is 'z' if no letters given

function addLetters(...letters) {
    if( letters === undefined) { return 'z'};
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let total = 0;

    letters.forEach( letter => {
        total += alphabet.indexOf(letter) + 1;
        }
    )
    if( total <= 26 ) {
        return alphabet.find( (value, i) => i === (total - 1));
    }
    while( total > 26 ) {
        total = total - 26;
    }
    return alphabet.find( (value, i) => i === (total - 1));
    }
}
addLetters();
