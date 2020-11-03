// left rotation  shifts elements and overflow goes to the right end
// given array a of n integers, and d left rotations
// return updated array to be printed as single line of space seperated

// brute force is loop over the given d amount of moves
// each iteration should shift off a value and then pop it to the end of the array

// shouldnt need any vars since operating on the array

// return results as string


// Complete the rotLeft function below.
function rotLeft(a, d) {
  let copyList = a.slice();
  for (let i = 0; i < d; i++) {
    let shiftedValue = copyList.shift();
    copyList.push(shiftedValue);
  }
  copyList = copyList.join(' ');
  return copyList;
  console.log(copyList.join(' '))
}

rotLeft([1, 2, 3, 4, 5], 4) // [5,1,2,3,4]
