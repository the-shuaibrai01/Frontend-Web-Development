//chapter 04 ; array and functions

//array in java script ;

//array is a data structure that can hold multiple values of different data types. It is used to store a collection of data in a single variable. Arrays are zero-indexed, meaning the first element is at index 0, the second element is at index 1, and so on.
//1. Array creation ; used to create an array
//2. Array length ; used to find the length of an array
//3. Array methods ; used to perform various operations on arrays such as adding, removing, sorting, etc.

//1. Array creation
console.log("Array creation");
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1); // Output: [1, 2, 3, 4, 5]
let heroes = ["Superman", "Batman", "ironman", "spiderman"];
console.log(heroes); // Output: ["Superman", "Batman", "ironman", "spiderman"]
let marks = [90, 80, 70, 60, 50];
console.log(marks); // Output: [90, 80, 70, 60, 50]
let info = ["shuaibrai", 25, "delhi"];
console.log(info); // Output: ["shuaibrai", 25, "delhi"]

//array indices
console.log("Array indices");
console.log(heroes[0]); // Output: "Superman"
console.log(heroes[1]); // Output: "Batman"
console.log(heroes[2]); // Output: "ironman"
console.log(heroes[3]); // Output: "spiderman"

//looping over an array
console.log("Looping over an array");
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

//2. Array length
console.log("Array length");
console.log(heroes.length); // Output: 4
console.log(marks.length); // Output: 5
console.log(info.length); // Output: 3

//3. Array methods
console.log("Array methods");
//push method ; used to add an element at the end of an array
heroes.push("hulk");
console.log(heroes); // Output: ["Superman", "Batman", "ironman", "spiderman", "hulk"]
//pop method ; used to remove the last element of an array
heroes.pop();
console.log(heroes); // Output: ["Superman", "Batman", "ironman", "spiderman"]
//shift method ; used to remove the first element of an array
heroes.shift();
console.log(heroes); // Output: ["Batman", "ironman", "spiderman"]
//unshift method ; used to add an element at the beginning of an array
heroes.unshift("superman");
console.log(heroes); // Output: ["superman", "Batman", "ironman", "spiderman"]
//indexOf method ; used to find the index of an element in an array
console.log(heroes.indexOf("ironman")); // Output: 2
//includes method ; used to check if an element is present in an array
console.log(heroes.includes("hulk")); // Output: false
//sort method ; used to sort the elements of an array
marks.sort();
console.log(marks); // Output: [50, 60, 70, 80, 90]
//reverse method ; used to reverse the order of the elements in an array
marks.reverse();
console.log(marks); // Output: [90, 80, 70, 60, 50]
//slice method ; used to extract a portion of an array
let newMarks = marks.slice(1, 4);
console.log(newMarks); // Output: [80, 70, 60]
//splice method ; used to add or remove elements from an array
marks.splice(2, 1, 75);
console.log(marks); // Output: [90, 80, 75, 60, 50]
//splice method to remove elements
marks.splice(3, 1);
console.log(marks); // Output: [90, 80, 75, 50]
//concat method ; used to merge two or more arrays
let arr2 = [6, 7, 8, 9, 10];
let mergedArray = marks.concat(arr2);
console.log(mergedArray); // Output: [90, 80, 75, 50, 6, 7, 8, 9, 10]

//Quesation and answer 
//QNO.1; creat an array to store companies booloomberg microshoft amazon uber google ibm netflix 
//(a). remove first company from array 
//(b). remove uber add ola 
//(c). add amazon at the end 
//soln;(a).
let companies =["bloomberg","microsoft","google","uber","ibm","netflix"]
console.log(companies);
companies.shift();//sift used to remove first company
console.log(companies);
//(b).
companies.splice(2,1);
companies.splice(2,0,"ola");
console.log(companies);
//(c).
companies.push("amazon");
console.log(companies);

//QNO.2; creat an array to store 10 numbers and sort them in ascending order
//soln;
let numbers = [10, 5, 8, 3, 6, 2, 9, 1, 4, 7];
console.log("Original array: " + numbers);
numbers.sort(function(a, b){return a-b});
console.log("Sorted array in ascending order: " + numbers);
//QNO.3; creat an array to store 10 numbers and sort them in descending order
//soln;
let numbers1 = [10, 5, 8, 3, 6, 2, 9, 1, 4, 7];
console.log("Original array: " + numbers1);
numbers1.sort(function(a, b){return b-a});
console.log("Sorted array in descending order: " + numbers1);

//functions in java script ;
//A function is a block of code that can be called and executed multiple times. Functions are used to perform a specific task and can take input parameters and return output values.
//1. Function declaration ; used to declare a function
//2. Function expression ; used to create a function and assign it to a variable
//3. Arrow function ; used to create a function using the arrow syntax
//4. Function parameters ; used to pass input values to a function

//syntax of function declaration;

//function functionName(parameters) {
    //block of code to be executed
//}
console.log("function declaration");
function shuaibrai(){
    console.log("i am shuaibrai");
    console.log("i am shuaibrai");
    console.log("welcome to java script");
    console.log("this is a simple function");
    console.log("we are learning about functions in java script");
    
}
shuaibrai();//function call

function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log("Sum: " + sum);
}
addNumbers(5, 10); // Output: Sum: 15

//question and answer
//QNO.4; creat a function to find the sum of two numbers
//soln;
function sumOfTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log("Sum: " + sum);
}
sumOfTwoNumbers(10, 20); // Output: Sum: 30
//Q NO. 5;create a function that take string as an arguement and return the no.of vowels in the string
//soln 
function countVowels(str) {
    let str= present(prompt("enter your string"));
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count++;
        }
    }
    console.log("no. of vowel are: " + count);
}
countVowels("hello world"); // Output: no. of vowel are: 3 
//Q NO. 6; create a function that take an array of numbers as an arguement and return the largest number in the array
//soln
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
let numbers = [10, 5, 8, 3, 6, 2, 9, 1, 4, 7];
console.log("Largest number: " + findLargestNumber(numbers)); // Output: Largest number: 10


//____________this chapter___________terminates here_________in next we will________start with_________dom manipulation and events in java script____
//__________thank you _______by_________the shuaibrai_________see you in_________next class_______________________byyyyyeeeeeee______________________