# Promise

>[Promises in 10 minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E)

>[W3School on Promise](https://www.w3schools.com/js/js_promise.asp)

>[MDN on Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

`Promise` is an object, that takes one function as a parameter, which gets passed two parameters, **resolve** and **reject**.

## Promise Syntax
```javascript
//Promise object contains both the producing code and calls to the consuming code:
let MyPromise = new Promise(function(resolve, reject) {
// "Producing Code" (May take some time)
  resolve(message); // when successful
  reject(message);  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
// Promise.then() takes two arguments, a callback for success and another for failure. Both are optional, so you can add a callback for success or failure only.
MyPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);


//with arrow func
let OtherPromise = new Promise((resolve, reject) => {
    //define promise here
    if(true){
        resolve(message)
    } else{
        reject(message)
    }
})

```

Usually, we use `.then` attach to the promise for **resolve**, and use `.catch` for **reject**. 

>An example

```javascript
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a==2){
        resolve("Success")
    } else {
        reject("Failed")
    }
})


p.then((message) => {
    console.log("This is in the then " + message)
}).catch((message) => {
    console.log("This is in the catch " + message)
})
```
## Static methods
- `.all(iterable)` is used to call all promises at the same time.

    `Promise.all([p1, p2, p3])` will return all three promises. 

    We can use `.then` and `.catch` for resolve or reject. 

    `.then` will return all **resolve** in an array if there is no **reject**.

    `.catch` will return the first **reject** if there is one, and discard all other promises. 

>An example
```javascript
const p1 = new Promise((resolve, reject) => {
    resolve('p1 resolved')
})

const p2 = new Promise((resolve, reject) => {
    resolve('p2 resolved')
})

const p3 = new Promise((resolve, reject) => {
    resolve('p3 resolved')
})

Promise.all([
    p1, 
    p2, 
    p3
    ]).then((messages) => {
        console.log(messages)
    })

```

- `.race(iterable) ` will only return the first completed promise rather than waiting for every promise to be completed. 
  
  `Promise.race([p1, p2, p3])` will only run `p1` and stops the rest regardless the state of the `p1`. 
  
  We can use `.then` and `.catch` for resolve or reject.
  

>In this example, it will only return p1 as it is the first one resolved.
```javascript
Promise.race([
    p1, 
    p2, 
    p3
    ]).then((message) => {
        console.log(message)
    })
```


## Demo
Run **index.html** and watch Console to see the demo.

>***Only run ONE PART at a time***
