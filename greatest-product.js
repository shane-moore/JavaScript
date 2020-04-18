// find greatest product of 5 consecutive digits in the given string of digits
// have highest product val
// have pointer at index 0
// grab a substring from pointer 0 to pointer + 5
// convert substring to number and place in an array
// run reduce method over the array and set that as highest product value
// subtring ++
// return highestValue

function greatestProduct(input) {
  let highestProduct = 0;
  let index = 0
  while (index < input - 5) {
    let currentProduct = input.substring(index, index + 5).split('').map(val => parseInt(val)).reduce((tot, int) => {
      tot *= int;
      return tot;
    }, 1);
    highestProduct = currentProduct > highestProduct ? currentProduct : highestProduct;
    index++;
  }
  console.log(highestProduct)
}

greatestProduct("9249473") // should return 3240
