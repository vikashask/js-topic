/* 
Modules are an integral piece of any robust application's architecture and typically help
in keeping the code for a project organized.
Module Pattern is one of the most popular ways of creating modules. Using the return statement we can return a object literal that ‘reveals’ only the methods or properties we want to be publicly available.
*/

var myModule = (function() {
    'use strict';
 
    var _privateProperty = 'Hello World';
    var publicProperty = 'I am a public property';
  
    function _privateMethod() {
        console.log(_privateProperty);
    }
  
  	function publicMethod() {
    	_privateMethod();
  	}
     
    return {
        publicMethod: publicMethod,
        publicProperty: publicProperty
    };
}());
  
myModule.publicMethod();    		        // outputs 'Hello World'   
console.log(myModule.publicProperty);       // outputs 'I am a public property'
console.log(myModule._privateProperty);     // is undefined protected by the module closure
myModule._privateMethod();   