const API_KEAY =`74ae282a545d1784df6058fa10ff7c82`
const searchTemperature = () =>{
    const city = document.getElementById("city-name").value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEAY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
    
}
const setInnerText = (id,text) =>{
    document.getElementById(id).innerText=text
}

const displayTemperature = (temperatur) =>{
    setInnerText('city',temperatur.name)
    // setInnerText('temperature',temperatur.main.temp)
    setInnerText('cloude',temperatur.weather[0].main)
    // set weather icon
    const url =` http://openweathermap.org/img/wn/${temperatur.weather[0].icon}@2x.png` 

    const Imgicon = document.getElementById("weather-icon")
    Imgicon.setAttribute('src',url)
    console.log(temperatur)
}