/* 
A common use of JSON is to exchange data to/from a web server.
When receiving data from a web server, the data is always a string.
Parse the data with JSON.parse(), and the data becomes a JavaScript object.
 */

var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}'); 

// Parsing Functions
/* Functions are not allowed in JSON.
If you need to include a function, write it as a string. */

var text = '{ "name":"John", "age":"function () {return 30;}", "city":"New York"}';
var obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");
