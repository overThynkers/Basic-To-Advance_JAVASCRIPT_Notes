//! INTRODUCTION TO JAVASCRIPT (INTERVIEW QUESTIONS WITH ANSWERS)

//* What is JavaScript?
//? JavaScript is a programming language used to make websites interactive and dynamic.

//* Who created JavaScript and in which year?
//? Brendan Eich created JavaScript in 1995 at Netscape.

//* What was the original name of JavaScript?
//? It was first called Mocha, then LiveScript, and finally JavaScript.

//* Why was JavaScript renamed from LiveScript to JavaScript?
//? It was renamed to gain popularity by associating it with Java.

//* What is ECMAScript?
//? ECMAScript is the standard specification on which JavaScript is based.

//* When was ES6 introduced and why is it important?
//? ES6 was introduced in 2015 and it added modern features like let/const, arrow functions, classes, etc.

//* What are the different ways to write JavaScript?
//? Inline, Internal, and External JavaScript.

//* What is inline JavaScript?
//? JavaScript written directly inside HTML elements using attributes like onclick.

//* What is internal JavaScript?
//? JavaScript written inside <script> tags in the same HTML file.

//* What is external JavaScript?
//? JavaScript written in a separate .js file and linked using <script src="file.js"></script>.

//* Difference between inline, internal and external JavaScript?
//? Inline is written in HTML elements, internal is inside HTML file, and external is in a separate file.

//* Why is external JavaScript preferred over inline and internal?
//? Because it improves code readability, reusability, and maintainability.



//! VARIABLES & VALUES (INTERVIEW QUESTIONS)

//* What is a variable in JavaScript?
//? A variable is a container used to store data values in memory.

//* Why do we use variables?
//? We use variables to store, update, and reuse data in a program.

//* Give an example of variable declaration.
//? Example: var myName = "World";

//* What are the types of variables in JavaScript?
//? There are three types: var, let, and const.

//* What is var?
//? var is the oldest way to declare variables.
//? It has function scope and can be re-declared and updated.
//? It is not recommended in modern JavaScript.

//* What is let?
//? let is introduced in ES6.
//? It has block scope.
//? It can be updated but cannot be re-declared in the same scope.

//* What is const?
//? const is also introduced in ES6.
//? It has block scope.
//? It cannot be re-declared or updated.
//? It is used for constant values.

//* What is a value in JavaScript?
//? A value is the actual data stored inside a variable (like "World", 25, true, etc.).

//* What are the rules for naming variables?

//* Can variable names start with a number?
//? No, variable names cannot start with a number.

//* Can variable names contain spaces?
//? No, variable names cannot contain spaces.

//* Can we use special symbols in variable names?
//? Only _ (underscore) and $ (dollar sign) are allowed.

//* What is camelCase?
//? camelCase is a naming convention where the first word is lowercase and each next word starts with uppercase (e.g., myFirstName).

//* Can we use reserved keywords as variable names?
//? No, reserved keywords like if, const, for cannot be used.

//* Are variable names case sensitive?
//? Yes, myName and myname are different variables.

//* Quiz Answers (Valid or Invalid)

//? var my_firstName = "John"; // Valid ✅
//? var _myLastName$ = "Doe"; // Valid ✅
//? var 123myAge = 25; // Invalid ❌
//? var $cityName = "New York"; // Valid ✅
//? var my@Email = "info@overThynkers.com"; // Invalid ❌



//! JAVASCRIPT DATA TYPES - INTERVIEW QUESTIONS & ANSWERS

//* Q1: What are data types in JavaScript?
//? Answer: Data types define what type of value a variable can store and how JavaScript handles it.
//? Example: String, Number, Boolean, Null, Undefined, BigInt, Symbol, Object.

//* Q2: What are primitive data types?
//? Answer: Primitive data types are basic types that store single values and are immutable.
//? Example: String, Number, Boolean, Null, Undefined, BigInt, Symbol.

//* Q3: What is the difference between null and undefined?
//? Answer:
//? undefined → variable is declared but not assigned a value
//? null → intentional absence of value

//* Q4: What is typeof operator used for?
//? Answer: typeof is used to check the data type of a variable.

//* Q5: Why typeof null is "object"?
//? Answer: It is a historical bug in JavaScript that has been kept for backward compatibility.

//* Q6: What is BigInt?
//? Answer: BigInt is used to store numbers larger than Number limit.

