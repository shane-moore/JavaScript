// move consonants forward 9 places through the alphabet
// if pass 'z', start again at 'a'
// vowels move back 5 spaces
// if pass 'a', start again at 'z'
// if a 'c' or 'o', move it back 1 place
// d moves back 3
// e moves back 4
// if a letter becomes 'c', 'o', 'd', or 'e', revert it back to original value

function vowelBack(s){
    let alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
    let vowelBackArray = new Array();
let mostConsonants = s.forEach( (char, i) => {
    switch(true) {
        case (char.match(/[^aeioucd])):
            vowelBackArray.push( alphabet[i + 9] );
            break;
    }
} )
}

vowelBack("testcase");