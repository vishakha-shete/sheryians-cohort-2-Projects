
// SECTION 1: OOPS Thinking with Objects


// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
// 	2.	Add one more method to the same object that increases the price by 10 percent.
// 	3.	Now imagine you need 10 laptops with same structure but different data.
//  Write down (in words or code) what problems you will face if you keep using plain objects.


// question-1
// 	1.	Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”.
let laptop = {
    brand: "suziki",
    price: "8",
    start: function (brand, price) {
        console.log("laptop started ");
    }
}
laptop.start();

//question -2
// 	2.	Add one more method to the same object that increases the price by 10 percent.
let laptop1 = {
    brand: "suziki",
    price: "8",
    start: function (brand, price) {
        console.log("laptop started " + price + 10);
    }
}
laptop.start();


// 	3.	Now imagine you need 10 laptops with same structure but different data.
//  Write down (in words or code) what problems you will face if you keep using plain objects.

// 1) Problems if you keep using plain objects (one object per laptop)
// Duplication of code: each laptop repeats the same methods/logic → hard to maintain.
// Memory waste: every object stores its own copy of methods (if methods defined inline), instead of sharing.
// Bugs & inconsistency: changing behavior requires editing every object.
// Hard to scale: creating many laptops manually is tedious and error-prone.
// No central validation: each object might have inconsistent fields (missing price, wrong types).



// SECTION 2: Classes and Objects (Reinforcement)
// 	4.	Create a class named Employee that stores:
// name
// salary
// Add a method showDetails that prints name and salary.
// 5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.
// 6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?


// 	4.	Create a class named Employee that stores:
// name
// salary
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;

    }
    showDetails() {
        console.log(this.name + this.salary);
    }
}
let Employee0 = new Employee("vishakha shete", 50);



// Add a method showDetails that prints name and salary.
// 5.	Create three employee objects from the same class and verify that modifying one employee does not affect the others.

class Employee4 {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;

    }
    showDetails() {
        console.log(this.name + this.salary);
    }
}
let Employee1 = new Employee4("vishakha shete", 50);
let Employee2 = new Employee4("prashita khalokar", 70);
let Employee3 = new Employee4("pallavi raut", 90);

// 6.	Explain in your own words:
// Why is class considered a better option than writing similar objects again and again?

// A class acts like a blueprint for creating many objects with the same structure.
// If we create objects manually again and again, we repeat the same properties and methods, which causes:
// Code duplication
// More chances of mistakes
// Difficult to update (because changes must be made in every object)
// More memory usage, since every object stores its own copy of methods
// A class solves these problems because:
// We define the structure once inside the class.
// We can create unlimited objects (instances) using new ClassName().
// All objects share the same methods, so memory is saved.
// If we update the class, all objects automatically get the updated behavior.
// The code becomes cleaner, reusable, and easier to maintain.
// So, using a class is better because it gives reusability, less repetition, better organization, and scalability.


// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

class BankAccount {
    constructor(accountHolderName) {
        this.accountHolderName = accountHolderName;
        this.balance = 300;
    }
    depositAmount(amount) {
        this.balance += amount;
        console.log("New balance is: " + this.balance);
    }
}
let acc1 = new BankAccount("Sunil");
let acc2 = new BankAccount("Sunil2");

acc1.depositAmount(500);


// SECTION 4: Understanding this (Very Important)
// 	11.	Create an object named profile with a property username and a method printName that logs this.username.
// 	12.	Call the method normally and observe the output.
// 	13.	Store the method in a separate variable and call it.
// Observe what happens to this and explain why.
// 	14.	Modify the code so that this works correctly again.

let profile = {
    username: "harsh vandana sharma",
    printName() {
        console.log(this.username);
    }
}

profile.printName();

// 	13.	Store the method in a separate variable and call it.
let profile1 = {
    username: "sarthak sharma",
    printName1() {
        console.log(this.username);
    }
}

let newFn = profile1.printName1;
newFn();

// Observe what happens to this and explain why.
// ❓ Why undefined?
// Because now the function is called without any object.

// So: this → refers to window (in browser)

// There is no:
// window.username

// So result is:
// undefined

// When you remove a method from its object, this gets lost.


// 	14.	Modify the code so that this works correctly again.


