//CHAPTER 06:EVENT IN JAVASCRIPT 
//syntax: node.event()=>{
    //handle here;
//}

let btn1 = document.querySelector("#btn1");

btn1.onclick=()=>{
    console.log("btn was clicked");
    let a = 25;
    a++;
    console.log(a);//25
}

let btn2 = document.querySelector("#btn2");

btn2.onclick=(evt)=>{
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.click);
    console.log(evt.clientX,evt.clientY);
    console.log("btn was clicked");
    let b = 25;
    b++;
    console.log(b);//25
}

let div =document.querySelector("div");

div.onmouseover = (evt) => {
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.click);
    console.log(evt.clientX,evt.clientY);
    console.log("btn was clicked");

    console.log("you are in div");
}

//event listener:
 
btn3.addEventListener("click",(evt) =>{
    console.log("button was clicked");
    console.log(evt);
    console.log(evt,type);
});
//Qno.1: create a toggle button to charge the screen to dark mode when  clicked and to light mode when clicked again!
//soln:
let btn = document.querySelector("#mode");

let currentMode = "light";

btn.addEventListener("click", () => {
    if (currentMode === "light") {
        document.body.classList.add("dark");
        currentMode = "dark";
        btn.innerText = "Light Mode";
    } else {
        document.body.classList.remove("dark");
        currentMode = "light";
        btn.innerText = "Dark Mode";
    }
});