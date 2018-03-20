/* 
The set syntax binds an object property to a function to be called when there is an attempt to set that property.
*/

var language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  }
  
  language.current = 'EN';
  language.current = 'FA';
  
  console.log(language.log);
  // expected output: Array ["EN", "FA"]
  