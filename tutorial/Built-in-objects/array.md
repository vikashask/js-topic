- The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

  Standard built-in objects
  Array instances

All Array instances inherit from Array.prototype.

`Array.prototype.constructor`
Specifies the function that creates an object's prototype.
`Array.prototype.length`
Reflects the number of elements in an array.

Methods
`Mutator methods`

`Array.prototype.fill()`

- Fills all the elements of an array from a start index to an end index with a static value.
  const array1 = [1, 2, 3, 4];
  // fill with 0 from position 2 until position 4
  console.log(array1.fill(0, 2, 4));
  // output: [1, 2, 0, 0]

`Array.prototype.pop()`

- Removes the last element from an array and returns that element.
  const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
  console.log(plants.pop());
  // expected output: "tomato"

`Array.prototype.push()`

- Adds one or more elements to the end of an array and returns the new length of the array.
  const count = plants.push('cows');
  console.log(count);
  // expected output: 5

`Array.prototype.reverse()`

- Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
  const reversed = array1.reverse();

`Array.prototype.shift()`
Removes the first element from an array and returns that element.
const firstElement = array1.shift();

`Array.prototype.sort()`
Sorts the elements of an array in place and returns the sorted array.
`Array.prototype.splice()`
Adds and/or removes elements from an array.
splice(start, deleteCount, item1, item2, itemN)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

    months.splice(4, 1, 'May');
    // replaces 1 element at index 4
    // expected output: Array ["Jan", "Feb", "March", "April", "May"]

`Array.prototype.unshift()`
Adds one or more elements to the front of an array and returns the new length of the array.
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// expected output: 5

`Accessor methods`
These methods do not modify the array and return some representation of the array.

`Array.prototype.concat()`
Returns a new array comprised of this array joined with other array(s) and/or value(s). `returns a new array`
concat(value0, value1, ... , valueN)

`Array.prototype.includes()`
Determines whether an array contains a certain element, `returning true or false` as appropriate.
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// expected output: true

`Array.prototype.indexOf()`
Returns the `first (least) index of an element` within the array equal to the specified value, or `-1 if none is found`.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// expected output: 1

`Array.prototype.join(separator)`
Joins all elements of an array into a string.
separated with a `comma (","). If separator is an empty` string.
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"

`Array.prototype.lastIndexOf()`
Returns the last (greatest) index of an element within the array equal to the `specified value, or -1 `if none is found.
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

`Array.prototype.slice()`
Extracts a section of an array and returns a new array.
`slice(start, end)`

`Array.prototype.toString()`
Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.

`Iteration methods`
If you must mutate the array, copy into a new array instead.

`Array.prototype.entries()`
Returns a new Array Iterator object that contains the `key/value pairs for each index` in the array.
var a = ['a', 'b', 'c'];
var iterator = a.entries();

    for (let e of iterator) {
    console.log(e);
    }
    // [0, 'a']
    // [1, 'b']

`Array.prototype.every()`
Returns true if every element in this array satisfies the provided testing function.
const isBelowThreshold = (currentValue) => currentValue < 40;

    const array1 = [1, 30, 39, 29, 10, 13];
    console.log(array1.every(isBelowThreshold));
    // expected output: true

`Array.prototype.filter()`
Creates a new array with all of the elements of this array for which the provided filtering function returns true.

`Array.prototype.find()`
method returns the value of the first element in the provided array that satisfies the provided testing function
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

`Array.prototype.findIndex()`
`Returns the found index of the first element in the array`, if an element in the array satisfies the provided testing function or -1 if not found.
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

`Array.prototype.forEach()`
Calls a function for each element in the array.
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

`Array.prototype.keys()`
Returns a new Array Iterator that `contains the keys `for each index in the array.
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]

`Array.prototype.map()`
Creates a new array with the results of calling a provided function on every element in this array.
`Array.prototype.reduce()`
Apply a function against an accumulator and each value of the array (`from left-to-right`) as to reduce it to a single value.
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

`Array.prototype.reduceRight()`
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.

`Array.prototype.some()`
Returns `true if at least one element in this array` satisfies the provided testing function.
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

`Array.prototype.values()`
Returns a new Array Iterator object that contains the values for each index in the array.

var fruits = ["Apple", "Banana"];

console.log(fruits.length);
// 2

// Access (index into) an Array item

var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana

// Loop over an Array

fruits.forEach(function (item, index, array) {
console.log(item, index);
});
// Apple 0
// Banana 1

// Add to the end of an Array

var newLength = fruits.push("Orange");
// ["Apple", "Banana", "Orange"]

// Remove from the end of an Array

var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

// Remove from the front of an Array

var first = fruits.shift(); // remove Apple from the front
// ["Banana"];

// Add to the front of an Array

var newLength = fruits.unshift("Strawberry"); // add to the front
// ["Strawberry", "Banana"];

// Find the index of an item in the Array

fruits.push("Mango");
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf("Banana");
// 1

// Remove an item by index position

var removedItem = fruits.splice(pos, 1); // this is how to remove an item

// ["Strawberry", "Mango"]

// Remove items from an index position

var vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1,
n = 2;

var removedItems = vegetables.splice(pos, n);
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables);
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems);
// ["Turnip", "Radish"]

// Copy an Array

var shallowCopy = fruits.slice(); // this is how to make a copy
// ["Strawberry", "Mango"]
