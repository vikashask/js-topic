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

Promise.all(
        [
            asyncFunc1(),
            asyncFunction2(),
        ]
    )
    .then(([result1, result2]) => {
        console.log("result1", result1);
        console.log("result2", result2);

    })
    .catch(err => {
        console.log(err);
    })