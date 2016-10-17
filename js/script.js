'use strict';

/* JavaScript will go here */

console.log("Hello world!");


// JavaScript
function sayHello(name){
    return "Hello, "+name;
}

var msg = sayHello("Joel");
console.log(msg);


// Function Practice
var circle = {cx:50, cy:50, radius:35};
function getArea(circle) {
    return (Math.PI*circle.radius*circle.radius);
}
console.log(getArea(circle));