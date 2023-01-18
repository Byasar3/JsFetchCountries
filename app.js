console.log("HI!");

const getCountryByName = async () => {
    const response = await fetch (`https://restcountries.com/v3.1/name/peru`);
    // console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);
    // const info = document.querySelector('div');
    // console.log(jsonData.message); 
    
}

const button = document.querySelector("button");

button.addEventListener("click", getCountryByName);