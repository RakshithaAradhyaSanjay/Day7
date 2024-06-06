// Fetch the data from the API
fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    // Filter the data by the region property
    let asianCountries = data.filter((country) => country.region === "Asia");
    // Display the result
    console.log(asianCountries);

    // Display "Happy Independence Day"

  var text = document.getElementById("text");
  text.innerHTML = asianCountries;

  });
  

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const flagsContainer = document.getElementById('flags');
    data.forEach(country => {
      const img = document.createElement('img');
      img.src = country.flags.png;
      img.alt = 'Flag of ' + country.name.common;
      flagsContainer.appendChild(img);
    });
  })
  .catch(error => console.error('Error:', error));