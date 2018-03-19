/* 
The for...in statement iterates over the enumerable properties of an object. 
For each distinct property, statements can be executed.
*/

var string1 = "";
var object1 = {a: 5, b: 6, c: 7};

for (var property1 in object1) {
  string1 = string1 + object1[property1];
}

console.log(string1);
// expected output: "123"