// ✔️ Solution 1: Using bind()
let profile3 = {
    username: "sarthak sharma",
    printName() {
        console.log(this.username);
    }
}

let newFn1 = profile3.printName.bind(profile3);
newFn1();
// Output: vishakha shete


// ✔️ Solution 2: Use arrow function inside object
// Arrow functions do NOT change this.

let profile4 = {
    username: "backend prajapati",
    printName: () => {
        console.log(profile4.username);
    }
}
let newFn3 = profile4.printName;
newFn3();
// Output: vishakha shete



// ✔️ Solution 3: Call using call()
// newFn.call(profile);

let profile5 = {
    username: "satvik",
    printName() {
        console.log(this.username);
    }
};

profile5.printName();

let newFn4 = profile.printName.bind(profile4);
newFn4();


// SECTION 5: Constructor Function and Prototype
// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.
// 	17.	Move the same method to Vehicle.prototype and repeat the test.
// 	18.	Explain why the prototype approach is preferred.

// 	15.	Create a constructor function called Vehicle that accepts type and wheels.
function Vehical(type, wheels) {
    this.types = type;
    this.wheels = wheels;
}


// 	16.	Add a method describe inside the constructor and observe memory behavior when multiple objects are created.

function Vehical1(types, wheels) {
    this.types = types;
    this.wheels = wheels

    this.describe = function () {
        console.log(this.types + " has " + this.wheels + " wheels ");
    };
}
let v1 = new Vehical1("honda", 2);
v1.describe();



// 	17.	Move the same method to Vehicle.prototype and repeat the test.

function Vehical2(types, wheels) {
    this.types = types;
    this.wheels = wheels;
}
Vehical2.prototype.observe = function () {
    console.log(this.types + " - " + this.wheels);
}
let a1 = new Vehical2("creata", 4);
a1.observe();

// 	18.	Explain why the prototype approach is preferred.
// Prototype methods are shared → constructor methods are duplicated.

// SECTION 6: call Method Practice
// 	19.	Create a function showBrand that prints this.brand.
// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
// 	22.	Explain what problem call is solving here.

// 	19.	Create a function showBrand that prints this.brand.
function showBrand() {
    console.log(this.brand);
}
showBrand();

// 	20.	Create two different objects with brand values.
// 	21.	Use call to execute showBrand for both objects.
let obj1 = {
    brand: "samsung"
}
let obj2 = {
    brand: "i-phone"
}
showBrand.call(obj1);
showBrand.call(obj2);


// 	22.	Explain what problem call is solving here.
// call() solves the problem of losing this inside a standalone function. It lets us manually set this so the same function can be reused with different objects.


// SECTION 7: apply Method Practice
// 	23.	Create a function introduce that accepts 
// two arguments: city and role, and prints name, city, 
// and role using this.name.
// 	24.	Create an object with a name property.
// 	25.	Use apply to call introduce using the object and an array of arguments.
// 	26.	Explain in simple words how apply differs from call.

// 	23.	Create a function introduce that accepts 
// two arguments: city and role, and prints name, city, 
// and role using this.name.
function introduce(city, role) {
    console.log("name:" + this.name + " city:" + city + " role:" + role);
}

// 	24.	Create an object with a name property.
let person = {
    name: " sakshi "
}
// 3. array of arguments
let args = [" Pune ", " Student "];

// 4. call using apply (object, arrayOfArgs)
introduce.apply(person, args);
// Output: Name: Vishakha Shete, City: Pune, Role: Student



// SECTION 8: bind Method Practice
// 	27.	Create a function greet that prints “Hello” followed by this.name.
// 	28.	Bind this function to an object and store the returned function in a variable.
// 	29.	Call the bound function later and observe the output.
// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.

// 	27.	Create a function greet that prints “Hello” followed by this.name.
function greet() {
    console.log("hello" + this.name);
}

// 	28.	Bind this function to an object and store the returned function in a variable.
let person1 = {
    name: " my future self"
}

let greetvishakha = greet.bind(person1);

// 	29.	Call the bound function later and observe the output.
greetvishakha();

// 	30.	Explain why bind is useful when functions are executed later or inside callbacks.
// bind() creates a new function where this is permanently fixed to the chosen object. This is helpful when functions are executed later—like in callbacks, timers, or event listeners—because they normally lose their original this context.