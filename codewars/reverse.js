// function reverse(n)
// returns reverse of n
// complete w/o converting input into a string
// get last digit by taking modulus of number
// place last digit in new array
// get previous digits by dividing by ten and forgetting the modulus
// do this until Math.min(n/10) === 0
function reverse(n) {
  var revNumber = 0;
  while (Math.min(n / 10) !== 0) {
    if (revNumber !== 0) {
      revNumber += (n % 10) * 10;
    } else revNumber = n % 10;
    console.log(revNumber)
    n = Math.floor(n / 10);
  }
  // return revNumbers.join()
  console.log(revNumber);
}

reverse(1020);
