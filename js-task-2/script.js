// Assignment - 29 Oct

// Basic Operators Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise

//Q.a) Create two numbers a  10 and b  3.
// --> Perform and log: a + b, a - b, a * b, a / b, a % b.

let a = 10;
let b =3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);



// Q. b) Write: let x = 5; x = x + 3;
// Now rewrite the same using +=.
// Do the same for -=, *=, /=.

let x = 5;
x = x + 3;
//8
x = x += 3;
//11
x = x -= 3;
//8
x = x *= 3;
//24
x = x /= 3;
//8

console.log(x);


// Q. c) let count = 5;
// Use count++ and log value before and after.
// Repeat for count–.

let count = 5;
console.log(count);
count++
console.log(count);

// console.log(count);
// ++count
// console.log(count);



// Q. d) Compare two values: 5 == “5ˮ and 5 === “5ˮ.
//  Observe difference.

let c = 5=="5";
console.log(c);
//true

let d = 5==="5";
console.log(d);
//false


// Q. e) Check if 10 is greater than 5, less than 20, and equal to 10.

let e = 10 ;
console.log(e>5);
//true
console.log(e<=20);
//true
console.log(e=10);
//10
 
let y =10;
if(y>5 && y<=20 && y===10 ){
    console.log("done");
}

let z =11;
if(z>5 && z<=20 && z===10 ){
    console.log("done");
}else{
    console.log("notdone")
}


// Q. f) Try logical AND and OR
//  true && false
//  true || false
//  !(true)

let f =true && false ;
console.log(f);
//false

let g = true || false ;
console.log(g);
//true

let h = !true;
console.log(h);
//false


// Q. g) Predict the result of:
//  (5 > 3 && 10 > 8),
//  (5 > 3 || 10 < 8)

let i = (5>3&&10>8);
console.log(i);
//true

let j = (5>3||10<8);
console.log(j);
//true

//Q. H) Bitwise (light intro):
// Evaluate 5 & 1 and 5 | 1.
// Write result and your observation (no deep explanation needed now).

let k = 5 & 1 ;
console.log(k);
//1
// not teache till now
let l = 5 | 1 ;
console.log(l);
//5


// *** Variable Hoisting in JavaScript


// a) Predict output of:
console.log(m);
var m = 10;
//undefined

// b) Predict output of:
//  console.log(n);
//  let n = 10;
 //Cannot access 'n' before initialization

 // c) Predict output of:

 test()
 function test() {
     console.log("Hello")
     };
//hello
//its works with function




// d) Try writing a function expression before initialization and call it:
//  hello()
//  var hello = function() { console.log(“Hiˮ) }
//  Write what happened and why.

// hello()
// var hello = function() {
//      console.log("Hi")
//      };
//hello is not a function

//Q. e) Write one sentence:
//  What gets hoisted?
// //---In JavaScript, **declarations** (of `var` variables and `function`s) 
// are moved to the top of their scope during compilation,
//  while **initializations** (`var` values, `let`, and `const` assignments)
//   are left in place.
//  What does not get hoisted fully?
//------ The **initialization value** of a `var` variable and the full **body/accessibility** 
// of declarations using **`let`**, **`const`**, and **function expressions**
//  are not hoisted to the top of the scope, 
// causing access errors or `undefined`.


// **Conditional Operators (if, else, else-if, ternary, switch)

// a)Take input using prompt for age.
// If age > 18 -->log “Adultˮ.
// Else → log “Minorˮ.