// input list of numbers
// find whether sum is even or odd
// result as string of "odd" or "even"
// if empty input array, consider as [0]

// use reduce to sum up values with an initial value of 0

function odd_or_even(array) {
  let total = array.reduce((total, num) => {
    return total + num
  }, 0)
  return total % 2 === 0 ? 'even' : 'odd';
}

odd_or_even([])
odd_or_even([0, 1, 4])
odd_or_even([0, -1, -5])
