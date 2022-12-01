"use strict";
// Types Primitevs
Object.defineProperty(exports, "__esModule", { value: true });
// NOTATION
// 1. Type ->  VARIABLE: TYPE
// 2  INFERENCE ->  VARIABLE = VALUE
// Boolean
let isDone = false;
let isPending = true;
// Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// String
let color = "blue";
color = 'red';
// Types Complex
// Array -> 1. TYPE[] 2. Array<type>
let list = [1, 2, 3];
let names = ["John", "Doe", "Smith"];
let hobbies = ["Cooking", "Sports"];
// Tuple
let x;
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
// x = ["hello", 10, "world"]; // Error
// Enum
// const portrait = 0;
// const landscape = 1;
// const square = 2;
// const panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation["Landscape"] = "Landscape";
    PhotoOrientation["Portrait"] = "Portrait";
    PhotoOrientation["Square"] = "Square";
    PhotoOrientation["Panorama"] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
let landscape = PhotoOrientation.Landscape;
var Roles;
(function (Roles) {
    Roles["Admin"] = "admin";
    Roles["User"] = "user";
    Roles["Guest"] = "guest";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
// Any
let idUser;
idUser = 1; // number
idUser = "1"; // string
idUser = true; // boolean
idUser = null;
idUser = undefined;
idUser.toString();
// Unknown
let notSure = 4;
if (notSure) {
    notSure.toString();
}
let notArray = [1, 2, 3, 4, 5];
if (typeof notSure === 'number') {
    notSure.toString();
}
if (notArray instanceof Array) {
    notArray.push(1);
}
// Void
function showInfo() {
    console.log('Hello World');
}
// Null and Undefined
let nullVariable;
nullVariable = null;
let undefinedVariable;
undefinedVariable = undefined;
// Union Types
let colorUser;
colorUser = "red";
colorUser = null;
let widhtScreen = 500;
let breakpoint = 'xs';
breakpoint = 'lg';
//  Functions
// 1. Return type
function add(a, b) {
    if (b) {
        return a + b;
    }
    return a;
}
add(1, 2);
add(3, 1);
add(1);
function sayHello(name) {
    return `Hello ${name}`;
}
sayHello();
// 2. Function type
let addFunction;
addFunction = (a, b) => a + b;
// 3. Interface
