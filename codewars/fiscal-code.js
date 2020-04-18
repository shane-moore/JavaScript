// every person has a unique id code after birth
// given obj containing personal data of a person
// return the 11 code char as a string following steps
// create function for first name, last name, and one for dob + gender
// master function calls all the other, passes the required params and returns a concatinated string

function fiscalCode(person) {
  let nuts = obfuscateSurname(person.surname) + obfuscateName(person.name) + obfuscateDate(person.gender, person.dob);
  console.log(nuts)
}

function obfuscateSurname(surname) {
  let vowelOne;
  let vowelTwo;
  let x = "X";
  let obfuscatedSurname = [];
  surname.split('').forEach(char => {
    if (char.toLowerCase() !== "a" && char.toLowerCase() !== "e" && char.toLowerCase() !== "i" && char.toLowerCase() !== "o" && char.toLowerCase() !== "u") {
      obfuscatedSurname.push(char);
    } else if (!vowelOne) vowelOne = char;
    else if (!vowelTwo) vowelTwo = char;
  })
  console.log(obfuscatedSurname);

  if (obfuscatedSurname.length > 3) {
    obfuscatedSurname = obfuscatedSurname.slice(0, 3);
  }
  console.log(obfuscatedSurname);
  let vowelsNeeded = obfuscatedSurname.length === 3 ? 0 : 3 - obfuscatedSurname.length;
  vowelsNeeded ? obfuscatedSurname.push(vowelOne) : null;
  obfuscatedSurname.length < 3 ? vowelTwo ? obfuscatedSurname.push(vowelTwo) : obfuscatedSurname.push('X') : null;
  if (obfuscatedSurname.length === 2) obfuscatedSurname.push('X');
  return obfuscatedSurname.join('').toUpperCase();
}

function obfuscateName(name) {
  let vowelOne;
  let vowelTwo;
  let x = "X";
  let obfuscatedName = [];
  name.split('').forEach(char => {
    if (char.toLowerCase() !== "a" && char.toLowerCase() !== "e" && char.toLowerCase() !== "i" && char.toLowerCase() !== "o" && char.toLowerCase() !== "u") {
      obfuscatedName.push(char);
    } else if (!vowelOne) vowelOne = char;
    else if (!vowelTwo) vowelTwo = char;
  })
  if (obfuscatedName.length > 3) {
    obfuscatedName = [obfuscatedName[0], obfuscatedName[2], obfuscatedName[3]];
  }

  let vowelsNeeded = obfuscatedName.length >= 3 ? 0 : 3 - obfuscatedName.length;
  vowelsNeeded ? obfuscatedName.push(vowelOne) : null;
  obfuscatedName.length < 3 ? vowelTwo ? obfuscatedName.push(vowelTwo) : obfuscatedName.push('X') : null;
  if (obfuscatedName.length === 2) obfuscatedName.push('X');
  return obfuscatedName.join('').toUpperCase();
}

function obfuscateDate(gender, dob) {
  let [day, month, year] = dob.split("/");
  let obfuscatedDate = [];
  obfuscatedDate.push(year.substring(2))
  Object.keys(months).forEach((key) => {
    if (key === month) {
      obfuscatedDate.push(months[key]);
    };
  });
  if (gender === "M") {
    day > 9 ? obfuscatedDate.push(day) : obfuscatedDate.push("0" + day);
  } else if (gender === "F") {
    obfuscatedDate.push(Number(day) + 40)
  }
  return obfuscatedDate.join('').toUpperCase();

}


const months = {
  1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
  7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T"
};

fiscalCode({ name: "Bob", surname: "Marley", gender: "M", dob: "3/3/1990" })

// fiscalCode({
//   name: "Elaine",
//   surname: "Seinfeld",
//   gender: "F",
//   dob: "7/5/1950"
// })
