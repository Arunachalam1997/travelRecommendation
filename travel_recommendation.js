const searchButton = document.getElementById('btnSearch');
const clearbtn = document.getElementById('btnClear');
const resultsDiv = document.getElementById('results');
const timeZoneDiv = document.getElementById('time-zone');


function clearInput(){
     document.getElementById('searchInput').value = '';
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
                resultsDiv.innerHTML = `<h1>${countryName}</h1>
                                       <h2>City name: ${city.name}</h2>
                                       <img src=${city.imageUrl}/>
                                   <p>About City: ${city.description}</p>`
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


searchButton.addEventListener('click', searchResult);
clearbtn.addEventListener('click', clearInput);
