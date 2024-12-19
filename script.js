const apiKey = "98dc91b0e2b08035ef33bc9871a3e15f";
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

const city=document.querySelector("#place"); 
const temp=document.querySelector("#temp");
const h=document.querySelector(".humidity");
const wind=document.querySelector(".ds");
const searchbox =document.querySelector(".bar");
const searchmedium =document.querySelector("#search");
const image=document.querySelector(".weather-icon");
const display=document.querySelector("#dis");

async function checkWeather(ci){
    const response = await fetch(URL + encodeURIComponent(ci));

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".dis").style.display ="none";
        document.querySelector(".container").style.height ="30vh";
    }
    else{
        display.style.display="block";
        document.querySelector(".error").style.display ="none";
        var data = await response.json();

        console.log(data);

        city.innerText = data.name;
        temp.innerText = `${(data.main.temp)}°c`;
        h.innerText = `${data.main.humidity} %`;
        wind.innerText = `${data.wind.speed} km/h`;

        if(data.weather[0].main == "Clouds"){
            image.src = "Clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            image.src="Clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            image.src="Drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            image.src="Mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            image.src="Snow.png";
        }
    }
    
    

}
searchmedium.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
