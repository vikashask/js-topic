/* 
the singleton pattern can be implemented by
creating a class with a method that creates a new instance of the class if one doesn't exist. 

it restricts instantiation of a class to a single object.
*/

var Singleton = (function () {
    var instantiated;

    function init() {
        // singleton here
        return {
            publicMethod: function () {
                console.log('hello world');
            },
            publicProperty: 'test'
        };
    }
    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        }
    };
})();
// calling public methods is then as easy as:
Singleton.getInstance().publicMethod();