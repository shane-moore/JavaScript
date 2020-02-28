// Map is an object accepts key/value pairs yet remembers original insertion order of keys
// any value can be a key or value
let practiceMap = new Map();

practiceMap.set(0, 'zero');
practiceMap.set(1, 'one');

// for( let [key, values] of practiceMap ) {
//     console.log(key + '=' + values);
// }

// for (const keys of practiceMap.keys()) {
//     console.log( keys);
// }

// for(const values of practiceMap.values()) {
//     console.log(values)
// }

// practiceMap.forEach( (val, key) => console.log(`${key}  is ${val}`) )

console.log(practiceMap.entries())