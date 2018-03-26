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

// 2.Using object literals

var water = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
}

water.color="watermalon";
console.log(water.getInfo);

// 3.Singleton using a function

var apple3 = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}

apple3.color = "reddish";
console.log(apple3.getInfo());

