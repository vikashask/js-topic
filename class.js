/* 
three ways of defining and instantiating an object.
 */

/* Using a function
To define properties and methods for an object created using function(), you use the this keyword.
*/
function Apple(type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function getAppleInfo() {
        return this.color + ' ' + this.type + ' apple';
    }
}

var apple = new Apple('fruit');
apple.color = "yellow";
console.log(apple.getInfo());

