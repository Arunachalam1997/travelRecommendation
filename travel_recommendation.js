const searchButton = document.getElementById('btnSearch');
const clearbtn = document.getElementById('btnClear');
const resultsDiv = document.getElementById('results');


function clearInput(){
     document.getElementById('searchInput').value = '';
}

function searchResult(){
    const searchInput = document.getElementById('searchInput').value;
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        const results = data.countries.find(item => item.name == searchInput )
 
        if(results){
            const countryName = results.name;
            const cityName = results.cities.name
            console.log(cityName);
            console.log(countryName);
        } else {
            alert('This country doesnt have Travel Recommendation');
        }
    })
}
searchButton.addEventListener('click', searchResult);
clearbtn.addEventListener('click', clearInput);
