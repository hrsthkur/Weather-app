const inputBox = document.querySelector(".input-box")
const searchBtn = document.querySelector("#search-btn")
const weatherImage = document.querySelector(".weather-image")
const temperature = document.querySelector(".temperature")
const discription = document.querySelector(".discription")
const humidity = document.querySelector("#humidity")
const windSpeed = document.querySelector("#wind-speed")

//const data = fetch https:api.openweathermap.org/data/2.5/weather?q={city name}&appid={46f5c8e3b1cb95c3d088679386c5586f}

try {
    
} catch (error) {
    
}
  const checkWeather = async(city) => {
    const apiKey = "46f5c8e3b1cb95c3d088679386c5586f"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const weatherData = await fetch( `${url}`).then( response => response.json());

    if(weatherData.cod === '404') {
      document.querySelector(".weather-body").style.display = "none"
        document.querySelector(".location-not-found").style.display = "flex"
        return;
    } 
    else {
         document.querySelector(".weather-body").style.display = "flex"
        document.querySelector(".location-not-found").style.display = "none"
    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
    console.log(weatherData);
    humidity.innerHTML = `${weatherData.main.humidity}`
    windSpeed.innerHTML = `${weatherData.wind.speed} Km/h`
    discription.innerHTML = `${weatherData.weather[0].description}`
    switch (weatherData.weather[0].main) {
        case 'Clouds':
            weatherImage.src = "assets/cloud.png"
            break;
        
        case 'Mist':
            weatherImage.src = "assets/mist.png"
            break;
        
        case 'Clear':
            weatherImage.src = "assets/clear.png"
            break;
        
        case 'Snow':
            weatherImage.src = "assets/snow.png"
            break;
        case 'Rain':
            weatherImage.src = "assets/rain.png"
            break;
        
       
    }
    
}

  }

  searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
  })
