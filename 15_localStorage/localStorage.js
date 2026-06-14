//! ==========================================================
//! LOCAL STORAGE + JSON IN JAVASCRIPT
//! ==========================================================

//? Local Storage in JavaScript is a web browser feature that allows
//? developers to store data in the user's browser as key–value pairs.
//? The data remains available even after the browser is closed and
//? reopened, unless it is manually removed.

// ==========================================================
// LOCAL STORAGE METHODS
// ==========================================================

// * How to add data in localStorage.
window.localStorage.setItem("JSNotesTest", "AddingData");

// * How to get data from localStorage.
window.localStorage.getItem("JSNotesTest");

// * How to remove a specific item from localStorage.
window.localStorage.removeItem("JSNotesTest");

// * How to remove all data from localStorage.
window.localStorage.clear();

// * How to get key by index.
window.localStorage.key(0);

// * How to check total stored items.
window.localStorage.length;

// ==========================================================
// JSON METHODS
// ==========================================================

//? LocalStorage can only store strings.
//? To store arrays or objects, convert them into JSON strings.

// * JSON.stringify()
//? Converts a JavaScript object or array into a JSON string.

const data = ["a", "b", "c", "d", "e"];
const jsonString = JSON.stringify(data);

console.log(jsonString);
// Output: '["a","b","c","d","e"]'

// ==========================================================

// * JSON.parse()
//? Converts a JSON string back into a JavaScript object or array.

const originalData = JSON.parse(jsonString);

console.log(originalData);
// Output: ["a", "b", "c", "d", "e"]

// ==========================================================
// STORING ARRAY IN LOCAL STORAGE
// ==========================================================

const fruits = ["Apple", "Banana", "Mango"];

// Convert array into JSON string
localStorage.setItem("fruits", JSON.stringify(fruits));

// Retrieve and convert back into array
const getFruits = JSON.parse(localStorage.getItem("fruits"));

console.log(getFruits);

// ==========================================================
// STORING OBJECT IN LOCAL STORAGE
// ==========================================================

const user = {
  id: 1,
  name: "Ali",
  age: 22,
};

// Store object
localStorage.setItem("userData", JSON.stringify(user));

// Retrieve object
const getUser = JSON.parse(localStorage.getItem("userData"));

console.log(getUser);

// ==========================================================
// SESSION STORAGE
// ==========================================================

//? Similar to localStorage.
//? Data is removed when the browser tab is closed.

// * Add data
sessionStorage.setItem("name", "Ahmed");

// * Get data
sessionStorage.getItem("name");

// * Remove specific item
sessionStorage.removeItem("name");

// * Clear all data
sessionStorage.clear();

// ==========================================================
// USEFUL EXAMPLES
// ==========================================================

// * Check if data exists
if (localStorage.getItem("userData")) {
  console.log("Data Found");
} else {
  console.log("No Data Found");
}

// * Update existing data
const person = {
  name: "Ali",
};

localStorage.setItem("person", JSON.stringify(person));

person.name = "Ahmed";

localStorage.setItem("person", JSON.stringify(person));

// ==========================================================
// COMMON INTERVIEW QUESTIONS
// ==========================================================

//? Difference Between LocalStorage and SessionStorage

// * LocalStorage
// - Data persists even after browser restart.
// - Storage limit approximately 5-10 MB.

// * SessionStorage
// - Data removed when tab/window closes.
// - Storage limit approximately 5 MB.

// ==========================================================
// IMPORTANT JSON METHODS
// ==========================================================

// * JSON.stringify()
// Converts JS Object/Array -> JSON String

// * JSON.parse()
// Converts JSON String -> JS Object/Array


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