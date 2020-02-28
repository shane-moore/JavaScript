// input is two ints m, n where 1 <= m <= n
// output is array of arrays whose sum of square divisors are itself a square
// loop from m to n
// put all divisors of value into an array, square each value, sum them, test if is a square
// if a square, int and squared value into final array

const listSquared = function(m, n) {
    let nestedArrays = [];
    for(let i = m; i <= n; i++) {
        
        let divisorsContainer = divisors(i);
        let sumOfSquared = divisorsContainer.reduce( (total, integer) => {
            total + integer * 2;
        }, 0 );
        // console.log(sumOfSquared);
         sumOfSquared % Math.sqrt(sumOfSquared) === 0 ? nestedArrays.push([i, sumOfSquared]) : '';
    }
    return nestedArrays;
}
function divisors(integer) {
    divs = [];
    if( integer > 1 ) {
        for( let i = 0; i<=integer; i++ ){
            if(integer % i === 0) {
                divs.push(i, integer/i);
            }
        }
    } else if( integer === 1 ) {
        divs.push( integer, integer );
    }
    return [... new Set(divs)]
}

listSquared(1, 2);