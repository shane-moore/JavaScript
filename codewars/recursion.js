// create a function that multiples x by itself n number of times

// function pow(x, n) {
//   console.log(Array(n).fill(null).map(num => num = x).reduce((tot, int) => {
//     tot *= int;
//     return tot;
//   }, 1))
// }

// pow(3, 2)

// function recursivePow(x, n) {

//   return n === 1 ? x : x * recursivePow(x, n - 1)
// }
// recursivePow(3, 3)

// const department = {
//   sales: [{
//     name: "Bob",
//     salary: 1600
//   },
//   {
//     name: 'susie',
//     salary: 1200
//   }
//   ],
//   dev: {
//     sites: [{
//       name: 'tim',
//       salary: 1200
//     }, {
//       name: 'fiona',
//       salary: 1300
//     }],
//     internals: [{
//       name: 'tina',
//       salary: 700
//     }, {
//       name: 'tom',
//       salary: 4000
//     }]
//   }
// }

// // if an array, return the sum of salaries w/i that array
// // if an object, loop over the objects values and rerun the function on them to capture the results
// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((total, val) => total + val.salary, 0);
//   } else {
//     let sumSalaries = 0;
//     for (let subdep in Object.values(department)) {
//       sumSalaries += sumSalaries(subdep)
//     }
//   }
// }

// sumSalaries(department)

// sum all numbers til the given one

// function sumAllNumbers(num) {
//   if (num === 1) return 1;
//   return num + sumAllNumbers(num - 1);
// }

// sumAllNumbers(10)

// 5 factorial is 5 * (5 -1) * ( 5-2 ) ... * 1

// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1)
// }

// console.log(factorial(3))

// const fibonacci = num => {
//   if (num < 2) return num;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// };

// fibonacci(20)

const factorial = (n, memo) => {
  memo = memo || {}
  if (memo[n]) return memo[n];
  if (n === 0) return 1;
  for (let i = 0; i < n; i++) {
    memo[n] = n * factorial(n - 1, memo);
  };

  return memo[n]
}

console.log(factorial(12));  // 4 milliseconds
