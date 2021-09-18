# Asynchronous JavaScript

>[Asynchronous vs Synchronous](https://www.youtube.com/watch?v=Kpn2ajSa92c)

>[W3School on Async](https://www.w3schools.com/js/js_async.asp)

>[MDN on Asyc](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)


*"async and await make promises easier to write"*

*async makes a function return a Promise*

*await makes a function wait for a Promise

---------------------------------


The keyword `async` before a function makes the function return a `promise`:

```js
async function myFunction() {
  return "Hello";
}

//Is the same as:

async function myFunction() {
  return Promise.resolve("Hello");
}

```