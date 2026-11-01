//js class 09:topic API calls 

//==============
//fetch APIs
//==============
const URL = "https://catfact.ninja/fact";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    try {
        factPara.innerText = "Loading...";

        const response = await fetch(URL);

        const data = await response.json();

        console.log(data);

        factPara.innerText = data.fact;
    }
    catch (error) {
        console.log(error);
        factPara.innerText = "Failed to fetch cat fact!";
    }
};

btn.addEventListener("click", getFacts);