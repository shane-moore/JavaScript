// string containing only A  and B
//change to string such that no matching adjacent characters
// can delete zer oro more characters in string
// find minimum number of required deletions

// ex is AABAAB -> ABAB

// variables
// counter of deletions

// convert string to array and see if index + 1 is same as current index's element
// if so, pop off current element

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  let removeCount = 0
  let filteredArray = [];
  s.split('').forEach((val, i, arr) => {
    if (val == arr[i + 1]) {
      removeCount++
      return;
    }
    filteredArray.push(val);
  })
  console.log(removeCount)
}
alternatingCharacters("AAAA")
alternatingCharacters("BBBBBB")

