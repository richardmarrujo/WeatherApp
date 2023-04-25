// API key from OpenWeatherMap
const apiKey = '36a16febe705a4b066543efcc2405e05';

// Function to get the weather data from OpenWeatherMap API
function checkWeather(city) {
    //
    var zipcode = document.getElementById("zip").value

    // API URL
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip='+zipcode+',us&appid='+apiKey+'&units=imperial'
    
    // Fetch data from API
    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Display weather data
            var city = data.name;
            var state = data.state;
            var country = data.sys.country;
            var temp = Math.round(data.main.temp);
            var condition = data.weather[0].main;
            weatherResult.innerHTML = 'The temp is' + ' ' + temp + ' °F in ' + city + ' , ' + country;
            weatherConditions.innerHTML = 'The skies are looking ' + condition + ' in ' + city
        })
        .catch(error => {
            // Display error message
            console.log('Error:', error);
        });
    
}
