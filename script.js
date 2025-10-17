const API_KEY = '10d3d52a59d8e8e1c7c2ab4914678613'; 
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if(city) {
    getWeather(city);
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    if(!response.ok) throw new Error('City not found');
    const data = await response.json();

    // DOM updates
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Weather: ${data.weather[0].description}`;

    weatherResult.classList.remove('hidden');
  } catch (error) {
    alert(error.message);
    weatherResult.classList.add('hidden');
  }
}
