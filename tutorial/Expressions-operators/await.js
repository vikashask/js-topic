/* 
The await expression causes async function execution to pause until a Promise is fulfilled, 
that is resolved or rejected, and to resume execution of the async function after fulfillment.

If the Promise is rejected, the await expression throws the rejected value.
*/
function resolveAfter2Seconds(x) { 
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    console.log("await start");
    
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  f1();