//* Q7: What is Symbol in JavaScript?
//? Answer: Symbol is used to create unique and immutable values.

//* Q8: What are truthy and falsy values?
//? Answer:
//? Truthy → values treated as true in conditions
//? Falsy → values treated as false in conditions

//* Q9: List falsy values in JavaScript.
//? Answer:
//? false, 0, "", null, undefined, NaN

//* Q10: What is NaN?
//? Answer: NaN means Not-a-Number and represents invalid numeric operations.

//* Q11: Why NaN === NaN is false?
//? Answer: Because NaN represents an invalid number, and every NaN value is different.

//* Q12: How to check NaN in JavaScript?
//? Answer: Using isNaN() function.

//* Q13: Difference between parseInt and parseFloat?
//? Answer:
//? parseInt → converts string to integer (removes decimal)
//? parseFloat → converts string to decimal number

//* Q14: What does parseInt("1.9") return?
//? Answer: 1 (it ignores decimal part)

//* Q15: What does parseFloat("1.9") return?
//? Answer: 1.9 (keeps decimal part)

//* Q16: How to convert string to number?
//? Answer:
//? Using + operator, Number() function, or parseInt/parseFloat

//* Q17: How to convert number to string?
//? Answer:
//? Using String() function or adding "" empty string

//* Q18: What is the difference between == and ===? (Important)
//? Answer:
//? == → checks value only (type conversion allowed)
//? === → checks value + type (strict equality)

//* Q19: Is array a primitive data type?
//? Answer: No, array is a non-primitive (object) data type.

//* Q20: What is difference between primitive and non-primitive types?
//? Answer:
//? Primitive → stores single value, immutable
//? Non-primitive → stores multiple values, mutable (objects, arrays, functions)

//* Q21: Why is typeof NaN "number"?
//? Answer: Because NaN is considered a numeric type in JavaScript even though it is invalid.

//* Q22: What is output of isNaN("abc")?
//? Answer: true (because it cannot be converted into a valid number)

//* Q23: What is output of isNaN(123)?
//? Answer: false (because it is a valid number)

//* Q24: Can object and array be stored in variables?
//? Answer: Yes, both are non-primitive data types.

//* Q25: Why do we use Symbol?
//? Answer: To create unique values that never collide with other values.



//! CONCATINATION AND TYPE COERCION - INTERVIEW QUESTIONS


//* Q1: What is concatenation in JavaScript?
//? Answer: Concatenation means joining two or more strings together using the + operator.
//? Example: "Hello" + "World" = "HelloWorld"

//* Q2: What happens when we use + operator with a string and a number?
//? Answer: JavaScript converts the number into a string and performs string concatenation.
//? Example: "5" + 10 = "510"

//* Q3: What is type coercion in JavaScript?
//? Answer: Type coercion is the automatic conversion of values from one data type to another during operations.

//* Q4: What are the types of type coercion?
//? Answer:
//? 1. Implicit Coercion (automatic conversion by JS)
//? 2. Explicit Coercion (manual conversion by developer)

//* Q5: Why does "5" - 3 = 2 but "5" + 3 = "53"?
//? Answer:
//? - operator converts string to number → subtraction happens
//? + operator converts number to string → concatenation happens

//* Q6: What is the output of "Ali" - "Ahmed"?
//? Answer: NaN (Not a Number)
//? Because subtraction between non-numeric strings is invalid.

//* Q7: What is NaN in type coercion context?
//? Answer: NaN occurs when JavaScript tries to perform invalid numeric operations.

//* Q8: What is output of true + true?
//? Answer: 2
//? Because true is converted to 1 → 1 + 1 = 2

//* Q9: What is output of false + true?
//? Answer: 1
//? false = 0, true = 1 → 0 + 1 = 1

//* Q10: What is output of true - false?
//? Answer: 1
//? true = 1, false = 0 → 1 - 0 = 1

//* Q11: Why does " " + 0 return " 0"?
//? Answer: Because space is a string, so number 0 is converted into string and concatenation happens.

//* Q12: What is difference between implicit and explicit coercion?
//? Answer:
//? Implicit → automatic conversion by JavaScript
//? Explicit → manual conversion using Number(), String(), Boolean()

//* Q13: What is output of 10 + "20"?
//? Answer: "1020"
//? Because number is converted to string due to + operator.

//* Q14: What is output of 9 - "5"?
//? Answer: 4
//? Because string "5" is converted to number.

