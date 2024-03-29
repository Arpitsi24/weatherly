class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "Mumbai";
  }
  populateUI(dataCurrent) {
    //de-structure vars

    //add them to inner HTML

    this.uiContainer.innerHTML = `
      <div id="down" class="card">
        <div class="flex">
          <img src="http://openweathermap.org/img/wn/${dataCurrent.weather[0].icon}@2x.png" class="img">
          <div class="cityname">${dataCurrent.name}</div>
        </div>
        <div class="maintemp">${dataCurrent.main.temp} <span style="font-size:25px;">&#8451; ${dataCurrent.weather[0].description}</span></div>
        <div class=""></div>

        <div style="overflow-x: auto;">
          <table>
            <tr>
              <td>Feels like</td>
              <td>Pressure</td>
            </tr>
            <tr>
              <td>${dataCurrent.main.feels_like} <span>&#8451;</span></td>
              <td>${dataCurrent.main.pressure} hPa</td>
            </tr>
            <tr><td><p></p></td><td></td></tr><tr><td><p></p></td><td></td></tr>
            <tr>
              <td>Humidity</td>
              <td>Visibility</td>
            </tr>
            <tr>
              <td>${dataCurrent.main.humidity} %</td>
              <td>${dataCurrent.visibility} m</td>
            </tr>
            <tr><td><p></p></td><td></td></tr><tr><td><p></p></td><td></td></tr>
            <tr>
              <td>Wind speed</td>
              <td>Cloud cover</td>
            </tr>
            <tr>
              <td>${dataCurrent.wind.speed} m / s</td>
              <td>${dataCurrent.clouds.all} %</td>
            </tr>
            <tr><td><p></p></td><td></td></tr><tr><td><p></p></td><td></td></tr>
            <tr>
              <td>Minimum temperature</td>
              <td>Maximum temperature</td>
            </tr>
            <tr>
              <td>${dataCurrent.main.temp_min}<span>&#8451;</span></td>
              <td>${dataCurrent.main.temp_max}<span>&#8451;</span></td>
            </tr>

          </table>
        </div>
        <div style="padding:25px;"></div>
      </div>
        `;
  }

  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(dataCurrent) {
    localStorage.setItem("city", JSON.stringify(dataCurrent));
  }

  getFromLS() {
    if (localStorage.getItem("city" == null)) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
