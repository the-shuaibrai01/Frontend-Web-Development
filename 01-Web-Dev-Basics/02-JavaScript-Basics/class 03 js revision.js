// This is a simple JavaScript revision class 03 and we are starting with new chapter 
//chapter 03 ; loops and strings 

//loop are used to repeat a block of code multiple times until a certain condition is met
//1. for loop ; used for iterating a block of code a certain number of times
//2. while loop ; used for iterating a block of code while a certain condition is true
//3. do while loop ; used for iterating a block of code at least once and then repeating the block of code while a certain condition is true

//1. for loop
console.log("for loop");
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

///sum of n no.
let n = parseInt(prompt("Enter a number: "));
let sum = 0;
for (let i = 0; i < n; i++) {
    sum += i;
}
console.log("Sum: " + sum);
console.log("for loop ended");

//2 . while loop
console.log("while loop");
/* syntax of while loop
while(condition){
    //block of code to be executed
}
*/
//example of while loop
let a = 100;
while (a<=200){
    console.log("the value of a is : " + a);
    a++;
}
console.log("while loop ended");

//3 . do while loop
console.log("do while loop");
let b = 50;
do {
    console.log("the value of b is : " + b);
    b++;
}while (b <= 60);
console.log("do while loop ended");

//quesation and answer
//Q NO.1; creat a for loop to print the first 10 natural numbers
//soln;
console.log("first 10 natural numbers");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("for loop ended");
//Q NO.2; print all even number btwn 0 to 100_  (IMP)
//soln;
console.log("even numbers between 0 to 100");
let num =0;
let c = 0;
for (let c = 0; c<=100;  c++){
    num += 1;
    if (num%2==0){
        console.log(num + "this is even no.")
    }

}
console.log("loop is ended here :")

///Q NO.3; print all odd number btwn 0 to 100_
//soln;
console.log("odd numbers between 0 to 100");
let num1 =0;
let d = 0;
for (let d = 0; d<=100;  d++){
    num1 += 1;
    if (num1%2!=0){
        console.log(num1 + "this is odd no.")
    }   
}
console.log("loop is ended here :")

//STRINGS
//A string is a sequence of characters used to represent text. In JavaScript, strings are enclosed in single quotes (' '), double quotes (" "), or backticks (` `).
//1. String concatenation ; used to combine two or more strings into one string
//2. String length ; used to find the length of a string
//3. String methods ; used to perform various operations on strings such as changing case, finding substrings, etc.

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3); // Output: Hello World

let str4 = "JavaScript";
console.log(str4.length); // Output: 10
let str5 = "Hello World";
console.log(str5.toUpperCase()); // Output: HELLO WORLD
console.log(str5.toLowerCase()); // Output: hello world
console.log(str5.includes("World")); // Output: true
console.log(str5.indexOf("o")); // Output: 4
let str6 = "i am shuaibrai";
console.log(str6.split(" ")); // Output: ["i", "am", "shuaibrai"]
console.log(str6.trim()); // Output: "i am shuaibrai"
console.log(str6.slice(0, 5)); // Output: "i am "
console.log(str6.replace("shuaibrai", "shuaib")); // Output: "i am shuaib"
console.log(str6.charAt(6)); // Output: "s"

//Q NO.4; creat a string and find its length
//soln;
let str7 = "Hello World";
console.log("The length of the string is: " + str7.length);

//Q NO.5; creat a string and convert it to uppercase
//soln;
let str8 = "hello world";
console.log("The string in uppercase is: " + str8.toUpperCase());

///Q NO.6; creat a string and check if it contains a certain substring
//soln;
let str9 = "Hello World";
let substring = "World";
console.log("Does the string contain the substring? " + str9.includes(substring));

//topic loops and strings is completed here now we are going to learn about array and functions 
//_____THIS CLASS______________ENDED________________HERE____________________SEE YOU IN NEXT CLASS____________________