//* Q15: What is output of "Java" + "Script"?
//? Answer: "JavaScript"

//* Q16: What is output of " " + " "?
//? Answer: "  " (two spaces)

//* Q17: What is output of "Ali" + "Ahmed"?
//? Answer: "AliAhmed"

//* Q18: What is output of false - true?
//? Answer: -1
//? false = 0, true = 1 → 0 - 1 = -1

//* Q19: Why JavaScript does type coercion?
//? Answer: To make operations flexible and reduce errors in dynamic typing.

//* Q20: Can type coercion lead to bugs?
//? Answer: Yes, because it may produce unexpected results if not understood properly.


//! INTERVIEW QUESTIONS

//* What is an Operand?
//? An operand is a value or variable on which an operator performs an operation.
//? Example: In 5 + 3, both 5 and 3 are operands.

//* What is an Operator?
//? An operator is a symbol that performs an operation on one or more operands.
//? Example: +, -, *, /, %, ==, &&

//* What is an Expression?
//? An expression is a combination of operands and operators that produces a value.
//? Example: 5 + 3

//* What are the different types of Operators in JavaScript?
//? Assignment, Arithmetic, Comparison, Logical, String, Unary, Ternary, and Type Operators.

//* What is an Assignment Operator?
//? Assignment operators assign values to variables.
//? Example: let a = 10;

//* What is the difference between = and == ?
//? = is used to assign a value.
//? == is used to compare two values with type coercion.

//* What is the difference between == and === ?
//? == compares only values and performs type coercion.
//? === compares both values and data types without type coercion.

//* What is an Arithmetic Operator?
//? Arithmetic operators perform mathematical calculations.
//? Examples: +, -, *, /, %

//* What does the Modulus (%) operator do?
//? It returns the remainder after division.
//? Example: 17 % 5 returns 2.

//* What is the output of 10 % 3 ?
//? Output: 1

//* What is the purpose of toFixed() method?
//? It limits the number of decimal places.
//? Example: (0.3).toFixed(2) returns "0.30".

//* What is a String Operator?
//? The + operator is used to concatenate strings.
//? Example: "Hello" + " World"

//* What is String Concatenation?
//? Joining two or more strings together.

//* What are Comparison Operators?
//? Operators used to compare values and return true or false.
//? Examples: ==, ===, !=, !==, >, <, >=, <=

//* What is the difference between != and !== ?
//? != compares values only.
//? !== compares both values and data types.

//* What is the output of 5 == "5" ?
//? Output: true

//* What is the output of 5 === "5" ?
//? Output: false

//* What are Logical Operators?
//? Operators used to combine or invert conditions.
//? Examples: &&, ||, !

//* What does Logical AND (&&) do?
//? Returns true only if all conditions are true.

//* What does Logical OR (||) do?
//? Returns true if at least one condition is true.

//* What does Logical NOT (!) do?
//? Reverses the boolean value.

//* What is the output of true && false ?
//? Output: false

//* What is the output of true || false ?
//? Output: true

//* What is a Ternary Operator?
//? A shorthand version of if...else.
//? Syntax: condition ? trueValue : falseValue

//* Write the syntax of a Ternary Operator.
//? condition ? expression1 : expression2

//* When should you use a Ternary Operator?
//? For simple conditional checks where only two outcomes are possible.

//* What is a Control Statement?
//? A statement that controls the flow of program execution.
//? Examples: if-else, switch, loops

//* What is an If Statement?
//? Executes a block of code only if a condition is true.

//* What is an If-Else Statement?
//? Executes one block if the condition is true and another if it is false.

//* What is Nested If-Else?
//? An if-else statement inside another if-else statement.

//* What is an Else If Ladder?
//? Multiple conditions checked one after another.

//* What is a Switch Statement?
//? A control statement used to execute different code blocks based on different values.

//* What is the purpose of break in a Switch Statement?
//? It stops execution and exits the switch block.

//* What happens if break is omitted in a Switch Statement?
//? Execution continues into the next case (fall-through).

//* What is the purpose of the default case in a Switch Statement?
//? It runs when no case matches the expression.

//* What is a Loop?
//? A loop repeatedly executes a block of code until a condition becomes false.

//* What is a While Loop?
//? Executes code repeatedly while a condition remains true.

//* What is the syntax of a While Loop?
//? while(condition) {
//?   code
//? }

//* What is an Infinite Loop?
//? A loop that never ends because its condition always remains true.

