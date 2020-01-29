const secret = msg => () => msg;

console.log(secret(1)())

const secretMessage = secret => () => console.log(secret);

secretMessage("howdy")()

// const partialApply = (fn, ...fixedArgs) => {
//     console.log(fixedArgs)
//     return function(...remainingArgs) {
//         console.log(remainingArgs)
//         return fn.apply(this, fixedArgs.concat(remainingArgs));
//     };
// };

// const add = (a,b) => a + b;

// const add10 = partialApply(add, 10);
// console.log(add10(5))

// create a function that will add two numbers

// create a function that will accept the add two numbers parameter and store a passed in value

// call that function and pass in another number

const addNew = (a,b) => a + b;

const partialFunction2 = function(fn, ...fixedNumbers) {
    return function( ...remainingNumbers ) {
        return fn.apply(this, fixedNumbers.concat(remainingNumbers));
    }
};

const add7 = partialFunction2( addNew, 7 );

console.log(add7(13));