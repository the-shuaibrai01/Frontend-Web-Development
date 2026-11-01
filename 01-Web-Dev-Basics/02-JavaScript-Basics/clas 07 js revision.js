//before this class we had already completed two mini projects named as Rock Paper Scissors and Tic Tac Toe. In this class we will be learning about the following topics
//class and  objects in js

//chapter 07 : class and objects in js

//1.prototype : we can set a protype using --proto-- 

//Ex:
const employee = {
    calctax1() {
        console.log("tax is 10%");
    }
};

const karanArjun = {
    salary () {
        console.log("salary is 100000");
    }
}

karanArjun.__proto__ = employee;
//2. class : we can create a class using the keyword class

//Ex: 
class toyotacar {

    constructor(brand,mileage,price) {
        console.log("NEW  toyota car created");
        this.brand = brand;
        this.mileage = mileage;
        this.price = price;
    }   
    start() {
        console.log("toyota car started");
    }
    stop() {
        console.log("toyota car stopped");
    }

}

let fortuner = new toyotacar("fortuner", 20, 3000000); 
let lexus = new toyotacar("lexus", 15, 5000000);

//inheritance : we can create a child class using the keyword extends

//Ex:
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log("eating...");
    }
}
class student extends person {
    constructor(name, age, rollno) {
        super(name, age);
        this.rollno = rollno;
    }
} 

//Qno.1; you are creating a website for your college create class user with properties name and email .it also has a mothod called view data that allow user to view web data.
let Data = new user("karan", "karan@example.com");                  
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("viewing web data...", this.name, this.email);
    }
}