//* What is a Do-While Loop?
//? Similar to a while loop, but executes at least once before checking the condition.

//* What is the difference between While and Do-While Loop?
//? While checks the condition first.
//? Do-While executes once before checking the condition.

//* What is a For Loop?
//? A loop used when the number of iterations is known.

//* What is the syntax of a For Loop?
//? for(initialization; condition; increment/decrement) {
//?   code
//? }

//* What are the three parts of a For Loop?
//? Initialization, Condition, and Update (Increment/Decrement).

//* When should you use a For Loop?
//? When the number of iterations is known beforehand.

//* How do you print numbers from 1 to 10 using a For Loop?
//? for(let i = 1; i <= 10; i++) {
//?   console.log(i);
//? }

//* How do you print even numbers from 1 to 100?
//? Use a loop and check if the number is divisible by 2.

//* How do you print odd numbers from 1 to 100?
//? Use a loop and check if the number is not divisible by 2.

//* How do you find the sum of numbers from 1 to 10?
//? Use a loop and keep adding values to a variable.

//* What is a Leap Year?
//? A year divisible by 4 but not by 100, unless it is also divisible by 400.

//* How do you check if a number is Even or Odd?
//? Use the modulus operator.
//? num % 2 === 0 means Even, otherwise Odd.

//* How do you check if a number is Positive, Negative, or Zero?
//? Use if-else conditions.

//* What is Operator Precedence?
//? The order in which operators are evaluated in an expression.

//* Which operator has higher precedence, && or || ?
//? && has higher precedence than ||.

//* What is Type Coercion in JavaScript?
//? Automatic conversion of one data type into another by JavaScript.

//* Give an example of Type Coercion.
//? "5" == 5 returns true because JavaScript converts the string to a number.

//* What is Short-Circuit Evaluation?
//? JavaScript stops evaluating an expression as soon as the result is determined.

//* What is the output of:
//? console.log(5 > 2 && 10 < 20);
//? Output: true

//* What is the output of:
//? console.log(!(5 > 2));
//? Output: false

//* What is the output of:
//? console.log(10 + "5");
//? Output: "105"

//* What is the output of:
//? console.log("10" - 5);
//? Output: 5

//* What is the output of:
//? console.log(typeof (5 + "5"));
//? Output: string

//* What is the output of:
//? console.log(typeof (5 - "5"));
//? Output: number


// ==========================================================
// Interview Questions - JavaScript Functions
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



// ==========================================================
//! Interview Questions - ECMAScript 2015 (ES6)
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



// ! INTERVIEW QUESTION
// * Question: How do you remove duplicate values from an array? And if we don't want to mutate the original array, what should we do?
// ? Answer english me likhna hai

// ==========================================================
// * Removing Duplicates from an Array
// ==========================================================

// ? Removing duplicate values from an array is a very common task
// ? in JavaScript development, especially when dealing with user
// ? data, API responses, or any collection that might contain
// ? repeated entries.

// ? There are multiple ways to achieve this, depending on whether
// ? you want to mutate the original array or create a new one.

// ==========================================================
// * Key Concepts to Mention in the Answer
// ==========================================================

// ? 1. Using Set (ES6) - The most modern and concise way
// ? 2. Using filter and indexOf - Classic approach
// ? 3. Using reduce - Functional approach
// ? 4. Using forEach and includes - Manual approach
// ? 5. Performance considerations for large arrays

// ==========================================================
// * Method 1: Using Set (Recommended)
// ==========================================================

// ? Set is a built-in object that only stores unique values.
// ? This is the cleanest and most performant way to remove duplicates.

// Example:

const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];

// Creating a new array without mutating the original
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
console.log(numbers); // [1, 2, 2, 3, 4, 4, 5, 5, 5] (Original unchanged)

// ? Also works with strings
const fruits = ["apple", "banana", "apple", "mango", "banana"];
const uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits); // ["apple", "banana", "mango"]

// ==========================================================
// * Method 2: Using filter() and indexOf()
// ==========================================================

// ? This method filters elements by keeping only the first
// ? occurrence of each value. indexOf returns the first index
// ? of a given element.

// Example:

const colors = ["red", "blue", "red", "green", "blue", "yellow"];

const uniqueColors = colors.filter((color, index, array) => {
return array.indexOf(color) === index;
});

console.log(uniqueColors); // ["red", "blue", "green", "yellow"]

// ? How it works: For each element, we check if its first
// ? occurrence index matches the current index. If yes, keep it;
// ? if no (meaning it appeared earlier), skip it.

