console.log("Connected!")


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

//change location to see different results.
// makeRequest("Google").then(response => {
//     console.log("Response Received")
//     return processRequest(response)
// }).then(processedRequest => {
//     console.log(processedRequest)
// }).catch(err => {
//     console.log(err)
// })

//using async function and await keyword.
async function doWork(){
    try{
        const response = await makeRequest("Google")
        console.log(`This is the direct resolve message from makeRequest + ${response}`)
        console.log("Response Received")
        const processedRequest = await processRequest(response) // This will print "Processing Request" since console.log() is before the await kicks off
        console.log(processedRequest)
    }
    catch (err){
        console.log(err)
    }

}

doWork()

