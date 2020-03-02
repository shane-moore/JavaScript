// convert in to whitespace format
// [space] is " "
// [tab] is "\t"
// [lf] is "\n"
// first char is sign [space] === +, [tab] === -
// next chars to [lf] are binary rep of an int [space] for 0, [tab] === 1
// int is terminated by [lf]
// 0 is [space][lf]
// no leading zeros
// if first char is positive int -> push into array " " else push \t
// convert to binary, remove trailing zeros, convert 1's to tabs and zeros to " "s
// add a line feed to the end
// return String;

function whitespaceNumber(n) {
  if (n !== 0) {
    let newN = n
      .toString(2)
      .split("")
      .map(num => {
        if (num === "1") return "\t";
        if (num === "0") return " ";
      });
    if (n === 0) return ` \n`;
    if (Math.sign(n) > 0) {
      return ` ${newN.join("")}\n`;
    } else return `\t${newN.join("")}\n`;
  }
}

whitespaceNumber(-7);
