console.log("JSON Connected!")

//this is javascript object
let companies = [{
    name: "Big Corporation",
    numberofEmployees: 10000,
    ceo: "Mary",
    rating: 3.6,
    address: {
        street: "5 main st",
        city: "Boston"
    },
    employees: [
        "Jordan",
        "Michael",
        "Jackson"
    ]
}, {
    name: "Smart Startup",
    numberofEmployees: 3,
    ceo: null,
    rating: 4.4,
    address: {
        street: "11 nothern ave",
        city: "LA"
    },
    employees: [
        "Kobe",
        "Brynt",
        "Phil"
    ]
}]

// console.log(companies[0].name)

// this turns javascript object to JSON
// companiesJson = JSON.stringify(companies)

// this turns JSON to javasrcipt object
// companiesInJS = JSON.parse(companiesJson)
// console.log(companiesJson)

var output = ''
for (var i = 0; i < companies.length; i++) {
    //console.log(companies[i].name)
    output += '<li>' + companies[i].name + '</li>';
}
document.getElementById('companies').innerHTML = output;



/* using XMLHttpRequest */
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        // parse the response to switch JSON string to javascript object
        var response = JSON.parse(xhttp.responseText) //{people:Array(3)}
        var people = response.people // [{...},{...},{...}]

        // Display
        var output = ''
        for (var i = 0; i < people.length; i++) {
            output += '<li>' + people[i].name + '</li>';
        }
        document.getElementById('people').innerHTML = output;
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();



/* Get data from fetch(url) */
var p = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))


/* Data Fetcher Function */
const dataFetcher = async function(url = null) {
    const data = fetch(url)
        .then(res => res.json())
        .then(data => data) //.then(data => console.log(data))
    return data
}

/* Data Fetcher with await */
// same purpose done in async/await
// const dataFetcher = async function(url = null) {
//     const res = await fetch(url)
//     const data = await res.json()
//     return data
// }