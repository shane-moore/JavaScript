// input is an array of objects w/ key value pairs of name : string
// return a  string w/ a list of names seperated by commas except for the last two names, which should be seperated by an ampersand
// let namesString = '';
// function list(names){
//   let lastTwoNames = names.map( item => item.name).filter( (name, i) => i > (names.length - 3));
//   console.log(lastTwoNames);
//   let firstNames = names.map( item => item.name).filter((name,i) => i <= (names.length - 3));
//   console.log(firstNames);
//   namesString = firstNames.join(', ');
//   if(lastTwoNames.length >= 1 && firstNames.length >= 1) {
//       namesString += `, ${lastTwoNames.join(' & ')}`;
//       console.log(namesString);
//   } else if( lastTwoNames.length > 1 ) {
//       namesString += `${lastTwoNames.join(' & ')}`;
//   } else if( names.length = 1) {
//       namesString = lastTwoNames.pop();
//   } else if(names.length = 0){
//       namesString = "";
//   }
// }

//   list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]);
//   list([]);

// function list(names) {
//     let str ="";

//     if(names.length === 1) { return str += names[0].name };

//     if(names.length ===2) { return str += names[1].name + "&" + names[2].name };

//     for( let i = 0; i < names.length; i++  ) {
//         if( i === names.length - 1 ) { str += ` & ${names[i].name}`;}
//         else if( i === 0 ) { str += name[i].name; }
//         else str += `, ${name[i].name}`;
//         }
//     }
// }

// if(!names.length) { return ''; }

// if(names.length === 1) {
//     return `${names[0].name}`;
// }
// if( names.length > 1 ) {
//     let lastName = names.pop();
//     return `${names.map( name => name.name ).join(', ')} & ${lastName.name}`;
// }

let superArray = ['Batman', "Superman", "Flash"];
let lessSuperArray = ['Barnicle Boy', 'Mermaid Man'];
console.log(superArray.concat(lessSuperArray));
console.log([...superArray, ...lessSuperArray].splice(-2));

console.log(Array.from(String(1234)));

function list(names){
    return names.reduce((prev, current, index, array) => {
        if(index === 0) return current.name;
        else if( index === array.length -1 ) {
            return prev + ' & ' + current.name;
        } else {
            return prev + ', ' + current.name;
        }
    }, '');
}