// function Apartment() {
//   this.size = "1 bedroom"
// };

// let byron = new Apartment()

// Apartment.prototype.street = 'byron';

// console.log(byron.street)
// console.log(byron.__proto__)

// var person = {
//   firstname: 'default',
//   lastname: 'default',
//   greet: function () {
//     return "hi " + this.firstName
//   }
// }

// var john = Object.create(person);

// console.log(john);
// console.log(john.__proto__)

class Person {
  constructor(firstname, lastname) {
    this.name = firstname;
    this.lastname = lastname;
  }
  greet() {
    return 'Hi ';
  }
}

// class youngPerson extends Person {
//   constructor() {
//     super()
//   }
// }

// var john = new Person('john', 'doe')

// console.log(john.__proto__.greet)

// function Person2() {
//   this.name = 'shane';
// }
// Person2.prototype.getName = function () {
//   console.log(this.name);
// }

// let squirrel = new Person2();
// squirrel.getName()


let tarynObj = {
  firstName: 'taryn',
  lastName: 'dannemann'
}

let createObj = Object.create(tarynObj);
// console.log(createObj.__proto__)
tarynObj.lastName = "Dannemann"
console.log(createObj.__proto__)
