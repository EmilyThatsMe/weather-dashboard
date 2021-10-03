
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
          console.log(latitude);
          console.log(longitude);
          return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
      })
      .then(function(response) {
          return response.json();
      })
      .then(function(resJSON) {
          console.log(resJSON);
      })

}

// latitude and longitude are .coord, .name = name, temp is .main.temp, humidity is .main.humidity