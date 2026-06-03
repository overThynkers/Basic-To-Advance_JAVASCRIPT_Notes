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