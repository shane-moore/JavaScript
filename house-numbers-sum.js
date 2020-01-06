// add numbers on houses passed while walking home
// stop at 0

function houseNumbersSum(inputArray) {
    // let total = 0;
    // for( let i = 0; i < inputArray.length; i++ ) {

    //     if( inputArray[i] === 0 ) {
    //         break;
    //     } else { total += inputArray[i] }
    // }
    // return total;
    // return inputArray.slice(0,inputArray.indexOf(0)).reduce( (total, num) => { total + num, 0 } );
    return inputArray.reduce( (total, num, i) => total + (i < inputArray.indexOf(0) ? num : 0 ), 0);
}

houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]);