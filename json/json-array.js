/*  Arrays as JSON Objects
 Arrays in JSON are almost the same as arrays in JavaScript.
 */

// Arrays in JSON Objects
var myObj = {
    "name": "vikash",
    "age": 30,
    "cars": ["Ford", "BMW", "Fiat"]
}

// Accessing Array Values
x = myObj.cars[0];

// or...in statement is used to loop (iterate) through the elements of an array or through the properties of an object.
for (i in myObj.cars) {
    x += ' ' + myObj.cars[i];
    console.log(x);
} 

// getting key name 
for(let i in myObj){
    console.log(i);
}


