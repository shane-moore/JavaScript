let person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + lang2);
    console.log('----------');
}).apply(person, ['en', 'es']);

var logPersonName = logName.bind(person)

logPersonName();

logName.call(person, 'en', 'es');


// function borrowing
var person2 = {
    firstname: "jane",
    lastname: 'dow'
}

person.getFullName.apply(person2);

// function currying

function multiply(a,b) {
    return a*b;
}

// bind is permanently setting the variable a to 2 for any instance the function multiplyByTwo is called
// setting that variable permanently for any future calls is currying
// currying is to create a copy of a function but with some preset parameters
var multipleByTwo = multiply.bind(this, 2);

// calling multiplyByTwo(3) will set b as 3
