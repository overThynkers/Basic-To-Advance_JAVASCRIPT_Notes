//! Variables & Values

//* What is Variables?
//? A variable is a container (box) used to store data values in memory.
//? It allows us to store, update, and reuse data in a program.
//todo Example - var myName = "World"; 
//todo var = keyword, myName = variable name, "World" = value;

//* Types Of Variables 

//? var
//? var is the oldest way to declare a variable in JavaScript.
//? It has function scope and can be re-declared and updated.
//? It is less preferred in modern JavaScript because it can cause scope issues.

//? let
//? let is a modern way to declare variables introduced in ES6.
//? It has block scope and can be updated but cannot be re-declared in the same scope.
//? It is commonly used when the value of a variable may change.

//? const
//? const is also introduced in ES6.
//? It has block scope and cannot be re-declared or updated.
//? It is used for constant values that should not change.


//* What is Value?
//? A value is the actual data stored inside a variable.
//? It can be different types like string, number, boolean, etc.
//? Values are what we assign to variables and work with in a program.
//todo Example - "World", 25, true, false, 3.14

//* Naming Variables: Rules and best practices 
//? Variables names must start with a letter, an underscore(_) or a dollar sign ($)
//? Variable names cannot contain spaces.
//? By convenion, JavaScript variable names are written in camelCase.
//? Variables cannot be the same as reserved keywords such as if or const.
//? Variables names are case sensitive.
//? Variable names can be as long as you need.

var myAge = 18;
console.log(myAge);

//! Quize 
//* Valid✔ or Invalid❌

//? var my_firstName = "John"; Valid ✅
//? var _myLastName$ = "Doe"; Valid ✅
//? var 123myAge = 25; Invalid ❌
//? var $cityName = "New York"; Valid ✅
//? var my@Email = "info@overThynkers.com" Invalid ❌




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