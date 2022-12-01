// Types Primitevs

// NOTATION
// 1. Type ->  VARIABLE: TYPE
// 2  INFERENCE ->  VARIABLE = VALUE

// Boolean
let isDone: boolean = false;
let isPending = true;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';

// Types Complex

// Array -> 1. TYPE[] 2. Array<type>
let list: number[] = [1, 2, 3];
let names = ["John", "Doe", "Smith"];

let hobbies: Array<string> = ["Cooking", "Sports"];

// Tuple
let x: [string, number];
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
// x = ["hello", 10, "world"]; // Error

// Enum
// const portrait = 0;
// const landscape = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
  Landscape = 'Landscape',
  Portrait = 'Portrait',
  Square = 'Square',
  Panorama = 'Panorama',
}

let landscape: PhotoOrientation = PhotoOrientation.Landscape

enum Roles {
  Admin = 'admin',
  User = 'user',
  Guest = 'guest',
}

console.log(Roles.Admin)

// Any
let idUser: any;
idUser = 1; // number
idUser = "1"; // string
idUser = true; // boolean
idUser = null
idUser = undefined

idUser.toString();

// Unknown
let notSure: unknown = 4;
if (notSure) {
  notSure.toString();
}

let notArray: unknown = [1, 2, 3, 4, 5];
if (typeof notSure === 'number') {
  notSure.toString();
}

if (notArray instanceof Array) {
  notArray.push(1)
}


// Void
function showInfo(): void {
  console.log('Hello World');
}

// Null and Undefined
let nullVariable: null;
nullVariable = null;

let undefinedVariable: undefined;
undefinedVariable = undefined;

// Union Types
let colorUser: string | null ;
colorUser = "red";
colorUser = null;

let widhtScreen: 100 | 200 | 500 = 500;
let breakpoint: 'xs' | 'sm' | 'md' | 'lg' = 'xs';

breakpoint =  'lg'

//  Functions

// 1. Return type
function add(a: number, b?: number): number {
  if (b) {
    return a + b;
  }
  return a;
}

add(1, 2);
add(3, 1)
add(1)

function sayHello(name?: number): string {
  return `Hello ${name}`;
}

sayHello()

// 2. Function type
let addFunction: (a: number, b: number) => number;

addFunction = (a: number, b: number) => a + b;

// 3. Interface













