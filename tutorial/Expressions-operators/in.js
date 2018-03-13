/* 
The in operator returns true if the specified property is in the specified object or its prototype chain. 
*/

var car = {make: 'Honda', model: 'Accord', year: 1998};

console.log('make' in car);
// expected output: true

delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}

console.log(car.make);
// expected output: "Suzuki"

// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees        // returns true
3 in trees        // returns true
6 in trees        // returns false