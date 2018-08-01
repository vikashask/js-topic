
// Accessing Object Values

 myObj = { "name":"John", "age":30, "car":null };
 x = myObj.name;
 x2 = myObj["name"];

//  Nested JSON Objects
myObj2 = {
    "name":"John",
    "age":30,
    "cars": {
        "car1":"Ford",
        "car2":"BMW",
        "car3":"Fiat"
    }
 } 

 console.log(myObj2.cars.car2);  // BMW
 //or:
 console.log(myObj2.cars["car2"]); // BMW

//  Delete Object Properties
delete myObj2.cars.car2; 