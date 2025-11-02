//Js assignment 27-oct-2025
//**Introduction to JavaScript

//1. Open any website → right-click → Inspect → Console → type: document.title
//completed

//2. Try: alert(“Hello from Sheryians!”)
alert("hello from sheryians");

//3. Write one line in your own words: “If HTML is skeleton, CSS is clothes — what is JS?”
//----If HTML is the skeleton and CSS is the clothes, JavaScript (JS) is the brain and muscles that make the body move and interact.

//4. Write one example of where you’ve seen JS being used (like popup,animation, etc.)
// -----A very common example is when you click a button on a website, and 
// a popup window or a dropdown menu appears without reloading the whole page.
// For instance, when you click a "Sign Up" button and a small registration form 
// instantly appears centered on the screen


//***Linking JavaScript Files

//1. Create an HTML file and link JS file like this:
//    ----done

//2. In app.js, write: console.log(“Connected!”)
console.log("connected!");


// 3. Move the script tag to the section and see what happens.
////-----------no ishue


// //***Running JS in Browser Console
// 1. Open console and type: 2 + 2 = 4
// 2. Type: alert(“Hi”) = hii
// 3. Try: prompt(“Your name?”) = your name
// 4. Type: let city = “Bhopal”; city =bhopal

//***Variables and Keywords (var, let, const)
// 1. Declare your name using all three: var a = “Harsh”; let b = “Sheryians”; const c
// = “School”
// var a = "vishakha";
// let b = "vishakha";
// const c = "vishakha";


// 2. Try reassigning them: a = “Updated”; b = “Updated”; c = “Updated”
// a = "updated"
// b = "updated"
// c = "updated"

// 3. Create a variable inside curly braces using let and log it outside.
// {
//     let a = 12;
// }
// console.log(a);

// 4. Predict output before running. ----done
// 5. Write 3 examples where const is useful (like PI, baseURL, etc.)
    


// Logging and Interaction (console, alert, prompt)
// 1. Log name, age, and city using console.log, console.info, console.warn.
console.log("name");
console.info("age");
console.warn("city");
console.error("22");



// 2. Use prompt to take user’s name → alert a welcome message.
// prompt("enter your name");
// alert("wellcome guys");

// 3. Log typeof of user’s input.
let b = 12;
typeof "12"


// 4. Try: let age = prompt(“Enter age:”); console.log(age + 5); observe what happens.
// let a = prompt("your name ?");
// alert(`${hey}`);



//*** Working with Strings
// 1. let msg = “I love Sheryians”;
let msg = "i love sheryians";

// 2. Try msg.slice(2, 6) and predict the result.
msg.slice(2, 6)  //--love


// 3. Try msg.split(” “) and count words.
msg.split('') //17

// 4. Try msg.replace("love", "study at").
    //---i study at sheryians 

// 5. Template string example: let name = “Harsh”; console.log(Hey ${name},welcome to JS!)
let name = "vishakha";
console.log(`hey ${name},welcome to JS!`)

// 6. Check if msg.includes(“love”)


//***/ Comments
// 1. Write your name as a single-line comment.
// /vishkha

// 2. Write a 3-line comment explaining what your code does.
///i used to write code clean

// 3. Hide one console.log using comment and check output.
// console.log 


// Expressions vs Statements
// 1. Type 5 + 10 (expression).
// 2. Type let x = 10; (statement).
// 3. Which one gives a value immediately?
// -----(expression)

// 4. Try: let y = (5 + 10) * 2; console.log(y)
let y = (5 + 10) * 2; console.log(y)

// 5. Write one line explaining the difference between both.


// Data Types
// 1. let age = 25; let name = “Harsh”; let isStudent = true; let skills = [“JS”,
// “HTML”]; let user = { city: “Bhopal” }; let x = null; let y; let z = Symbol(“id”)
// 2. Log typeof each variable.
// 3. Change one value and recheck typeof.
// 4. Try adding a number and string together.
//----------completed


//*** Special Values
// 1. Log 1 / 0, 0 / 0, Number(“abc”), undefined + 1
// 2. Write what appears (Infinity, NaN, etc.)
// 3. Write one line explaining when to use null vs undefined.



//*** Primitive vs Reference
// 1. let x = 5; let y = x; y = 10; console.log(x, y)
// let x = 5;
// let y = x;
// y = 10;
// console.log(x, y)


// 2. let obj1 = { name: “Harsh” }; let obj2 = obj1; obj2.name = “Sheryians”; console.log(obj1.name)

let obj1 = { name: "Harsh" };
let obj2 = obj1; obj2.name = "Sheryians";
console.log(obj1.name)

// 3. Observe which one changes together.
// 4. Draw memory boxes on paper to visualize difference.
