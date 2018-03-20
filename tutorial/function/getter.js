/* 
The get syntax binds an object property to a function that will be called when that property is 
looked up.
 */
var obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      if (this.log.length == 0) {
        return undefined;
      }
      return this.log[this.log.length - 1];
    }
  }
  
  console.log(obj.latest);
  // expected output: "c"
  
