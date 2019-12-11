// split the string into pairs of two chars
// if odd number, then replace missing second char of final pair w/ an underscore
// input is a string
// output is a string type array
// if i is even, push i and i+1 into a new array added together,
// if i is odd, skip

function solution(str){
    let charactersContainer = [];
    str.split('').forEach( (char, i) => {
        if((i % 2 === 0) && (!(str[i + 1]))) {
            charactersContainer.push( `${str[i]}_` );
        }
        else if( i % 2 === 0 ) {
            charactersContainer.push( `${str[i]}${str[i+1]}` );
        } else if (i % 2 !== 0) {
            return;
        }
})
    console.log(charactersContainer);
}

solution('abc');