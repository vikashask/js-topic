/* 
Constructors are used to create specific types of objects - they both prepare the object
for use and can also accept parameters which the constructor uses to set the values of
member variables when the object is first created.
 */

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}
this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
};
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);
console.log(civic.toString());
console.log(mondeo.toString());