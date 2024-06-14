let cityName = document.querySelector(".weather-city");
let dateTime = document.querySelector(".weather-date--time");
let w_forecast = document.querySelector(".weather-forecast");
let w_temp = document.querySelector(".weather-temp");
let w_icon = document.querySelector(".weather-icon");
let w_min = document.querySelector(".weather-min");
let w_max = document.querySelector(".weather-max"); // Ensure this matches the class name in HTML
let feelslike=document.querySelector(".weather_feelslike");
let winnd=document.querySelector(".wind");
let humid=document.querySelector(".humidity");
let gauge=document.querySelector(".gauge");

async function getweatherData() {
    let weatherapi = `https://api.openweathermap.org/data/2.5/weather?q=fatehpur&appid=e1a86adba8d9b718c9889e28b9748f25`;
    try {
        let res = await fetch(weatherapi, {
            headers: {
                Accept: "application/json",
            }                                       //here no need of header
        });
        let data = await res.json();
      console.log(data);

        let {main,name,weather,wind,sys,dt}=data;
        const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
        let fullname=regionNamesInEnglish.of(sys.country);
        cityName.innerText=`${name},${fullname}`;
        let datee=new Date();
        dateTime.innerText=datee;
        w_forecast.innerText=weather[0].main;
        w_min.innerText=`Min:${(main.temp_min-273).toFixed(1)}°C`;
        w_max.innerText=`Max:${(main.temp_max-273).toFixed(1)}°C`;
        w_temp.innerText=`${(main.temp-273).toFixed(1)}°C`;
        feelslike.innerText=`${(main.feels_like-273).toFixed(1)}°C` ;
        humid.innerText=`${main.humidity}%`;
        winnd.innerText=`speed:${wind.speed}`;
        //gauge.innerText=
    } catch (e) {
        console.log(e);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    getweatherData();
});
