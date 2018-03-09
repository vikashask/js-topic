/* 
Chaining then() calls
then() always returns a Promise, which enables you to chain method calls:
*/
function asyncFunc1() {
    return new Promise(
        function (resolve, reject) {
            let result = "asyncFunc1";
            resolve(result);
            let error = "error here";
            reject(error);
        });
}

function asyncFunction2() {
    return new Promise(
        function (resolve, reject) {
            let result = "asyncFunc2";
            resolve(result);
            let error = "error here asyncFunc2";
            reject(error);
        });
}

asyncFunc1()
.then(result1 => {
    // Use result1
    console.log(result1);
    return asyncFunction2(); // (A)
})
.then(result2 => { // (vB)
    // Use result2
    console.log(result2);  
})
.catch(error => {
    // Handle errors of asyncFunc1() and asyncFunc2()
    console.log(error);
});