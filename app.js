console.log("HI!");

const getCountryByName = async (countryName) => {
    // the initial fetch to the website, save as variable 'response'
    const response = await fetch (`https://restcountries.com/v3.1/name/${countryName}`);
    // console.log(response);
    // the promise made to get the json and save it to variable jsonData
    const jsonData = await response.json();
    console.log(jsonData);

    // making a container, which will be kept in a div
    // container will contain the name info of the country
    const infoContainer = document.createElement("div"); 
    
    jsonData.forEach(country => {
    const content = document.createElement("p");
    content.textContent = "Official name of country: "+ country.name.nativeName.tur.official + 
    " Population of country: " + country.population;
    console.log(content);

    infoContainer.appendChild(content);
    
    console.log(infoContainer);
    document.querySelector("body").appendChild(infoContainer);
    });


}

getCountryByName("turkey")






    // // going to make a loop thats goes through the array and adds each element into the container
    // jsonData.message.forEach((informationUrl) => {
    //     const information = document.createElement("li");
    //     console.log(information);
    //     information = informationUrl;
    //     infoContainer.appendChild(information);
    // })
    
    