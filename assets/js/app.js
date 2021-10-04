
// function to make api call
document.querySelector("#btn").onclick = function(){
    // create a variable to hold search input
     var searchTerm = document.querySelector('#formGroupInput').value;
    console.log(searchTerm);
    // apiKey variable
    var apiKey = "5734b5b7710f970d3694f1685905df64";
    // fetch weather info on city
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}`)
    .then(function(response) {
        return response.json();
      })
      .then(function(resJSON){
         var latitude = resJSON.coord.lat;
         var longitude = resJSON.coord.lon;
         // console.log(latitude);
         // console.log(longitude);
          return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
      })
      .then(function(response) {
          return response.json();
      })
      .then(function(resJSON) {
                // get current temp, wind, uv, and humidity
        var temp = resJSON.current.temp;
        var wind = resJSON.current.wind_speed;
        var humidity = resJSON.current.humidity;
        var uvi = resJSON.current.uvi;
        var icon = resJSON.current.weather[0].icon;
        // console.log(temp);
        // console.log(wind);
        // console.log(humidity);
        // console.log(uvi);
        console.log(resJSON);


        // get 5 day weather forecast
        var temp1 = resJSON.daily[1].temp.max;
        var wind1 = resJSON.daily[1].wind_speed;
        var humidity1 = resJSON.daily[1].humidity;
        var temp2 = resJSON.daily[2].temp.max;
        var wind2 = resJSON.daily[2].wind_speed;
        var humidity2 = resJSON.daily[2].humidity;
        var temp3 = resJSON.daily[3].temp.max;
        var wind3 = resJSON.daily[3].wind_speed;
        var humidity3 = resJSON.daily[3].humidity;
        var temp4 = resJSON.daily[4].temp.max;
        var wind4 = resJSON.daily[4].wind_speed;
        var humidity4 = resJSON.daily[4].humidity;
        var temp5 = resJSON.daily[5].temp.max;
        var wind5 = resJSON.daily[5].wind_speed;
        var humidity5 = resJSON.daily[5].humidity;
   
        // Render current weather info to page
        document.querySelector(".city").innerHTML = searchTerm;
        document.querySelector(".temperature").innerHTML = "Temperature:  " + temp;
        document.querySelector(".humidity").innerHTML = "Humidity:  " + humidity;
        document.querySelector(".windSpeed").innerHTML = "Wind Speed:  " + wind;
        document.querySelector(".uvIndex").innerHTML = "UV Index:  " + uvi;
        // get and render icon
        var iconEl = document.querySelector(".icon");
        iconEl.append(`<img src="http://openweathermap.org/img/wn/10d@2x.png">`);

        // get and render current date
        var cityEl = document.querySelector(".city");
        var now = moment().format("MMM Do YY");
        cityEl.append("    " + now);
        //console.log(now);


        // render 5 day forecast
        var dayOne = moment().add(1, 'days').format("MMM Do YY");
        document.querySelector("#date").innerHTML = dayOne;
        document.querySelector("#temp-1").innerHTML = temp1;
        document.querySelector("#wind-1").innerHTML = "Wind Speed: " + wind1;
        document.querySelector("#hum-1").innerHTML = "Humidity: " + humidity1;
        var dayTwo = moment().add(2, 'days').format("MMM Do YY");
        document.querySelector("#date-2").innerHTML = dayTwo;
        document.querySelector("#temp-2").innerHTML = temp2;
        document.querySelector("#wind-2").innerHTML = "Wind Speed: " + wind2;
        document.querySelector("#hum-2").innerHTML = "Humidity: " + humidity2;
        var dayThree = moment().add(3, 'days').format("MMM Do YY");
        document.querySelector("#date-3").innerHTML = dayThree;
        document.querySelector("#temp-3").innerHTML = temp3;
        document.querySelector("#wind-3").innerHTML = "Wind Speed: " + wind3;
        document.querySelector("#hum-3").innerHTML = "Humidity: " + humidity3;
        var dayFour = moment().add(4, 'days').format("MMM Do YY");
        document.querySelector("#date-4").innerHTML = dayFour;
        document.querySelector("#temp-4").innerHTML = temp4;
        document.querySelector("#wind-4").innerHTML = "Wind Speed: " + wind4;
        document.querySelector("#hum-4").innerHTML = "Humidity: " + humidity4;
        var dayFive = moment().add(5, 'days').format("MMM Do YY");
        document.querySelector("#date-5").innerHTML = dayFive;
        document.querySelector("#temp-5").innerHTML = temp5;
        document.querySelector("#wind-5").innerHTML = "Wind Speed: " + wind5;
        document.querySelector("#hum-5").innerHTML = "Humidity: " + humidity5;

      })

}
