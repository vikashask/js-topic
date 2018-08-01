/* 
JSON: JavaScript Object Notation.
JSON is a syntax for storing and exchanging data.
JSON is text, written with JavaScript object notation.
*/

/* sending data
If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server:
 */
var myObj = { "name":"John", "age":31, "city":"New York" };
var myJSON = JSON.stringify(myObj);
//window.location = "demo_json.php?x=" + myJSON;

/* Receiving Data
If you receive data in JSON format, you can convert it into a JavaScript object:
 */
var myJSON = '{ "name":"John", "age":31, "city":"New York" }';
var myObj = JSON.parse(myJSON);
// document.getElementById("demo").innerHTML = myObj.name; 

// JSON Uses JavaScript Syntax
var person = { "name":"John", "age":31, "city":"New York" };
person.name; // returns John
person["name"];  // returns John


// Data can be modified like this:
person.name = "Gilbert"; 
person["name"] = "Gilbert"; 

