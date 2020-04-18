// first sort casts array elements to strings and tries to put in ascending order
// otherwise use a callback function to be explicit on how to sort (comparison function)
// parameters of a and b and returns 1 if first element should preceed the second
// returns -1 if the second element should preceed the first
// returns 0 if equal
// time and space complexity not guaranteed cuz depends on implementation
// * elements are converted to strings first before comparison
// * comparison function always returns 1, -1, or 0
// * default is to sort in ascending order
// * use +/- instead of >/< if valueOf(a or b) is that of number since comparison will return 1, -1, or 0 and do ascending or descending accordingly

let eggsInNest = Array(9).fill(null)
eggsInNest = eggsInNest.map(() => (Math.floor(Math.random() * 200)))

eggsInNest = eggsInNest.sort()
console.log(eggsInNest)

// want eggsInNest to return with ascending values so need a > b to return 1

eggsInNest = eggsInNest.sort((a, b) => {
  return a > b ? 1 : b > a ? -1 : 0;
})

console.log(eggsInNest)

// can reduce to using add/subtract because comparison function only returns 1, -1, or 0

let eggsInNest2 = eggsInNest.sort((a, b) => {
  return a - b
})
console.log(eggsInNest2)

let sortBananas = Array(20).fill(null).map(() => Math.floor(Math.random() * 20) + 1);

// use crazy ternary
sortBananaz = sortBananas.slice().sort((a, b) => a > b ? 1 : b > a ? -1 : 0);

lessBananaz = sortBananas.slice().sort((a, b) => a - b)

console.log(sortBananaz)
console.log(lessBananaz)
