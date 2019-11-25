// inputs are strings
// each call should add the parameters to a global variable
// seperate the values in the final string with spaces
// return final string once the function call is empty
// this is called currying


// const createMessage = str => n => {
//     if( n == undefined ) {return str;}
//     return createMessage(str + " " + n);
// }

// createMessage("Hello")("World!")("how")("are")("you?")();

// function createMessage(str) {
//     return fn = arg => {
//       return arg === undefined ? str : createMessage();
//     }
//   }

function createMessage(str) {
    return (arg) => {
        return arg === undefined ? str : createMessage(`${str} ${arg}`);
    }
}

function createMessage(str) {
    return s => s ? createMessage(str + " " + s) : str;
}

createMessage("World!")("how")("are")("you?")();

createMessage("World!")("how")("are")("you?")();




// function addXAndY(x) {
//     return (y) => x + y;
// }

// let addY = addXAndY(3);
// console.log(addY(2));

// function sayHiLater() {
//     var greeting = "hi!";

//     setTimeout(function(){
//         console.log(greeting);
//     }, 3000);
// }

// sayHiLater();

// function tellMeWhenDone(callback){
//     var a = 1000; // some work
//     var b = 2000;
//     callback(); // the callback, it runs the function I give it
// }

// tellMeWhenDone(function(){
//     console.log("I am done");
// });

// tellMeWhenDone(function(){
//     alert("I am done");
// });