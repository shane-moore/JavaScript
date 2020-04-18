// ROT 13 is letter substitution cipher replacing letter w/ letter 13 letters after in aplabet

// create function that takes string and retursn the string ciphered with Rot13
// numbers or special charactesr should be returned as is
// only letters should be shifted

// split string into an array, run map function over it, convert letter to unicode, add 13 to unicode
// if Unicode decimal value > 90, do number - 90 then add that to 62, convert back to Symbol
// only do this is regex for [a-z]\i comes back true, otherwise keep as is

function rot13(message) {
  // your code here
  console.log(message.split('').map(char => {
    if (char.match(/[A-Z]/i)) {
      let unicodeValue = char.toUpperCase().charCodeAt(0);
      let rotUnicodeValue = ((unicodeValue + 12) > 90) ? (unicodeValue + 12 - 90 + 65) : unicodeValue + 13;
      if (rotUnicodeValue === "[") rotUnicodeValue = "a";
      let rotChar = String.fromCharCode(rotUnicodeValue);
      if (rotChar === "[") rotChar = "a";
      if (char === char.toUpperCase()) {
        return rotChar;
      } else return rotChar.toLowerCase();
    } else {
      return char;
    }
  }).join(''))

  // var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  // return message.replace(/[a-z]/gi, char => b[a.indexOf(char)])
}

rot13('p3AN0T BUTT%R')
