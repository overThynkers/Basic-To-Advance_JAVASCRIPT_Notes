//! ECMAScript 2015 (ES6)
// * FEATURES
// ? let
// ? const
// ? Template Literals
// ? Default Parameters
// ? Arrow Functions
// ? Destructuring
// ? Enhanced Object Properties
// ? Rest Operator
// ? Spread Operator

// ==========================================================
// * let Keyword
// ==========================================================

// ? Definition:
// The let keyword is used to declare variables with block scope.
// Variables declared with let can be reassigned, but they cannot
// be redeclared within the same scope.

// ? Example:

let age = 20;
age = 25;

console.log(age); // 25

// ? Block Scope Example:

if (true) {
    let message = "Hello World";
    console.log(message);
}

// console.log(message); // Error

// ==========================================================
// * const Keyword
// ==========================================================

// ? Definition:
// The const keyword is used to declare variables with block scope.
// A const variable cannot be reassigned after initialization.
// However, objects and arrays declared with const can still have
// their contents modified.

// ? Example:

const country = "Pakistan";

// country = "India"; // Error

console.log(country);

// ? Object Example:

const user = {
    name: "Ali"
};

user.name = "Ahmed";

console.log(user.name); // Ahmed

// ==========================================================
// * Template Literals
// ==========================================================

// ? Definition:
// Template literals provide an easier and more readable way to
// create strings. They use backticks (` `) instead of single
// or double quotes and allow embedding variables and expressions
// using ${}.

// ? Example:

let firstName = "Ali";
let lastName = "Ahmed";

// Traditional Way

console.log("Hello " + firstName + " " + lastName);

// Template Literal

console.log(`Hello ${firstName} ${lastName}`);

// ? Multi-line String Example:

let text = `
Welcome to JavaScript
ES6 Features
Learning Template Literals
`;

console.log(text);

// ==========================================================
// * Default Parameters
// ==========================================================

// ? Definition:
// Default parameters allow you to assign default values to
// function parameters. If no argument is passed, the default
// value will be used.

// ? Example:

function sum(a = 10, b = 20) {
    return a + b;
}

console.log(sum()); // 30
console.log(sum(5, 5)); // 10

// ==========================================================
// * Arrow Functions
// ==========================================================

// ? Definition:
// Arrow functions provide a shorter syntax for writing functions.
// They are commonly used for callbacks and concise functions.

// ? Traditional Function

function multiply(a, b) {
    return a * b;
}

// ? Arrow Function

const multiplyArrow = (a, b) => {
    return a * b;
};

console.log(multiplyArrow(5, 2));

// ? Short Syntax

const add = (a, b) => a + b;

console.log(add(10, 20));

// ? Single Parameter

const printNumber = number => console.log(number);

printNumber(15);

// ==========================================================
// * Destructuring
// ==========================================================

// ? Definition:
// Destructuring allows you to extract values from arrays or
// properties from objects and assign them to variables easily.

// ? Array Destructuring

const colors = ["Red", "Blue", "Green"];

const [firstColor, secondColor] = colors;

console.log(firstColor); // Red
console.log(secondColor); // Blue

// ? Object Destructuring

const student = {
    studentName: "Ali",
    age: 20
};

const { studentName, age: studentAge } = student;

console.log(studentName);
console.log(studentAge);

// ==========================================================
// * Enhanced Object Properties
// ==========================================================

// ? Definition:
// ES6 allows shorter syntax when creating objects if variable
// names match property names.

// ? Traditional Way

const userName = "Ali";
const userAge = 22;

const user1 = {
    userName: userName,
    userAge: userAge
};

// ? ES6 Shorthand

const user2 = {
    userName,
    userAge
};

console.log(user2);

// ==========================================================
// * Rest Operator (...)
// ==========================================================

// ? Definition:
// The rest operator collects multiple values into a single array.
// It is commonly used in function parameters.

// ? Example:

