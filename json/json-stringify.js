/* 
A common use of JSON is to exchange data to/from a web server.
When sending data to a web server, the data has to be a string.
Convert a JavaScript object into a string with JSON.stringify().
 */
var obj = { "name":"John", "age":30, "city":"New York"}; 
var myJSON = JSON.stringify(obj); 
// myJSON is now a string, and ready to be sent to a server:

// Stringify a JavaScript Array
var arr = [ "John", "Peter", "Sally", "Jane" ]; 
var myJSONStr = JSON.stringify(arr); 
console.log(myJSONStr);

var obj2 = { "name":"John", "today":new Date(), "city":"New York"};
var myJSON = JSON.stringify(obj2);
console.log(obj2);
console.log(myJSON);

// Stringify Functions
// In JSON, functions are not allowed as object values.
// The JSON.stringify() function will remove any functions from a JavaScript object, both the key and the value:
var obj3 = { "name":"John", "age":function () {return 30;}, "city":"New York"};
var myJSON3 = JSON.stringify(obj3);
console.log(myJSON3);
