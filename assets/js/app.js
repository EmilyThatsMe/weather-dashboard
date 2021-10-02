
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
          const cityWeather = resJSON.main;
          console.log(cityWeather);
      })
      // select div container where info will be displayed
      var responseContainerEl = document.querySelector ("#city--container");

      var humidity = resJSON.main.humidity;
      var temp = resJSON.main.temp;

      responseContainerEl.appendChild(humidity);
      responseContainerEl.appendChild(temp);

}

