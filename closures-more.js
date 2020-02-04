// class greetr {
//     constructor(name, city) {
//         this.name = name;
//         this.city = city;
//     }
//     getName(){
//         console.log( `${this.name} is loving ${this.city}` );
//     }
// }

// let chicagoan = new greetr('taryn', 'Chicago');
// chicagoan.getName()

// with closure, i can pass the name of taryn and chicago that returns an anonymous function that will conosle.log

// function greetr2(name, city) {
//     return function() {
//         console.log(`${name} is loving ${city}`);
//     }
// }

// greetr2('taryn','chicago')()


// function Friend(greeting){
//     function greet() {
//         console.log(greeting)
//     }
//     return { greet: greet };
// }

// let englishman = Friend('hullo');
// let cowboy = Friend('howdy');
// englishman.greet()
// cowboy.greet()

// function buildFunctions() {
//     let arr = [];

//     for(let i=0; i < 3; i++) {
//         arr.push(function(){
//             console.log(i);
//         })
//     }
//     return arr
// }
// buildFunctions()[1]();

function buildFunctions2() {
    var arr = [];
    for( var i = 0; i < 3; i++ ) {
        arr.push( 
            (function(j){
                return function() {
                    console.log(j);
            }
        }(i))
        )
    }
    return arr;
}
buildFunctions2()[0]()

function heroes() {
    let newArr = [];
    for( var i = 0; i < 3; i++ ) {
        
        newArr.push(
            (function(j){
                return function() {
                    console.log(j);
                }
            })(i)
        );
    }
    return newArr;
}
heroes()[1]()