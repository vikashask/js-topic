/* 
following ways to create objects in JavaScript : 
*/

// 1. The simplest way to create an object is to use the Object constructor

var person = new Object();  
person.name = "vikash";  
person.getName = function(){  
    return this.name;  
}; 

// 2. Literal notation

var person = {  
    person:name = "vikash",
    person:getName = function(){  
        return this.name;  
    }  
} 
/* 3. Factory function

The Factory function allows to encapsulate and re-use the logic for creating similar objects. 
*/
var newPerson=function(name){  
    var result = new Object();  
    result.name = name;  
    result.getName = function(){  
        return this.name;  
    };  
    return result;  
};  
var personOne = newPerson("Diego");  
var personTwo = newPerson("Gangelo");  
console.log(personOne.getName()); // prints Diego  
console.log(personTwo.getName()); // prints Gangelo

/* 4. Function Constructor

In Javascript it is possible to call any function with the new operator in front of it.
Given a function F, for new F(): a new empty object X is created.
X is set as context for F meaning throughout F this points to X. X is returned as result of F
 */
function Person(name){  
        this.name = name;  
        this.getName = function(){  
            return this.name;  
        };  
};  
var personOne = new Person("Diego");  
console.log(personOne.getName()); // prints Diego  
console.log(personOne instanceof Person); // prints true  
console.log(personOne.constructor === Person); // prints true  
console.log(personOne instanceof Object); // prints true  

// 5.Singleton
// Sometimes, you may want to make sure that only a single instance of a certain class exists. 
// To get a Singleton in Javascript is as simple as defining and invoking the constructor at the same time.

var singleton = new function(){  
    this.name = "ApplicationName";  
};  