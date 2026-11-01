//chapter 02 ; operater and conditional statement

//comment in js
//this is single line comment mean line written after // is comment
/* this is multi line comment
mean we can write comment in multiple line
like this */

//operater in js
//1. arithmatic operater
//2. assignment operater
//3. comparison operater
//4. logical operater

//1. arithmatic operater
// +, -, *, /, %, ++, --

console.log("arithmatic operater");
let a = 10;
let b = 5;
console.log("a = " + a);
console.log("b = " + b);
console.log("a+b = " + (a + b)); // addition
console.log("a-b = " + (a - b)); // subtraction
console.log("a*b = " + (a * b)); // multiplication
console.log("a/b = " + (a / b)); // division
console.log("a%b = " + (a % b)); // modulus
console.log("a++ = " + (a++)); // increment
console.log("b-- = " + (b--)); // decrement

//2. assignment operater
// =, +=, -=, *=, /=, %=

console.log("assignment operater");
let c = 10;
let d = 5;
console.log("c = " + c);
console.log("d = " + d);
console.log("c += d = " + (c += d));
console.log("c -= d = " + (c -= d));
console.log("c *= d = " + (c *= d));
console.log("c /= d = " + (c /= d));
console.log("c %= d = " + (c %= d));

//3. comparison operater
// ==, ===, !=, !==, >, <, >=, <=

console.log("comparison operater");
let e = 10;
let f = "10";
console.log("e = " + e);
console.log("f = " + f);
console.log("e == f = " + (e == f));
console.log("e === f = " + (e === f));
console.log("e != f = " + (e != f));
console.log("e !== f = " + (e !== f));
console.log("e > f = " + (e > f));
console.log("e < f = " + (e < f));
console.log("e >= f = " + (e >= f));
console.log("e <= f = " + (e <= f));
let g = 5;
let h = 10;
console.log("g = " + g);
console.log("h = " + h);
console.log("g == h = " + (g == h));
console.log("g === h = " + (g === h));
console.log("g != h = " + (g != h));
console.log("g !== h = " + (g !== h));
console.log("g > h = " + (g > h));
console.log("g < h = " + (g < h));
console.log("g >= h = " + (g >= h));
console.log("g <= h = " + (g <= h));

//4. logical operater
// && = and, || = or, ! = not 

console.log("logical operater");
let i = "shuaibrai";
let j = 999.065;
console.log("i = " + i);
console.log("j = " + j);
console.log("i === 'shuaibrai' && j > 100 = " + (i === "shuaibrai" && j > 100));
console.log("i === 'shuaibrai' || j > 100 = " + (i === "shuaibrai" || j > 100));
console.log("!(i === 'shuaibrai') = " + !(i === "shuaibrai"));

//## conditional statement
//1. if statement ; used for checking a condition and executing a block of code if the given condition is true
//2. if else statement ; used for checking a condition and executing a block of code if the given condition is true and executing another block of code if the given condition is false   
//3. if else if statement ; used for checking multiple conditions
//4. switch statement ; used for checking a value against multiple cases

//if statement

console.log("# if statement");
let color = "red";
if (color === "red") {
    console.log("the color is red");
}
//example 2
let mode1 = "dark";
let color1;
if (mode1 === "light") {
    color1 = "white";
}
if (mode1 === "dark") {
    color1 = "black";
}
console.log("the color is " + color1);

//2. if else statement

console.log("# if else statement");
let age = 18;
if (age >= 18) {
    console.log("you are eligible to vote");
} else {
    console.log("you are not eligible to vote");
}
//example 2
let number = 10;
if (number % 2 === 0) {
    console.log("the number is even");
} else {
    console.log("the number is odd");
}

//3. if else if statement;also called ladder if statement 

console.log("# if else if statement");
let marks = 85;
if (marks >= 90) {
    console.log("you got an A grade");
} else if (marks >= 80) {
    console.log("you got a B grade");
} else {
    console.log("you need to work harder");
}

//example 3
let mode2 = "light";
let color2;
if(mode2==="light"){
    color2="white";
} else if(mode2==="dark"){
    color2="black";
} else{
    color2="pink";
}
console.log("the color is " + color2);

//4. switch statement
let mode3 = "unknown";
let color3;
switch (mode3) {
    case "light":
        color3 = "white";
        break;
    case "dark":
        color3 = "black";
        break;
    default:
        color3 = "pink";
}
console.log("the color is " + color3);

//Questions and answers
// Get user to input a no. using prompt("enter a number") and check if the number is even or odd using if else statement
let number1 = prompt("enter a number");
if (number1 % 2 === 0) {
    console.log("the number is even");
} else {
    console.log("the number is odd");
}

//Q  NO. 02 ; Get user to input a no. using prompt("enter a number") check waatherthe is multiple of five or not using if else statement
let number2 = prompt("enter a number");
if (number2 % 5 === 0) {
    console.log("the number is a multiple of five");
} else {
    console.log("the number is not a multiple of five");
}

//this is the end of class 02 js revision with this chapter is terminated next will start with loop and string 