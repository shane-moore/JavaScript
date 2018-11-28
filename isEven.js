// 4. Check if a number is even.
var isEven = function(n) {
    if (n < 0) return isEven(-n);
if (n === 0) return console.log("even");
if (n === 1) return console.log("odd");
else return isEven(n - 2);
}
isEven(-5); 
