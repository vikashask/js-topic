/*  FOR IN    
for in loops over enumerable property names of an object.

*/

/* FOR OF 
The for...of statement creates a loop Iterating over iterable objects 
(including Array, Map, Set, arguments object and so on),
*/

var arr = [3, 5, 7];
arr.foo = 'hello';

for (var i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

console.log('---------');

for (var i of arr) {
   console.log(i); // logs 3, 5, 7
}