function total(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(total(10, 20, 30, 40));

// Output: 100

// ==========================================================
// * Spread Operator (...)
// ==========================================================

// ? Definition:
// The spread operator expands arrays or objects into individual
// elements. It is useful for copying, merging, and passing values.

// ? Array Example

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

// Output:
// [1, 2, 3, 4, 5, 6]

// ? Copy Array

const originalArray = [10, 20, 30];

const copiedArray = [...originalArray];

console.log(copiedArray);

// ? Object Example

const person = {
    name: "Ali",
    age: 22
};

const updatedPerson = {
    ...person,
    city: "Lahore"
};

console.log(updatedPerson);

// ==========================================================
// * Difference Between Rest and Spread
// ==========================================================

// ? Rest Operator
// Collects multiple values into one array.

// Example:

function demo(...values) {
    console.log(values);
}

// ? Spread Operator
// Expands elements from an array or object.

// Example:

const nums = [1, 2, 3];

console.log(...nums);

// Output:
// 1 2 3


// ==========================================================
// Interview Questions - ECMAScript 2015 (ES6)
// ==========================================================

// * What is ECMAScript 2015 (ES6)?
// ? ECMAScript 2015, commonly known as ES6, is a major update to JavaScript that introduced new features and syntax improvements to make code more readable, maintainable, and efficient.

// * Why was ES6 introduced?
// ? ES6 was introduced to solve common JavaScript problems, improve developer productivity, and provide modern programming features similar to other programming languages.

// ==========================================================
// let Keyword
// ==========================================================

// * What is the let keyword in JavaScript?
// ? The let keyword is used to declare variables with block scope. Variables declared with let can be reassigned but cannot be redeclared within the same scope.

// * What is block scope?
// ? Block scope means a variable is only accessible within the block ({}) where it was declared.

// * What is the difference between var and let?
// ? var has function scope and can be redeclared, while let has block scope and cannot be redeclared in the same scope.

// * Can a let variable be reassigned?
// ? Yes, variables declared with let can be reassigned.

// * Can a let variable be redeclared?
// ? No, let variables cannot be redeclared within the same scope.

// ==========================================================
// const Keyword
// ==========================================================

// * What is the const keyword?
// ? The const keyword is used to declare variables whose references cannot be reassigned after initialization.

// * Can a const variable be reassigned?
// ? No, a const variable cannot be reassigned after it has been initialized.

// * Are const variables immutable?
// ? Not completely. Primitive values cannot be changed, but objects and arrays declared with const can have their contents modified.

// * What is the difference between let and const?
// ? let allows reassignment, while const does not allow reassignment after initialization.

// * When should you use const?
// ? Use const by default and use let only when you know the value needs to change.

// ==========================================================
// Template Literals
// ==========================================================

// * What are template literals?
// ? Template literals are strings enclosed in backticks (`) that allow string interpolation and multi-line strings.

// * What is string interpolation?
// ? String interpolation is the process of embedding variables or expressions inside a string using ${}.

// * What are the advantages of template literals?
// ? They improve readability, support multi-line strings, and make variable insertion easier.

// * What is the difference between template literals and normal strings?
// ? Template literals use backticks and support interpolation, while normal strings use single or double quotes and require concatenation.

// ==========================================================
// Default Parameters
// ==========================================================

// * What are default parameters?
// ? Default parameters allow functions to use predefined values when no arguments are passed.

// * Why are default parameters useful?
// ? They help prevent undefined values and reduce the need for manual parameter checking.

// * Can default parameters use expressions?
// ? Yes, default parameter values can be expressions or function calls.

// ==========================================================
// Arrow Functions
// ==========================================================

// * What are arrow functions?
// ? Arrow functions are a shorter syntax for writing functions introduced in ES6.

// * What is the syntax of an arrow function?
// ? Arrow functions use the => operator.

// * What is the main difference between regular functions and arrow functions?
// ? Arrow functions do not have their own this value.

// * Can arrow functions be used as constructors?
// ? No, arrow functions cannot be used with the new keyword.

// * When should arrow functions be used?
// ? Arrow functions are commonly used for callbacks and short utility functions.

// * Do arrow functions have their own arguments object?
// ? No, arrow functions do not have their own arguments object.

// ==========================================================
// Destructuring
// ==========================================================

// * What is destructuring in JavaScript?
// ? Destructuring is a feature that allows extracting values from arrays or properties from objects into variables.

// * What is array destructuring?
// ? Array destructuring extracts values from arrays into separate variables.

// * What is object destructuring?
// ? Object destructuring extracts object properties into variables using matching property names.

// * Why is destructuring useful?
// ? It reduces repetitive code and improves readability.

// * Can we rename variables during object destructuring?
// ? Yes, object properties can be assigned to variables with different names.

// ==========================================================
// Enhanced Object Properties
// ==========================================================

// * What are enhanced object properties?
// ? Enhanced object properties provide a shorter syntax for defining object properties and methods.

// * What is object property shorthand?
// ? When variable names and property names are the same, ES6 allows using only the variable name.

// * Why are enhanced object properties useful?
// ? They make object creation cleaner and reduce repetition.

// ==========================================================
// Rest Operator
// ==========================================================

// * What is the rest operator?
// ? The rest operator (...) collects multiple values into a single array.

// * Where is the rest operator commonly used?
// ? It is commonly used in function parameters.

// * Can a function have multiple rest parameters?
// ? No, a function can only have one rest parameter.

// * Why is the rest operator useful?
// ? It allows functions to accept an unlimited number of arguments.

// ==========================================================
// Spread Operator
// ==========================================================

// * What is the spread operator?
// ? The spread operator (...) expands arrays, objects, or iterable elements into individual values.

// * What is the difference between spread and rest operators?
// ? The spread operator expands values, while the rest operator collects values.

// * How is the spread operator used with arrays?
// ? It can copy, merge, or pass array elements individually.

// * How is the spread operator used with objects?
// ? It can copy or merge object properties into a new object.

// * Why is the spread operator useful?
// ? It provides an easy way to clone and merge arrays or objects without modifying the original data.

// ==========================================================
// General ES6 Questions
// ==========================================================

// * What are the most important features introduced in ES6?
// ? let, const, template literals, arrow functions, destructuring, default parameters, rest operator, spread operator, classes, modules, promises, Map, and Set.

// * Why is ES6 considered important in modern JavaScript?
// ? ES6 introduced modern syntax and features that make JavaScript more powerful, maintainable, and developer-friendly.

// * What are the benefits of using ES6?
// ? Improved readability, cleaner syntax, better code organization, reduced boilerplate code, and enhanced functionality.

// * Is ES6 supported in modern browsers?
// ? Yes, most ES6 features are fully supported in modern browsers.

// * What is transpiling in JavaScript?
// ? Transpiling is the process of converting modern JavaScript (ES6+) into older JavaScript versions using tools like Babel so that older browsers can understand the code.