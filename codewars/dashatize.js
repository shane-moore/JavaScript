// given number
// return string with a - before and after each odd int
// do not begin or end string w/ a dash
// place each digit into an array
// loop over new array and check if odd and if is at beginning or end of array
// have edge case logic for if beginning and odd or if at end and odd

function dashatize(num) {
  let numArr = num.toString().split('');
  let dashArray = numArr.map((num, i, arr) => {
    // (num % 2 !== 0) && (i === 0) ? num = num + '-' : num;
    // (num % 2 !== 0) && (i === arr.length - 1) ? num = '-' + num : num;
    console.log(arr[i - 1]);
    (num % 2 !== 0) && (arr[i - 1] % 2 !== 0) && (i !== 0) && (i !== arr.length - 1) ? num = '-' + num + '-' : num;
    console.log(num)
    return num
  })
  console.log(dashArray)
  return dashArray.join('')
}

dashatize(5311)
dashatize(3815);
