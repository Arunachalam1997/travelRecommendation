const searchButton = document.getElementById('btnSearch');
const clearbtn = document.getElementById('btnClear');
const resultsDiv = document.getElementById('results');
const timeZoneDiv = document.getElementById('time-zone');


function clearInput(){
     document.getElementById('searchInput').value = '';
     resultsDiv.innerHTML = "";
}

function searchResult(){
    const searchInput = document.getElementById('searchInput').value;
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        const countries = data.countries.find(country => country.name.toLowerCase() == searchInput.toLowerCase());
 
        if(results){
            resultsDiv.innerHTML = "";
            const countryName = countries.name;
            countries.cities.map(city => {
                resultsDiv.innerHTML = `
                <div class= "main-result">
                <h1>${countryName}</h1>
                                       <h2>City name: ${city.name}</h2>
                                       <img src=${city.imageUrl}/>
                                   <p>About City: ${city.description}</p> </div>`
            });
        } else {
            resultsDiv.innerHTML= alert('This country doesnt have any Travel Recommendation');
        }
    })
    .catch(error =>{
        console.error('Error fetching data:', error);
        resultsDiv.innerHTML = '<p>Failed to fetch travel recommendations. Please try again later.</p>';
    })
}

// const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
// const newYorkTime = new Date().toLocaleTimeString('en-US', options);
// console.log("Current time in New York:", newYorkTime);
// timeZoneDiv.innerHTML = `<h1>${newYorkTime}</h1>`;
{/* <p>Weather: ${data.weather[0].description} */}
const city = "New Delhi"
const apiKey = 'fa4b4c7ab0a885ee54250eadec6780c4';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    const weatherInfo = document.getElementById('weather')
    weatherInfo.innerHTML = `<h2>${data.name}<h2>
    <p>${data.main.temp} &#8451;</p>
    `
})

searchButton.addEventListener('click', searchResult);
clearbtn.addEventListener('click', clearInput);


function validatingForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var condition = document.getElementById('condition').value;
    var message = document.getElementById('message').value;

    if(name == '' && email == '' && condition == '' && message == ''){
        alert('Please fill out all fields');
    }
}



