//chapter 05 : Document object model
//intro:
console.log("dom manupulation topics :")
//DOM stands for document object model 

//#accessing hthml tags --

//1. selecting with id:
let dev=document.getElementById("divid");
console.dir(dev);
console.log(dev);

//2. selecting with class:
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);

//3. selecting with tag:
let para = document.getElementsByTagName("p");
console.log(para);

//4. query  selector:return first element
let element = document.querySelector("p");//first element
console.dir(element);
let allel =document.querySelectorAll("p");//all element
console.dir(allel);

//DOM manupulation:
//1.properties:
let div = document.querySelector("div");
console.dir(div);
//QNO.1: create a h3 heading elementy with text "hellojavascript" append from apna college student"to this text using js.

let h3 = document.getElementsByTagName("h3");

console.dir(h3.innertext);

h3.innertext = h3.innertext + "from apna college student" ; //sring concatanation


//QNO.02: cerate 3 div with comman class name "box"access them and add some unique text toof them 
let divs = document.getElementById("box");
console.log(divs);
let idx=1;
for(div of divs){
    div.innerText = "new unique"
}

//dom______chapter__________ terminates______________ here next__________- is js 