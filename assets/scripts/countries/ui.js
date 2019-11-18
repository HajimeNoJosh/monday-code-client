
const onSuccess = function (data) {
  $('.location-fill').html(data.name + ',' + data.sys.country)
  $('.temperature-fill').html(Math.floor(data.main.temp * 9 / 5 - 459.67))
  $('.humidity-fill').html(data.main.humidity)
  $('.conditions-fill').html(data.weather[0].main)
}

const onFailure = function () {

}

module.exports = {
  onSuccess,
  onFailure
}
