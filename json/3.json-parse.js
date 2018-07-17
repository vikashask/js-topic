/* 
A common use of JSON is to exchange data to/from a web server.
When receiving data from a web server, the data is always a string.
Parse the data with JSON.parse(), and the data becomes a JavaScript object.
 */

 var data = '{ "name":"John", "age":30, "city":"New York"}';
var obj = JSON.parse(data); 

console.log(data); // undefined
console.log(obj.name);

// Parsing Functions
/* Functions are not allowed in JSON.
If you need to include a function, write it as a string. */

var text = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
var objText = JSON.parse(text);
console.log(objText);

// eval : evaluates or executes an argument
obj.age = eval("(" + obj.age + ")");
console.log(obj.age);
