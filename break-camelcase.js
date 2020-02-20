// input is a camelcase string
// output breaks up camel case into multiple words if found a camel letter
// loop over string, add letters to a temp string if fail test seeing if letter is upperCase, if pass, pop temp string into a new array, then join the array at end with a space

const stringCapital = (string) => {
    let splitStringsContainer = [];
    let tempString = "";
    string.split('').forEach( char => {
        if(char === char.toUpperCase()) {
            splitStringsContainer.push(tempString);
            tempString = char;
        } else {
            tempString += char;
        }
    } )
    splitStringsContainer.push(tempString);
    console.log(splitStringsContainer.join(" "));
}

stringCapital('camelCasingTest');