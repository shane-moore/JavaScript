// given array of numbers
// sort in asc odd nums but even nums must be on their places
// zero is not odd and does not need to be moved
// if empty array, return it

// create dictionary that holds the index and num for odd nums
// loop over and place odd elements into an obj w/ index / num key value pairs
// have an array of sorted odd values
// loop over object and replace values w/ values from sorted array
// splice in values to original array


function sortArray(array) {
  // return a sorted array
  console.log(array)
  let sortDictionary = {};
  let sortList = [];
  array.forEach((num, i) => {
    num % 2 !== 0 ? sortList.push(num) : null;
    num % 2 !== 0 ? sortDictionary[i] = num : null;
  });
  sortList.sort((a, b) => a - b);
  Object.keys(sortDictionary).forEach((key, i) => sortDictionary[key] = sortList[i])
  Object.keys(sortDictionary).forEach(key => array.splice(key, 1, sortDictionary[key]));
  // return array;
  console.log(sortDictionary);
  console.log(sortList)
  console.log(array);
}

sortArray([5, 11, 2, 8, 1, 4]) // [1, 3, 2, 8, 5, 4]
