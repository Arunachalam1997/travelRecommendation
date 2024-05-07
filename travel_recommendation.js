const searchButton = document.getElementById('btnSearch');

function searchResult(){
    const searchInput = document.getElementById('searchInput').value;
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        const results = data.countries.find(item => item.name == searchInput )

        if(results){
            
        }
    })
}
searchResult();
searchButton.addEventListener('click', searchResult);
