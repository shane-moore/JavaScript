// turn number into a string and then to an array
// reverse the array and multiply number in array by 10 raised to the index in a new mapped array
// join mapped array with +'s between
// slice off the trailing space and + w/ slice(0, -2)

function expandedForm(num) {
    let convertNumberToString = '' + num;
    let stringToArray = convertNumberToString.split('').reverse();
    let mappedArray = stringToArray.map( (num, i) => num * Math.pow(10, i));
    console.log(mappedArray);
    let newMappedArray = mappedArray.filter( (el) => !el.toString().startsWith('0'));
    let addedString = newMappedArray.reverse().join(' + ');
    console.log(addedString);
    return addedString;
}

expandedForm(184003);