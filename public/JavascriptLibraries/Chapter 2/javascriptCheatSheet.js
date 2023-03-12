// A js file to practice firsthand javascript. <This is a short comment.>
/* PUBLISHER: Alex Johnson
DATE: March 12, 2023 (21st birthday yay!)

Follows Chapter 2 of Javascript: Novice to Ninja, titled Programming Basics.
<This block of comments is a longer comment.>
*/

//Think of this file as a basic coding guide, a cheat sheet.

/*STARTING AND ENDING A NODE PROGRAM--------------------------
A node program can be started in the git bash terminal.
'node' Begins a new node program.
'.exit' Ends an executing node program.
Ctrl + C is acceptable.
*/

//VARIABLE TYPES----------------------------------------------
//Use 'typeof' to determine a variable type, either enter a variable or an assignment value.

typeof 'Hi' //string
typeof 10 //number
typeof true //boolean
typeof {ninja: 'turtle'} //object
typeof [1, 2, 3] //object

//DECLARING AND REFERENCING VARIABLES-------------------------
//To reference a variable, simply type its name onto the node program.

const name = 'Alex' //Declare variable 'name' to assign it to the string 'Alex'
//When referring to name, 'Alex' will now be used.
//'const' means that this variable is immutable: it cannot be changed again.
//'const', however, does NOT make OBJECTS immutable, although you cannot reassign a new object to the variable.
const not_constant = {value: 'Alex'}
not_constant.value = 'Zach' //not_constant will change to 'Zach'

let score = 0; //Declare a variable score and assign it the value number 0
//Variables declared using 'let' can be changed.
score = 5; //Change score value to 5

let x = 3, y = 4, z = 5; //Multiple variable declaration using commas

/*TROUBLESHOOTING
If a variable hasn't been declared, an Uncaught ReferenceError will occur.
If a variable has been declared but no value assigned, it will have an undefined value.
*/

/*SCOPES------------------------------------------------------
Declaring a variable using const creates a local variable.
Declaring a variable with let or nothing creates a global variable.
Local variables are unique to their local scope.
Global variables can be seen in every local scope and the global scope.
*/

//Local Scopes and local variables
const a = 1;

{const a = 3; a;} //Brackets define a new local scope.
//This will output 3.
a;
//This will output 1. The a in the brackets is a different local variable.

//Global variables
let b = 2;

{b = 4; b;} //b here is a global variable.
//This will output 4.
b;
//This will also output 4 since b was changed in the scope.

/*VARIABLE NAMING CONVENTIONS
1: Variables should be given sensible names.
The name should tell you the general purpose of said variable.
"coder" tells you its a user who codes, but "a" doesn't tell you anything useful.

2: There are two notations that can be used for multi-word variables:
camelCase: theFoxRuns
under_score: the_fox_runs
For Javascript, it is probably best to stick to the conventional camelCase.
*/

//DIRECT ASSIGNMENT VS ASSIGNMENT BY REFERENCE----------------------
//Primitive variables: References are not binding.
const c = 1;
let d = c; // c = 1, d = 1
d = 2; // c = 1, d = 2

//Objects: References are binding.
//This is since the variables share the same object.
const e = {value: 1};
let f = e; // e.value = 1, f.value = 1
f.value = 2; // e.value = 2, f.value = 2

//STRINGS-------------------------------------------------------
//Literal creation
let g = 'hello';

//Constructor creation
g = new String("hello");

/*Special characters can appear, such as an apostrophe (')
'It's me' will cause an error
Two solutions:
"It's me"
'It/'s me'

Backslash can be used to enter special characters that would otherwise be unenterable.
\' single quote
\" double quote
\n end of a line
\t tab
\\ backslash actually written
*/

/*String properties
For primitive variables, you can use the dot notation.
Properties of primitive variables are immutable.
Strings have many methods which can be operated on them, such as name.isUpperCase();
*/

/*Template literals can be used as another way to make strings
They can include line breaks and other variables in them
Example: `Hi my name is ${name}!`;
*/

/*Symbols can be used to create unique values.
const uniqueID = Symbol('This is a unique ID')
Code above creates a symbol uniqueID
Symbol.for() can be used to have multiple variables share the same symbol.
*/

/*NUMBERS----------------------------------------------------
Can be integers or floating point decimals (1 vs 1.23)
You can also use binary, octal, and Hexadecimal notation (0b1010 vs 0o47 vs 0xAF)
Exponential notation can also be used (2e6 is 2 * 10^6)
Numbers have many methods which can be operated on them, such as number.toExponential();
Arithmetic operations can be ran on numbers.
This includes addition (+), subtraction (-), multiplication (*), division (/), exponents (**), and remainder (%)
The biggest number that can be handled in Javascript is 1.797691348623157e308.
NaN is short for "Not a number". Attempting to do operations on non-numbers will result in NaN.
*/

/*CONVERT BETWEEN NUMBERS AND STRINGS------------------------
Number('23') converts the string "23" into a number
Number('hello') cannot be converted into a number, so NaN is returned.
10..toString(); converts 10 into a string
*/

/*BOOLEANS---------------------------------------------------
Can either be true or false
"", '', ``, 0, -0, NaN, false, null, undefined
The values above are always false, these are falsy values.
Everything else is true by default but can be changed to false.
Logical operators can be used here
NOT (!): Negates boolean
DOUBLE NOT (!!): Uno Reverse Card
AND (&&): Both things must be true to return true
OR (||): Either thing can be true to return true
EQUALS (==): checks if two things have the same boolean/value.
HARD EQUALS (===): In addition to above, the two things must have the same type.
INEQUALITY (!=): Checks if two things don't have the same boolean/value.
Other operators: >, <, >=, <=
You can stack multiple operators in the same expression.
*/