// =========================
// JS Class 08
// Synchronous & Asynchronous JavaScript
// =========================

// Synchronous Example
console.log("one");

setTimeout(() => {
    console.log("hello");
}, 1000);

console.log("three");
console.log("four");

// =========================
// Callback Functions
// =========================

function sum(a, b) {
    console.log(a + b);
}

function calculate(a, b, sumCallback) {
    sumCallback(a, b);
}

calculate(5, 10, sum);

// =========================
// Callback Hell
// =========================

function getData(dataId, getNextDataCallback) {
    setTimeout(() => {
        console.log("data", dataId);

        if (getNextDataCallback) {
            getNextDataCallback();
        }
    }, 2000);
}

getData(1, () => {
    console.log("Getting Data 2...");
    getData(2, () => {
        console.log("Getting Data 3...");
        getData(3, () => {
            console.log("Getting Data 4...");
            getData(4, () => {
                console.log("Getting Data 5...");
                getData(5, () => {
                    console.log("All Data Retrieved!");
                });
            });
        });
    });
});

// =========================
// Promises
// =========================

let myPromise = new Promise((resolve, reject) => {
    console.log("I am a Promise");
    resolve("Success");
    // reject("Error");
});

myPromise.then((res) => {
    console.log(res);
});

myPromise.catch((err) => {
    console.log(err);
});

//=========================
//async-await
//=========================
async function getalldata(){
    console.log("getting data 1....");
    await getData(1);
    console.log("getting data 2....");
    await getData(2);
    console.log("getting data 3....");
    await getData(3);
    console.log("getting data 4....");
    await getData(4);
    console.log("getting data 5....");
    await getData(5);
    console.log("getting data 6....");
    await getData(6);
}

// =========================
// Promise Function
// =========================

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        resolve("Success");
        // reject("Something went wrong");
    });
};

let result = getPromise();

result.then((res) => {
    console.log("Promise Fulfilled:", res);
});

result.catch((err) => {
    console.log("Promise Rejected:", err);
});

// =========================
// Promise Chaining
// =========================

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

console.log("Fetching Data 1...");

asyncFunc1()
    .then((res) => {
        console.log(res);
        console.log("Fetching Data 2...");
        return asyncFunc2();
    })
    .then((res) => {
        console.log(res);
        console.log("All Data Retrieved Successfully!");
    })
    .catch((err) => {
        console.log(err);
    });

    //this chapter terminates here next is fetch api see next..........