// ==========================================================
// * Method 3: Using reduce()
// ==========================================================

// ? The reduce method builds a new array by checking if the
// ? current element already exists in the accumulator.

// Example:

const items = [10, 20, 10, 30, 20, 40];

const uniqueItems = items.reduce((accumulator, currentValue) => {
if (!accumulator.includes(currentValue)) {
accumulator.push(currentValue);
}
return accumulator;
}, []);

console.log(uniqueItems); // [10, 20, 30, 40]

// ==========================================================
// * Method 4: Using forEach() and includes()
// ==========================================================

// ? A manual approach that gives you full control over the logic.

// Example:

const letters = ["a", "b", "a", "c", "b", "d"];

const uniqueLetters = [];
letters.forEach((letter) => {
if (!uniqueLetters.includes(letter)) {
uniqueLetters.push(letter);
}
});

console.log(uniqueLetters); // ["a", "b", "c", "d"]

// ==========================================================
// * Handling Array of Objects (Removing Duplicates by Property)
// ==========================================================

// ? When working with objects, duplicates are usually identified
// ? by a specific property (like id). Set alone won't work here
// ? because objects are compared by reference, not value.

// Example:

const users = [
{ id: 1, name: "Ali" },
{ id: 2, name: "Ahmed" },
{ id: 1, name: "Ali" }, // Duplicate based on id
{ id: 3, name: "Sara" }
];

// Method 1: Using filter and Map/Set for tracking
const seenIds = new Set();
const uniqueUsers = users.filter(user => {
if (seenIds.has(user.id)) {
return false;
}
seenIds.add(user.id);
return true;
});

console.log(uniqueUsers);
// [{ id: 1, name: "Ali" }, { id: 2, name: "Ahmed" }, { id: 3, name: "Sara" }]

// Method 2: Using reduce with an object as accumulator
const uniqueUsers2 = Object.values(
users.reduce((acc, user) => {
acc[user.id] = user;
return acc;
}, {})
);

console.log(uniqueUsers2);

// ==========================================================
// * Performance Comparison (Good to Mention)
// ==========================================================

// ? For primitive values (strings, numbers):
// ? - Set approach: O(n) - Fastest for large arrays
// ? - filter + indexOf: O(n²) - Slower for large arrays because
// ? indexOf iterates internally for each element

// ? For arrays of objects:
// ? - Map/Set tracking: O(n) - Recommended
// ? - reduce with object: O(n) - Also efficient

// ==========================================================
// * One-Liner Duplicate Removal (Quick Answer)
// ==========================================================

// ? If the interviewer asks for the shortest way:

const arr = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr)];

console.log(unique); // [1, 2, 3, 4, 5]

// ==========================================================
// * Interview Tip
// ==========================================================

// ? When answering this question, always mention:
// ? 1. Whether the original array is mutated or not (immutability is
// ? preferred in modern JavaScript, especially in React).
// ? 2. The Set method as the modern ES6+ approach.
// ? 3. How you'd handle objects (since Set compares by reference).
// ? 4. Performance considerations for large datasets.
// ? 5. That you understand multiple approaches and can choose based
// ? on the specific use case.



// ! INTERVIEW QUESTION TOPIC - STRINGS IN JAVASCRIPT

// * What is a String in JavaScript?
// ? A string is a sequence of characters used to represent text data.
// ? Strings can be written using single quotes (''),
// ? double quotes (""), or backticks (``).

// * What is the length property of a string?
// ? The length property returns the total number of characters
// ? present in a string, including spaces.

// * What are Escape Characters?
// ? Escape characters are special characters preceded by a backslash (\)
// ? that allow special formatting or symbols inside strings.

// * What is the purpose of \n?
// ? \n is used to insert a new line in a string.

// * What is the purpose of \" and \' ?
// ? They are used to include double quotes and single quotes
// ? inside a string.

// * What does indexOf() do?
// ? indexOf() returns the index of the first occurrence
// ? of a specified value in a string.

// * What does lastIndexOf() do?
// ? lastIndexOf() returns the index of the last occurrence
// ? of a specified value in a string.

// * What is the difference between indexOf() and lastIndexOf()?
// ? indexOf() searches from left to right,
// ? while lastIndexOf() searches from right to left.

// * What does search() do?
// ? search() searches for a value or regular expression
// ? and returns the index of the first match.

