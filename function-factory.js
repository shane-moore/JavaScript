// // create objects in as many ways as you can imagine

// // creates a new object on the fly that takes up memory
// const dogObject = {
//   name: 'scout',
//   type: 'golden retriever'
// };

// const math = Math;
// console.log(math.floor(4.7))

// const bananas = new String('bananas')
// console.log(bananas.length)

// const numberToString = new Number(7);
// console.log(numberToString.toLocaleString())

// const date = Date
// console.log(date.now())

// // creates a new object on the fly that takes up memory
// const newObject = new Object({ name: 'shane' });

// // creates a reference held in createObject's __proto__ property to a prototype object defined in the create method, which can be an object literal or a reference to any other assigned object
// const createObject = Object.create({});

// // creates a new object for every function call
// function returnObject() {
//   return {
//     key: "value"
//   }
// }
// returnObject()

// console.log(newObject)

// // creates a new object on the fly and will return a new empty object that has a __proto__ property pointing to the rug object as its prototype.
// function rugPrototype(length, width) {
//   let rug = {
//     length: length,
//     width: width,
//     getArea: function () { return this.length * this.width }
//   }
//   return Object.create(rug)
// }

// // instantiates myRug and passes 4, 4 to the prototype object 'rug'
// let myRug = rugPrototype(4, 4)
// console.log(myRug)
// console.log(myRug.getArea())

// // adds a property "length" to the empty myRug object, the length property of the rug object is unaffected and unnoticed by the change since myRug did not climb the prototype chain to access rug's length property
// myRug.length = 5;
// console.log(myRug)

// // this should return 20 because the 'this' keyword references myRug, which holds a new length of 5, it then goes up the prototype chain to find the width of 4 and then executes
// console.log(myRug.getArea())

// // returns 4 since climbed the prototype chain to find the length
// console.log(myRug.__proto__.length)

// // function takes a couple parameters that are directly injected into a new object
// const factory = (name, date) => ({ name: name, date: date });

// // invokes factory to create the object containing the specified parameters
// let me = factory('shane', 'march 31st')
// console.log(me)

// // creates an object called Cemetery and designates that a property of name will be assigned to each new instance of the class
// // inCemetary is a method held in the prototype object of the Cemetery class and can be accessed by child classes via prototype chain
// class Cemetery {
//   constructor(name) {
//     this.name = name;
//     console.log('logging when running this constructor function')
//   }
//   inCemetery() {
//     return `${this.name} is now in the cemetary`
//   }
// }

// // creates a new object, sets the this reference to the new object, calls Cemetery's constructor f() w/ a passed in name variable, logs to console per constructor instructions, and gains a __proto__ property that points to Cemetery's prototype object, in order to gain access to inCemetery
// let shaneInCemetery = new Cemetery('shane');
// console.log(shaneInCemetery)

// // reference to the f() Cemetery that returns a new object
// console.log(Cemetery)

// // returns 'Shane is now in the cemetary' due to pulling from prototype object of Cemetery
// console.log(shaneInCemetery.inCemetery())

// // adds a banana property to the Cemetery f()'s prototype property
// Cemetery.prototype.banana = "banana";


// // declares a function that will construct a new object with property isEdible and a print function
// function SquirrelFood(isEdible) {
//   this.isEdible = isEdible;
//   this.print = () => `squirrels eat ${this.isEdible}`;
// }

// // attaches a property to SquirrelFood's prototype object
// SquirrelFood.prototype.favoriteNut = "cashews"

// // creates a new empty object, fills it with an isEdible property and print method
// // also creates a reference from homeSquirrel's __proto__ property back to SquirrelFood's prototype object in order to access favoriteNut
// let homeSquirrel = new SquirrelFood('peanuts');

// // create an async object using a promise and set timeout
// // Promise object contains a status and value property off the bat

// let obj;

// // create a function that returns a promise containing an async operation that will resolve its value to a {} after 1 second
// function returnPromise() {
//   return new Promise(function (resolve) {
//     setTimeout(() => resolve({}), 1000);
//   });
// }

// // async function calls the function containing a promise, using the await keyword
// // await keyword returns fulfilled promise's value
// async function capturePromise() {
//   let capturedPromise = await returnPromise()
//   return capturedPromise;
// }

// capturePromise().then(x => console.log(x))


// function monsters() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve('monsters are scary'), 1000)
//   })
// };

// // await keyword takes a function that returns a Promise and returns the resolved value of the promise
// async function printMonsters() {
//   let truth = await monsters()
//   console.log(truth)
// }

// printMonsters()

const getJSON = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('some json file');
    }, 1000);
  })
};

let json = {}
const displayJSON = async () => {
  const receivejson = await getJSON();
  console.log(receivejson)
  json = receivejson
}

displayJSON()
function addToJSON() {
  console.log(`${json} needs to be mutated a bit`)
}
addToJSON();

