const API_KEAY =`74ae282a545d1784df6058fa10ff7c82`
const searchTemperature = () =>{
    const city = document.getElementById("city-name").value
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city}&lon={lon}&appid={API_KEAY}`
    console.log(url)
}