// * What is the advantage of search() over indexOf()?
// ? search() supports Regular Expressions,
// ? while indexOf() does not.

// * What does match() do?
// ? match() returns an array containing matched values
// ? or null if no match is found.

// * What does matchAll() do?
// ? matchAll() returns an iterator containing detailed
// ? information about all matches in a string.

// * What does includes() do?
// ? includes() checks whether a string contains
// ? a specified value and returns true or false.

// * What does startsWith() do?
// ? startsWith() checks whether a string begins
// ? with a specified value.

// * What does endsWith() do?
// ? endsWith() checks whether a string ends
// ? with a specified value.

// * What is slice()?
// ? slice() extracts a part of a string and returns
// ? it as a new string.

// * What is substring()?
// ? substring() extracts characters between two indexes
// ? and returns them as a new string.

// * What is the difference between slice() and substring()?
// ? slice() supports negative indexes,
// ? while substring() treats negative values as 0.

// * What does replace() do?
// ? replace() replaces the first occurrence
// ? of a specified value in a string.

// * What does replaceAll() do?
// ? replaceAll() replaces all occurrences
// ? of a specified value in a string.

// * What is the difference between replace() and replaceAll()?
// ? replace() changes only the first match,
// ? while replaceAll() changes every match.

// * What does charAt() do?
// ? charAt() returns the character at a specified index.

// * What does charCodeAt() do?
// ? charCodeAt() returns the UTF-16 code
// ? of the character at a specified index.

// * What does at() do?
// ? at() returns the character at a specified index
// ? and also supports negative indexing.

// * What is the advantage of at() over charAt()?
// ? at() supports negative indexes,
// ? while charAt() does not.

// * What does toUpperCase() do?
// ? toUpperCase() converts all characters
// ? in a string to uppercase.

// * What does toLowerCase() do?
// ? toLowerCase() converts all characters
// ? in a string to lowercase.

// * What does trim() do?
// ? trim() removes whitespace from the beginning
// ? and end of a string.

// * What does split() do?
// ? split() converts a string into an array
// ? based on a specified separator.

// * What is Array.from() used for with strings?
// ? Array.from() converts a string into an array
// ? where each character becomes a separate element.

// * Can strings be iterated in JavaScript?
// ? Yes, strings are iterable and can be looped
// ? through using loops like for...of.

// * Are strings mutable in JavaScript?
// ? No, strings are immutable. Once created,
// ? their characters cannot be changed directly.



// ! INTERVIEW QUESTION TOPIC - MATH IN JAVASCRIPT

// * What is Math in JavaScript?
// ? Math is a built-in JavaScript object that provides
// ? mathematical constants and functions.

// * Does Math work with BigInt?
// ? No, Math methods work only with the Number data type.

// * What is Math.PI?
// ? Math.PI is a mathematical constant representing
// ? the value of Pi (π), approximately 3.14159.

// * What does Math.abs() do?
// ? Math.abs() returns the absolute (positive) value of a number.

// * What is the purpose of Math.round()?
// ? Math.round() rounds a number to the nearest integer.

// * How does Math.round() work?
// ? If the decimal part is 0.5 or greater, it rounds up.
// ? Otherwise, it rounds down.

// * What does Math.floor() do?
// ? Math.floor() always rounds a number down
// ? to the nearest integer.

// * What does Math.ceil() do?
// ? Math.ceil() always rounds a number up
// ? to the nearest integer.

// * What is the difference between Math.round(), Math.floor(), and Math.ceil()?
// ? Math.round() rounds to the nearest integer.
// ? Math.floor() always rounds down.
// ? Math.ceil() always rounds up.

// * What does Math.trunc() do?
// ? Math.trunc() removes the decimal part of a number
// ? and returns only the integer portion.

// * What is the difference between Math.floor() and Math.trunc()?
// ? Math.floor() rounds down,
// ? while Math.trunc() simply removes the decimal part.

// * What does Math.pow() do?
// ? Math.pow(base, exponent) returns the value
// ? of a number raised to a given power.

// * What does Math.sqrt() do?
// ? Math.sqrt() returns the square root of a number.

// * What does Math.log() do?
// ? Math.log() returns the natural logarithm (base e)
// ? of a number.

// * What does Math.random() do?
// ? Math.random() generates a random number
// ? between 0 (inclusive) and 1 (exclusive).

// * How can you generate a random number between 1 and 100?
// ? By using:
// ? Math.floor(Math.random() * 100) + 1

