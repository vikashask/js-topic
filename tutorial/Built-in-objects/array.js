/* 
The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

    Standard built-in objects
    Array instances

All Array instances inherit from Array.prototype.

Array.prototype.constructor
    Specifies the function that creates an object's prototype.
Array.prototype.length
    Reflects the number of elements in an array.

Methods
Mutator methods

These methods modify the array:
Array.prototype.fill()
    Fills all the elements of an array from a start index to an end index with a static value.
Array.prototype.pop()
    Removes the last element from an array and returns that element.
Array.prototype.push()
    Adds one or more elements to the end of an array and returns the new length of the array.
Array.prototype.reverse()
    Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.
Array.prototype.shift()
    Removes the first element from an array and returns that element.
Array.prototype.sort()
    Sorts the elements of an array in place and returns the array.
Array.prototype.splice()
    Adds and/or removes elements from an array.
Array.prototype.unshift()
    Adds one or more elements to the front of an array and returns the new length of the array.

Accessor methods

These methods do not modify the array and return some representation of the array.

Array.prototype.concat()
    Returns a new array comprised of this array joined with other array(s) and/or value(s).
Array.prototype.includes()
    Determines whether an array contains a certain element, returning true or false as appropriate.
Array.prototype.indexOf()
    Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
Array.prototype.join()
    Joins all elements of an array into a string.
Array.prototype.lastIndexOf()
    Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
Array.prototype.slice()
    Extracts a section of an array and returns a new array.
Array.prototype.toSource()
    Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.prototype.toSource() method.
Array.prototype.toString()
    Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.
Array.prototype.toLocaleString()
    Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.

Iteration methods

Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

Array.prototype.entries()
    Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
Array.prototype.every()
    Returns true if every element in this array satisfies the provided testing function.
Array.prototype.filter()
    Creates a new array with all of the elements of this array for which the provided filtering function returns true.
Array.prototype.find()
    Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
Array.prototype.findIndex()
    Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
Array.prototype.forEach()
    Calls a function for each element in the array.
Array.prototype.keys()
    Returns a new Array Iterator that contains the keys for each index in the array.
Array.prototype.map()
    Creates a new array with the results of calling a provided function on every element in this array.
Array.prototype.reduce()
    Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
Array.prototype.reduceRight()
    Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
Array.prototype.some()
    Returns true if at least one element in this array satisfies the provided testing function.
Array.prototype.values()
    Returns a new Array Iterator object that contains the values for each index in the array.
Array.prototype[@@iterator]()
    Returns a new Array Iterator object that contains the values for each index in the array. 
*/
// Create an Array

var fruits = ['Apple', 'Banana'];

console.log(fruits.length);
// 2

// Access (index into) an Array item

var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana

// Loop over an Array

fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1

// Add to the end of an Array

var newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

// Remove from the end of an Array

var last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

// Remove from the front of an Array

var first = fruits.shift(); // remove Apple from the front
// ["Banana"];

// Add to the front of an Array

var newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"];

// Find the index of an item in the Array

fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]

var pos = fruits.indexOf('Banana');
// 1

// Remove an item by index position

var removedItem = fruits.splice(pos, 1); // this is how to remove an item
                                        
// ["Strawberry", "Mango"]

// Remove items from an index position

var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables); 
// ["Cabbage", "Turnip", "Radish", "Carrot"]

var pos = 1, n = 2;

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

