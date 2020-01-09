let arr2 = [[1,2],[3,4], [5,6]];
arr2 = arr2.flatmap((a,b) => {
    a += 1;
    b += 1;
})
console.log(arr2)

let array = [1, 2, 3, 5]
console.log(array.flatMap( ele => [ele * 2] ))

let array = ["it's sunny in", "", "california"];
console.log(array.map( substring => substring.split(" ") ))

a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)

let a = [5, 4, -3, 20, 17, -33, -4, 18]

console.log(a.concat([7,21]))