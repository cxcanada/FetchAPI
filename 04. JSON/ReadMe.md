# **JSON**

>[JSON from Web Dev Simplified](https://www.youtube.com/watch?v=iiADhChRriM)

>[JSON from Traversy Media](https://www.youtube.com/watch?v=wI1CWzNtE-M)

## **JavaScript Object Notation**
- Based on subset of JavaScript
- Data Representation Format
- Commonly Used for AIPs and Configs
- Lightweight and Easy to Read/Write
- Integrates Easily with Most Languages
- Often use with AJAX
  
-----------
## **JSON Types**
|Type      |Example        |
|:---------|:--------------|
|Strings   |"hello world"  |
|Numbers   |10  1.5 -30    |
|Booleans  |true false     |
|null      |null           |
|Arrays    |[1,2,3]        |
|Objects   |{"key":"value"}|


------------
## **JSON Syntax Rules**
- Use key/value pairs - {"name":"Brad"}
- Use double quotes around **KEY** and **VALUE**
- Must use the specified data types
- File type is ".json"
- MIME type is "Application/json"

-----------
## **JSON File**
Create a file with extension `.json`, such as `user.json`.

-----------
## **JSON Example**
```json
{
    // "key":"value",
    "name":"kyle",
    "favoriteNumber": 3,
    "isProgrammer":true,
    "hobbies": ["weight lifting", "bowling"],
    "friends":[{
        "name":"Joey",
        "favoriteNumber": 6,
        "isProgrammer": false,
        "hobbies": ["reading", "hiking"],
        "friends": [/*...*/]
    }]
}

```
-----------

## **JSON with FetchAPI**
`fetch` will return a `promise`. Unless there's internet connection issues, it will always succeed.
```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => {
    // if(res.ok){
    //     console.log("Response success")
    // } else {
    //     console.log("Response failure")
    //
    console.log(res) 
    res.json
})
.then(data => console.log(data))
.catch(error => console.log("ERROR"))




// POST 
fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: "POST",
    headers: {
        'Content-Type': "application/json",
    },
    body: JSON.stringify({
        name: 'User 1'
    })
})
.then(res => {
    // if(res.ok){
    //     console.log("Response success")
    // } else {
    //     console.log("Response failure")
    // }
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log("ERROR"))


```