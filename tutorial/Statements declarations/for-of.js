/* 
The for...of statement creates a loop iterating over iterable objects (including the built-in String, Array
 */

let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31