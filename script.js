fetch(
  "http://api.openweathermap.org/data/2.5/weather?id=703448&appid=a0fb94b0d7c92e8daf50412ba400376c"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function () {});