// * Which Math method is commonly used in games and OTP generation?
// ? Math.random() is commonly used for generating
// ? random values in games, passwords, and OTPs.

// * Can Math methods modify the original value?
// ? No, Math methods return a new value
// ? and do not modify the original variable.

// * Which Math method is used to find the square root of a number?
// ? Math.sqrt()

// * Which Math method is used to remove decimal values without rounding?
// ? Math.trunc()

// * Which Math method always returns a positive number?
// ? Math.abs()

// * What is the value range of Math.random()?
// ? It returns a value greater than or equal to 0
// ? and less than 1.



// ! INTERVIEW QUESTION TOPIC - EVENTS IN JAVASCRIPT

// * What is an event in JavaScript?
// ? An event is an action or occurrence in the browser such as click, key press, scroll, load, etc.
// ? JavaScript detects these events and allows us to run code in response.

// * What is event handling in JavaScript?
// ? Event handling is the process of writing code that runs when a specific event occurs,
// ? like clicking a button or submitting a form.

// * What is the difference between onclick and addEventListener?
// ? onclick can assign only one handler and can be overwritten.
// ? addEventListener can add multiple handlers and provides more control and flexibility.

// * What are mouse events?
// ? Mouse events are triggered by mouse actions like clicking, hovering, moving, or releasing.
// ? Examples: click, dblclick, mouseover, mouseout, mousemove, mousedown, mouseup.

// * What are keyboard events?
// ? Keyboard events occur when a user interacts with the keyboard.
// ? Examples: keydown, keyup, keypress (deprecated).

// * What are form events?
// ? Form events are triggered when users interact with form elements.
// ? Examples: submit, reset, input, change, focus, blur, invalid.

// * What is event bubbling?
// ? Event bubbling is a process where an event starts from the target element
// ? and moves upward to its parent elements in the DOM tree.

// * What is event capturing?
// ? Event capturing is the opposite of bubbling where the event starts from the parent
// ? and moves down to the target element.

// * Difference between event bubbling and capturing?
// ? Bubbling: child → parent (default behavior)
// ? Capturing: parent → child

// * What does event.preventDefault() do?
// ? It prevents the default browser behavior like form submission or link navigation.

// * What does event.stopPropagation() do?
// ? It stops the event from bubbling up to parent elements.

// * What is event delegation?
// ? Event delegation is a technique where a parent element handles events for its child elements
// ? using event bubbling instead of adding listeners to each child individually.

// * Why is event delegation useful?
// ? It improves performance, reduces memory usage, and works for dynamically added elements.

// * Difference between onchange and oninput?
// ? oninput triggers instantly when the value changes.
// ? onchange triggers after the input loses focus.

// * What is the event loop?
// ? The event loop is a mechanism in JavaScript that handles asynchronous tasks
// ? like callbacks, promises, and events in a non-blocking way.

// * What is debouncing?
// ? Debouncing ensures that a function runs only after the user stops triggering an event
// ? for a specific time (useful in search inputs).

// * What is throttling?
// ? Throttling ensures a function runs at fixed intervals
// ? even if the event keeps firing continuously (like scroll events).

// * What does 'this' refer to in event handlers?
// ? In event handlers, 'this' refers to the element that triggered the event.

// * Best practices for handling events?
// ? Always use addEventListener instead of inline events.
// ? Remove unused event listeners to avoid memory leaks.
// ? Use event delegation for dynamic elements.
// ? Optimize scroll and resize event performance.



//! ==========================================================
//! LOCAL STORAGE + JSON INTERVIEW QUESTIONS
//! ==========================================================

//? Q1: What is Local Storage in JavaScript?
// * Local Storage is a browser storage mechanism that stores
// * data as key-value pairs and persists even after the browser
// * is closed and reopened.

// ----------------------------------------------------------

//? Q2: What is the storage limit of Local Storage?
// * Approximately 5MB to 10MB depending on the browser.

// ----------------------------------------------------------

//? Q3: What data type does Local Storage store?
// * Local Storage stores data only as strings.

// ----------------------------------------------------------

//? Q4: Why do we use JSON.stringify()?
// * To convert JavaScript objects or arrays into a string
// * before storing them in Local Storage.

// Example:
const user = { name: "Ali", age: 22 };
localStorage.setItem("user", JSON.stringify(user));

// ----------------------------------------------------------

//? Q5: Why do we use JSON.parse()?
// * To convert a JSON string back into a JavaScript object
// * or array.

