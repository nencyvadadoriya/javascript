const searchButton = document.querySelector('.search-box button');
const cityInput = document.querySelector('.search-box input');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

searchButton.addEventListener('click', function() {
  const city = cityInput.value;
  if (!city) return;

  const APIKey = '98740f4ebc0d63bc0f8ba70090e5a091';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => {
      if (!response.ok) throw new Error('City not found!');
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0];
      const main = data.main;
      const wind = data.wind;

      const weatherIcons = {
        Clear: 'images/sun.png',
        Rain: 'images/rain.png',
        Snow: 'images/snow.png',
        Clouds: 'images/clouds.png',
        Mist: 'images/mist.png',
        Haze: 'images/mist.png'
      };

      document.querySelector('.weather-box img').src = weatherIcons[weather.main] || 'images/f-2.png';
      document.querySelector('.weather-box .name').textContent = data.name;
      document.querySelector('.weather-box .temperature').innerHTML = `${Math.round(main.temp)}<span>°C</span>`;
      document.querySelector('.weather-box .description').textContent = weather.description;
      document.querySelector('.weather-details .humidity span').textContent = `${main.humidity}%`;
      document.querySelector('.weather-details .wind span').textContent = `${wind.speed} km/h`;

      weatherBox.style.display = 'block';
      weatherDetails.style.display = 'flex';
    })
    .catch(error => {
      console.error(error);
      alert(error.message);
    });
});
