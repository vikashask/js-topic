/* 
Promises are an alternative to callbacks for delivering the results of an asynchronous computation.

*/
function asyncFunc() {
    return new Promise(
        function (resolve, reject) {
            let result = "hello";
            resolve(result);
            let error = "error here";
            reject(error);
        });
}

asyncFunc()
.then(result => { console.log(result) })
.catch(error => { console.log(error) });
