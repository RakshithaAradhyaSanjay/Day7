// Fetch the data from the API
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Filter the data by the region property
    let asianCountries = data.filter((country) => country.region === "Asia");

    asianCountries.forEach(country => {
      
        var text = document.getElementById("text");
        text.innerHTML += country.name.common + " , ";      
       
      });
    // Display the result
    console.log(asianCountries);
    
  });
