
// Accessing Object Values
 myObj = { "name":"John", "age":30, "car":null };
 console.log(myObj.name);
//  or
 console.log(myObj["name"]);

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

 let getObj = myObj2.cars.car2;
 console.log(getObj);
 
 //or:
 let getObj2 = myObj2.cars["car2"]; 
 console.log(getObj2);

//  Delete Object Properties
console.log(delete myObj2.cars.car2);