// Example:
const userData = JSON.parse(localStorage.getItem("user"));

// ----------------------------------------------------------

//? Q6: Difference between Local Storage and Session Storage?

// * Local Storage
// - Data persists after browser closes.
// - Shared across tabs of the same origin.

// * Session Storage
// - Data removed when tab closes.
// - Available only in the current tab.

// ----------------------------------------------------------

//? Q7: Difference between Cookies and Local Storage?

// * Cookies
// - Sent to the server with every request.
// - Small storage (~4KB).
// - Can have expiration dates.

// * Local Storage
// - Not sent to the server.
// - Larger storage (~5MB+).
// - Persists until manually removed.

// ----------------------------------------------------------

//? Q8: How do you add data to Local Storage?

localStorage.setItem("name", "Ahmed");

// ----------------------------------------------------------

//? Q9: How do you retrieve data from Local Storage?

localStorage.getItem("name");

// ----------------------------------------------------------

//? Q10: How do you remove a specific item?

localStorage.removeItem("name");

// ----------------------------------------------------------

//? Q11: How do you remove all Local Storage data?

localStorage.clear();

// ----------------------------------------------------------

//? Q12: How can you check the number of stored items?

localStorage.length;

// ----------------------------------------------------------

//? Q13: How can you get a key by index?

localStorage.key(0);

// ----------------------------------------------------------

//? Q14: Can Local Storage store objects directly?
// * No.
// * Objects must first be converted into JSON strings using
// * JSON.stringify().

// ----------------------------------------------------------

//? Q15: Is Local Storage secure?
// * No.
// * Data can be viewed and modified by the user through
// * browser DevTools.
// * Never store passwords, tokens, or sensitive information.

// ----------------------------------------------------------

//? Q16: Is Local Storage synchronous or asynchronous?
// * Synchronous.
// * It blocks the main thread while reading/writing data.

// ----------------------------------------------------------

//? Q17: Does Local Storage expire automatically?
// * No.
// * Data remains until manually deleted by the user or code.

// ----------------------------------------------------------

//? Q18: Can Local Storage be accessed on the server side?
// * No.
// * It is only available in the browser environment.

// ----------------------------------------------------------

//? Q19: How do you update an existing Local Storage value?

localStorage.setItem("name", "Ali");
localStorage.setItem("name", "Ahmed"); // Updated

// ----------------------------------------------------------

//? Q20: How do you store an array in Local Storage?

const fruits = ["Apple", "Mango", "Banana"];

localStorage.setItem("fruits", JSON.stringify(fruits));

// ----------------------------------------------------------

//? Q21: How do you retrieve an array from Local Storage?

const fruitsData = JSON.parse(
  localStorage.getItem("fruits")
);

// ----------------------------------------------------------

//? Q22: What happens if a key does not exist?

localStorage.getItem("unknownKey");

// Output:
// null

// ----------------------------------------------------------

//? Q23: How can you check if a key exists?

if (localStorage.getItem("user")) {
  console.log("Exists");
} else {
  console.log("Not Found");
}

// ----------------------------------------------------------

//? Q24: Can Local Storage be shared across tabs?
// * Yes.
// * All tabs of the same origin can access the same
// * Local Storage data.

// ----------------------------------------------------------

//? Q25: What is the Storage Event?
// * It fires when Local Storage changes in another tab.

// Example:
window.addEventListener("storage", (event) => {
  console.log(event.key);
  console.log(event.newValue);
});

// ----------------------------------------------------------

//? Q26: What is JSON?
// * JSON (JavaScript Object Notation) is a lightweight
// * data-interchange format used for storing and exchanging data.

// ----------------------------------------------------------

//? Q27: What are the two most important JSON methods?

// * JSON.stringify()
// JS Object/Array → JSON String

// * JSON.parse()
// JSON String → JS Object/Array

// ----------------------------------------------------------

//? Q28: What is the difference between JSON and JavaScript Object?

// * JSON Keys must be in double quotes.
// * JSON is a string format.
// * JavaScript Objects can contain functions.
// * JSON cannot contain functions.

// ----------------------------------------------------------

//? Q29: What is the output?

JSON.stringify({ name: "Ali" });

// Output:
// '{"name":"Ali"}'

// ----------------------------------------------------------

//? Q30: What is the output?

JSON.parse('{"name":"Ali"}');

// Output:
// { name: "Ali" }