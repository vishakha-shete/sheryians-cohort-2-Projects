// // // Conditional Operators (if, else, else-if, ternary, switch)
// // // a) Take input using prompt for age.
// // // If age > 18  log “Adultˮ.
// // // Else → log “Minorˮ.

let age = 12;
prompt("enter our age"); {
    if (age > 18)
        console.log("adult");
    else {
        console.log("minor");
    }
}




// Level 1 – Pure Beginner Practice
//print numbers from 1 to 10

for (i = 1; i < 11; i++) {
    console.log(i);
}


//print only even numbers from 1 to 20
// use a loop and condition to print only even ones

for (i = 1; i < 21; i++) {
    if (i % 2 === 0)
        console.log(i);
}


for (i = 2; i <= 20; i += 2) {
    console.log(i);
}


//print numbers from 10 to 1 reverse loop with a  decrement


for (i = 10; i > 0; i--) {
    console.log(i);
}


//print the word "yes" 5 times reapeat using a loop

for (i = 1; i < 6; i++) {
    console.log("yes");
}



//print whether number from 1 to 10 are even or odd for each number check:even,else odd
//case 1
for (i = 1; i < 11; i++) {
    if (i % 2 === 0)
        console.log("even");
    else
        console.log("odd");
}

//case2
for (i = 1; i < 11; i++) {
    if (i % 2 === 0)
        console.log(`${i} even`);
    else
        console.log(`${i} odd`);
}



//ask user for a number and say if its positive or negative convert krna pdega
//jab bhi prompt se kuch bhi mangoge agar vo string hota hai to use number me 


//case-1

let num = +prompt("enter your number");{
if(prompt === 12){
    console.log("it is 12");}
else
{ console.log("it is not 12");
}}


//case-2

let dot = prompt("enter your number");
let dot2 = parseInt(dot)

console.log(typeof num);



//case-3

let number = +prompt("enter your number");{
    if(number >=0){
        console.log("positive");}
    else
    { console.log("negative");
    }}


// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”


//case-1

let Age = +prompt("enter your age");{
    if( Age >= 18){
        console.log("eligible");
    }
    else{
        console.log("not eligible");
    }
 }


 //case-2

 let value = prompt("enter your age");
 if (value === null){
    console.error("you canceled it");
 }else{
    if (age.trim() === ""){
        console.error("write properly");
    }

    age = Number (value.trim());
        if( isNaN (age)){
            console.error("write numbers");
        }
        else{
         console.log("confiem ye number hain");
        }


    }



// // 8. Print multiplication table of 5
// // Use loop to print 5 × 1 to 5 × 10.

for (i=1;i<11; i++){
    console.log(`5 * ${i} = ${5*i}`)

}

// // 9. Count how many numbers between 1 and 15 are greater than 8
// // Loop and count conditionally.

//case-1

for(i=1; i<16; i++){
    if(i>8)
    console.log(i);
}


//case-2

let count = 0;
for (i = 1; i < 16; i++) {
    if (i > 8)
        count++;
}
console.log(count);



// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input.

let password = 1234;
prompt("enter your password");{
if(password === 1234){
    console.log("matched");
}
else
    console.log("missmatched")

}


// // Level 2 – Slightly Tougher but Logical
// // 11. Allow only 3 attempts to enter correct password
// // If user gets it right early, stop. If not → “Account locked”

// // 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// // Loop until "stop" is typed. Count "yes".

// // 13. Print numbers divisible by 7 from 1 to 50
// // Use modulo % and loop.

for(i=1; i<=50; i++){
    if(i%7 === 0)
    console.log(i);
}


// // 14. Sum of all odd numbers from 1 to 30
// // Add only odd numbers. Print final sum.

for (i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}