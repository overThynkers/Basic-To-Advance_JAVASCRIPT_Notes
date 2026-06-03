// * JAVASCRIPT FUNCTIONS
// ? In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and mangeable pirces, promote code reuse, and make programs more readable.
// ? 1- Function Declaration
// ? 2- Function Invocation
// ? 3- Function Parameter
// ? 4- Function Argument
// ? 5- Function Expressions
// ? 6- Anynymous Function
// ? 7- Return Keywords
// ? 8- IIFE (Immediately Invoked Function Expression)
// ? 9- More we will see in Advance


// * Triditional Function Syntax
// function functioName(parameters) {
    // Code To be Executed it's also called function body 
    // return result; // Optional Return statement
// }
// functioName(argument) // Function Invocation

// function sumOfTwo(sum1, sum2) {
//     return sum1 + sum2;
// };

// console.log(sumOfTwo(10, 20));
// console.log(sumOfTwo(30, 20));
// console.log(sumOfTwo(100, 20));

// function greet(name) {
//     console.log(`Hello Baby, ${name} Hope you are well`);
// };
// greet("Yasir Khan Ali Bahadur");


// * Function Expression
// ? A Function Expression is a way to define a function as part of an expression. It can be either named or anonymous. If It's named, it becomes a named function expression.
// let result = function sum(a, b) {
//     console.log(a + b);
// };
// result(10, 15);


// * Anonymous Function
// ? An Anonymous function is a function without a name. IT can be created using either a function expression or a function declaration without a specified name.
// let result = function(a, b) {
//     console.log(a + b);
// };
// result(10, 15);


// * IIFE - Immediately Invoked Function Expression
// ? An IIFE, or Immediately Invoked Function Expreesion, is a JavaScript function that defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the sorrounding code and executes Immediately
// (function() {
//     console.log("Haroon");
// })();


//todo Calculator
// const calculator = (sum1, sum2, op) => {
    // USing if
    // if(op == "+") {
    //     return sum1 + sum2;
    // } else if (op == "-") {
    //     return sum1 - sum2;
    // } else if (op == "x") {
    //     return sum1 * sum2;
    // } else if (op == "/") {
    //     return sum1 / sum2;
    // } else {
    //     return `Operator Is Invalid`;
    // }

    // Using Switch
    // switch(op) {
    //     case "+":
    //         return sum1 + sum2
    //     break;
    //     case "-":
    //         return sum1 + sum2
    //     break;
    //     case "x":
    //         return sum1 + sum2
    //     break;
    //     case "/":
    //         return sum1 + sum2
    //     break;
    //     default:
    //         return `Operator Is Invalid`;
    // }
// };
// console.log(calculator(10, 20, "x"));




// const reverseString = (str) => {
//     let result = "";
//     for(let i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result;
// };
// console.log(reverseString("haroon"));


// const plindrome = (str) => {
//     let result = "";
//     for(let i = str.length - 1; i >= 0; i--) {
//         result+= str[i];
//     }
//     // if(result == str) {
//     //     return "It's Palindrome";
//     // } else {
//     //     return "It's not Palindrome";
//     // }
//     return result === str ? "It's Palindrome" : "It's not Palindrome";
// };
// console.log(plindrome("level"));



// ==========================================================
//! Interview Questions - JavaScript Functions
// ==========================================================

// * What is a function in JavaScript?
// ? A function is a reusable block of code designed to perform a specific task. Functions help organize code, improve readability, and reduce repetition.

// * What is the difference between a function declaration and a function expression?
// ? A function declaration is created using the function keyword and is hoisted. A function expression is assigned to a variable and is not fully hoisted.

// * What is function invocation?
// ? Function invocation means calling or executing a function using its name followed by parentheses.

// * What is the difference between parameters and arguments?
// ? Parameters are variables listed in the function definition, while arguments are the actual values passed to the function when it is called.

// * What is the return keyword in JavaScript?
// ? The return keyword ends function execution and sends a value back to the caller.

// * What happens if a function does not return anything?
// ? JavaScript automatically returns undefined if no return statement is provided.

// * What is a function expression?
// ? A function expression is a function assigned to a variable. It can be named or anonymous.

// * What is an anonymous function?
// ? An anonymous function is a function without a name. It is commonly used in function expressions and callbacks.

// * What is a named function expression?
// ? A named function expression is a function expression that has its own name inside the function definition.

// * What is IIFE in JavaScript?
// ? IIFE stands for Immediately Invoked Function Expression. It executes immediately after being defined.

// * Why do we use IIFE?
// ? IIFE is used to create a private scope, avoid polluting the global scope, and execute code immediately.

// * What is function hoisting?
// ? Function hoisting is JavaScript's behavior of moving function declarations to the top of their scope before execution.

// * Are function expressions hoisted?
// ? No. Function expressions are not fully hoisted like function declarations.

// * What is the difference between a regular function and an arrow function?
// ? Arrow functions have shorter syntax and do not have their own this value, while regular functions do.

// * What is a callback function?
// ? A callback function is a function passed as an argument to another function and executed later.

// * What is a higher-order function?
// ? A higher-order function is a function that accepts another function as an argument or returns a function.

// * What are first-class functions in JavaScript?
// ? JavaScript treats functions as first-class citizens, meaning functions can be assigned to variables, passed as arguments, and returned from other functions.

// * Can a function be stored inside a variable?
// ? Yes. Since functions are first-class citizens, they can be assigned to variables.

// * Can a function return another function?
// ? Yes. JavaScript allows functions to return other functions.

// * What is recursion?
// ? Recursion is a technique where a function calls itself until a specified condition is met.

// * What is the difference between local scope and global scope?
// ? Variables declared inside a function have local scope, while variables declared outside functions have global scope.

// * What is a pure function?
// ? A pure function always produces the same output for the same input and does not modify external state.

// * What are side effects in functions?
// ? Side effects occur when a function modifies data outside its own scope, such as changing global variables or manipulating the DOM.

// * What is the difference between == and ===?
// ? == compares values after type conversion, while === compares both value and data type without conversion.

// * Can functions be passed as arguments to other functions?
// ? Yes. Functions can be passed as arguments because JavaScript treats functions as first-class citizens.

// * What is a self-invoking function?
// ? A self-invoking function is another name for an IIFE, a function that executes immediately after being created.

// * What is the purpose of callback functions in asynchronous programming?
// ? Callback functions allow code to execute after an asynchronous task has completed.

// * What is the difference between function parameters and default parameters?
// ? Default parameters provide fallback values when arguments are not supplied during function invocation.

// * What is a rest parameter in a function?
// ? A rest parameter collects multiple arguments into a single array using the (...) syntax.

// * Can a JavaScript function have multiple return statements?
// ? Yes. A function can contain multiple return statements, but only one will execute during a single function call.

// * What is the difference between return and console.log()?
// ? return sends a value back to the caller, while console.log() only displays information in the console.

// * What is a nested function?
// ? A nested function is a function defined inside another function.

// * What is a closure?
// ? A closure is created when an inner function remembers and accesses variables from its outer function even after the outer function has finished executing.