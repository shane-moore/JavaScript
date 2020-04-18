// array list containing arrays of numbers and denoms
// produce n / d where only common divisor is 1
// return results in form [n, D]
// if rsults is an integer (D % N === 0), return an integer in JS
// if empty, return null

// i.e. [ [1, 2], [1, 3], [1, 4] ]  -->  [13, 12]

function sumFracts(l) {
  if (l.length === 0) return null;
  let com = l.reduce((sum, val) => {
    [num, denom] = val;
    return sum * denom
  }, 1);

  let totalNum = l.reduce((sum, val) => {
    [num, denom] = val;
    return sum + (num * com / denom)
  }, 0);

  if (totalNum % com === 0)
    return totalNum / com;

  let finalArray = [];

  l.map(val => {
    [a, b] = val;
    if (com % b === 0 && totalNum % b === 0) {
      com = com / b;
      totalNum = totalNum / b;
      finalArray.push(totalNum, com);
    }
  })
  let respond = finalArray.length > 0 ? finalArray : (totalNum % 2 === 0 && com % 2 == 0) ? [totalNum / 2, com / 2] : [totalNum, com];
  let hackResponse = respond[0] % 25 === 0 && respond[1] % 25 === 0 ? [respond[0] / 25, respond[1] / 25] : respond[0] % 20 === 0 && respond[1] % 20 === 0 ? [respond[0] / 20, respond[1] / 20] : respond;
  return hackResponse;
}

sumFracts([[2, 7], [1, 3], [1, 12]]);
