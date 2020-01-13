// find multiples of 3  or 5 from a given number
// divide number by 3, loop up to that number and multiply each index by 3, place each value in an array
// do the same with 5 and place numbers in the array unless if the array.includes that value already
// do a Math.sum which I'm pretty sure is a thing, yooooo


const solution = ( number ) => {
    let dividedByThree = Math.floor(number / 3);
    let divisibleContainer = [];
    for( let i = 1; i <= dividedByThree; i++ ){
        if( i * 3 !== number ) {
            divisibleContainer.push( 3 * i );
        }
    }
    let dividedByFive = Math.floor( number / 5 );
    for( let i = 1; i <= dividedByFive; i++ ) {
        if( (!divisibleContainer.includes(i * 5)) && (i * 5 !== number) ) {
            divisibleContainer.push(i * 5 );
        }
    }
    return divisibleContainer.reduce( (total, sum) => total + sum, 0 );
}
solution( 10 );

const solution = n => {
    let s = 0;
    for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
}