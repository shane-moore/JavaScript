// create a function that will loop and place functions in an empty array with a reference to i in each element of the array
// due to closures, calling the function w/i the array should have access to the value of i as it still exists in memory in the lexical environment
// closures are created as execution contexts are created, we can just take advantage of that fact
// closures give access of variables to nested functions after the execution of the higher order function completes

function logToConsole() {
    let emptyArr = [];
    let i = 7;
    for( let i = 0; i < 3; i++ ) {
        emptyArr.push( 
            function() {
                console.log(i);
            }
         )
    }
    return emptyArr;
}
logToConsole()[2]()