/* The JavaScript prototype property allows you to add new properties or new method to object constructors

*/

'use strict';
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
// adding new property to Person constructor 
Person.prototype.nationality = "English";

// adding new method to Person constructor 
Person.prototype.name = function(){
    return this.firstName + " " + Person.lastName;
}

var myFather = new Person("John", "Doe", 50, "blue");
console.log('My Father is ' + myFather.nationality);
console.log('My Father name ' + myFather.nationality);
