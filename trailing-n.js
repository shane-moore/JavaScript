// calc the number of trailing zeros in a factorial of a given number
// N! = 1 * 2 * 3 * 4 * ... N
// convert total to a string, loop backward, if value === 0, total + 1,  if > 0, return total;

const zeros = (n) => {
    let total = 1;
    for( let i = 1; i <= n; i++ ) {
        total *= i;
    }
    let stringified = String(total)
    let instancesOfZero = 0;
    for( let i = stringified.length - 1; i >= 0; i-- ) {
    if( stringified[i] === "0" ){
        instancesOfZero++;
    } else {
        break;
    }
    }
    console.log(instancesOfZero);

}
zeros(12)