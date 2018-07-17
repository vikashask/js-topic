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

// Looping Through an Array
for (i in myObj.cars) {
    x += myObj.cars[i];
} 


