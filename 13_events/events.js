//! ==========================================================
//! EVENTS IN JAVASCRIPT 
//! ==========================================================
// ? An event in JavaScript is an action or occurrence (such as a click, key press, or page load) that JavaScript can detect and respond to.

//* ==========================================================
//* MOUSE EVENTS 
//* ==========================================================
//? onclick: The user clicks on an element.
//? oncontextmenu: The user right-clicks on an element.
//? ondblclick: The user double-clicks on an element.
//? onmousedown: A mouse button is pressed over an element.
//? onmouseenter: The pointer is moved onto an element.
//? onmouseleave: The pointer is moving over an element.
//? onmousemove: The pointer is moving over an element.
//? onmouseout: The mouse pointer moves out of an element.
//? onmouseover: The mouse button is releasrd over an element.
//? onmouseup: The mouse button is released over an element.
document.getElementById("eventBtn1").addEventListener("click", () => {
    alert("Hello");
});
document.getElementById("eventBtn2").addEventListener("mouseenter", () => {
    alert("Hello");
});