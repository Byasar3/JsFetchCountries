console.log("HI!");

const getCountryByName = async (countryName) => {
    // the initial fetch to the website, save as variable 'response'
    const response = await fetch (`https://restcountries.com/v3.1/name/${countryName}`);
    // console.log(response);
    // the promise made to get the json and save it to variable jsonData
    const jsonData = await response.json();
    // console.log(jsonData);

    // making a container, which will be kept in a div
    // container will contain the name info of the country
    const nameContainer = document.createElement("div"); 
    
    jsonData.forEach(country => {
    const nameContent = document.createElement("p");
    nameContent.textContent = country.name.common;
    console.log(nameContent);

    nameContainer.appendChild(nameContent);
    
    console.log(nameContainer);
    document.querySelector("body").appendChild(nameContainer);
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
    
    