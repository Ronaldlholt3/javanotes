//This is an example of a promise. It shows up in the console as a promise.
//console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
// const emailRef = document.querySelector(".email");
// console.log(emailRef);

//How do I access this data?
//There's two ways to access this data.

//The first method is using a **Then**
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email
//   });

// 1.The **.then** method turns into a call back function. The call back function is the brackets with the arrow and squigules
//There's two promises we had to use. The first one was **fetch** to retrieve data from the backend.
//And the second promise in order to make it useable for front end I need to use the **.then** method.
//response.json().then(data => {
//console.log(data)
//})
//It creates a call back in order to get the data I want.

// 2.The second is using **Async/Await**
// async function main() {
// const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
// const data = await response.json()
// console.log(data)
// emailRef.innerHTML =data.email
// }

// main()

function lassThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lassThanOrEqualToZero(0))