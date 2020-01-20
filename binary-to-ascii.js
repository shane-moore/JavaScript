// split string into array of 8 digit elements
// convert the eight digits to numbers
// use asci look up table

const binaryToString = (binary) => {
    let binaryArray = binary.match(/......../g);
    if(binaryArray) {
        binaryArray = binaryArray.map( onesAndZeros => {
            return String.fromCharCode(parseInt(onesAndZeros, 2));

        })
    }
    if(binary){
        return binaryArray.join("")
    }  else return "";
}
binaryToString('001111000011101000101001');