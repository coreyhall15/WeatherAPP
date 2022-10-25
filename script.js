alert('Welcome to my Weather App');

//Constants and variables
//
//const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

// add click handler
document.getElementById("Forecast").addEventListener("click", getData);

function getData() {
    console.log("Forecast clicked");
    let zipcode = document.getElementById("zipcode").value
    console.log("zipcode is " + zipcode)
    getWeather(zipcode)
}

function getWeather(zip) { //setting up AjAX call to get the weather
    console.log("zip is " + zip)

    let endpoint = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = "&appid=805a487833e2494000752bf1c716dfe0"
    let url = endpoint + "?zip=" + zip + '&units=imperial' + API_KEY;
    console.log("url is " + url)


let xhr = new XMLHttpRequest()
xhr.addEventListener("load", responseHandler)
xhr.responseType = "json"
xhr.open("GET", url)
xhr.send() // send data

function responseHandler(){ // data is recieved
    if (this.status == 200) { // check to see if data was recieved

    console.log(this.response);
    const data = this.response
    console.log("city is " + data.name)
    console.log("temp is " + data.main.temp)
    console.log("description is " + data.weather[0].description) 
    let html = "<p>City: " + data.name + "</p>"
    html += "<p>Current temp: " + data.main.temp + "</p>"
    html += "<p>Description: " + data.weather[0].description + "</p>"
    
    
    document.getElementById("weatherInfo").innerHTML = html
    {
    }
    
    }
}
}
