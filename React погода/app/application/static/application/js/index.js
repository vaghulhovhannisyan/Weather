const apiKey = 'ТОКЕН';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const input = document.querySelector('input');
const button = document.querySelector('button');
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();             
    document.querySelector('.temperature').innerHTML= Math.round(data.main.temp) + '°С';
    document.querySelector('.wind-text').innerHTML= data.wind.speed + 'м/с';
    document.querySelector('.water-text').innerHTML= data.main.humidity + '%';
}
button.addEventListener('click', () => {
    checkWeather(input.value)
})