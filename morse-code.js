// // case insensitive
// // single space seperates character codes
// // 3 spaces seperate words
// // trim spacing before and after
// // SOS is ...---... and is a special single character hence no space
// // A is .-
// // translate .'s and -'s to human words

// decodeMorse = function(morseCode){
//     console.log(morseCode);
//     morseCode = morseCode.trim();
//     console.log(morseCode);
//     let humanString = '';
//     let splitWords = morseCode.split('   ');
//     console.log(splitWords);
//     let humanWords = splitWords.map( word => {
//       let splitCharacters = word.split(' ');
//       console.log(splitCharacters)
//       splitCharacters = splitCharacters.forEach( char => {
//         return char.trim();
//       });
//       })
//     console.log(humanWords);
//     return humanString;
//     }
// decodeMorse('.... . -.--   .--- ..- -.. .')

let phrase = "rawring twenties";
console.log(phrase.split(' '));