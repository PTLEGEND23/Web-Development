async function getWeather(cityname) {
    weatherDetail.textContent = "";
    let apiKey = "b8c474a581740059ca7a306aaaf0e25f";
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`);
    let data = await response.json();

    let newrow = document.createElement("div");
    newrow.className = "weather-result-display";

    let icon = document.createElement("img");
    let iconimg = data.weather[0].icon;
    icon.className = "icon";
    icon.src = `https://openweathermap.org/img/wn/${iconimg}@2x.png`;
    newrow.appendChild(icon);

    let temp = document.createElement("p");
    temp.className = "temperature";
    temp.textContent = `${data.main.temp}°C`;
    newrow.appendChild(temp);

    let weatherreport = document.createElement("p");
    weatherreport.className = "weatherreport"
    weatherreport.textContent = data.weather[0].main;
    newrow.appendChild(weatherreport);

    let humidityBox = document.createElement("div");
    humidityBox.className = "humidity-box";
    let humidityLabel = document.createElement("p");
    humidityLabel.className = "stat-label";
    humidityLabel.textContent = "Humidity";
    let humidityValue = document.createElement("p");
    humidityValue.className = "stat-value";
    humidityValue.textContent = `${data.main.humidity}%`;
    humidityBox.appendChild(humidityLabel);
    humidityBox.appendChild(humidityValue);
    newrow.appendChild(humidityBox);

    let windBox = document.createElement("div");
    windBox.className = "windspeed-box";
    let windLabel = document.createElement("p");
    windLabel.className = "stat-label";
    windLabel.textContent = "Wind Speed";
    let windValue = document.createElement("p");
    windValue.className = "stat-value";
    windValue.textContent = `${(data.wind.speed * 3.6).toFixed(1)}km/hr`;
    windBox.appendChild(windLabel);
    windBox.appendChild(windValue);
    newrow.appendChild(windBox);

    weatherDetail.appendChild(newrow);
}

const loc = document.getElementById("inputlocation");
const button = document.getElementById("button");
const weatherDetail = document.querySelector(".weather-result")
button.addEventListener("click", function () {
    getWeather(loc.value);
});
