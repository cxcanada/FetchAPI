console.log("Promise Connected")

/* ==============           Part 1         ============== */

// Basic promise.
// Modify line 4 to see different results.
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
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


/* ==============           Part 2         ============== */

//Promise.all and Promise.race.
//Modify p1, p2, and/or p3 to see different scenarios.

const p1 = new Promise((resolve, reject) => {
    resolve('p1 reject')
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
}).catch((messages) => {
    console.log(messages)
})

Promise.race([
    p1,
    p2,
    p3
]).then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})

/* ==============           Part 3         ============== */
// Multiple promise and chain

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        if (location == "Google")
            resolve("Google says Hi")
        else
            reject("We can only talk to Google")
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing Request...")
        resolve(`Extra information + ${response}.`)
    })
}

// .then train
// change location to see different results.
let newRequest = makeRequest("Google") //a new promise, await

newRequest.then(response => { //make use of the pending response from the first promise, fulfilled
    console.log("Response Received")
    return processRequest(response) // return another promise, await
}).then(processedRequest => { // make use of the pending response from the promise by processRequest, fulfilled
    console.log(processedRequest)
}).catch(err => { // or use err(reject) from the promise by processRequest, rejected
    console.log(err)
})

// Watch promise object state
console.log(newRequest)