fetch(
  "http://api.openweathermap.org/data/2.5/weather?id=524894&appid=a0fb94b0d7c92e8daf50412ba400376c"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".degres").innerHTML =
      Math.round(data.main.temp - 273) + "&deg";
    document.querySelector(".cloud").textContent =
      data.weather[0]["description"];
    document.querySelector(
      ".icon"
    ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
  })
  .catch(function () {});
// https://openweathermap.org/img/wn/04d@2x.png
