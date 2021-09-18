# Await

>[Await in 7 minutes](https://www.youtube.com/watch?v=V_Kr9OSfDeU)

>[W3School on Await](https://www.w3schools.com/js/js_async.asp)

>[MDN on Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

>[More Async/await](https://javascript.info/async-await)

`await` operator is used to wait for a [Promise](../Promise/promise.md).
The `await` keyword can only be used inside an asyn function.

## Syntax

```js
// The keyword await before a function(promise?) makes the function wait for a promise:

let value = await promise;
```


> An example

```js
async function f() {
    let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"
}

f();
```


> Another example

```js
function makeRequest(location){
    return new Promise((resolve, reject) => {
        if (location == "Google")
            resolve("Google says Hi")
        else
            reject("We can only talk to Google")
    })
}

function processRequest(response){
    return new Promise((resolve, reject) => {
        console.log("Processing Request...")
        resolve(`Extra information + ${response}.`)
    })
}

// The keyword async before a function makes the function return a promise.
// The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a fulfilled promise automatically.

async function doWork(){
    try{
        const response = await makeRequest("Google") //new promise, fulfilled
        console.log("Response Received")
        const processedRequest = await processRequest(response) //new promise, fulfilled, takes the promise result from makeRequest
        console.log(processedRequest) //processedRequest promise is automatically fulfilled
    }
    catch (err){
        console.log(err)
    }

}

doWork()

```
