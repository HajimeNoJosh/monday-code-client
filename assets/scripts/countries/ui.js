const onSuccess = function (data) {
  $('.location-fill').html(data.name + ', ' + data.sys.country)
  $('.temperature-fill').html(Math.floor(data.main.temp * 9 / 5 - 459.67) + '° F')
  $('.humidity-fill').html(data.main.humidity + '%')
  $('.conditions-fill').html(data.weather[0].main)
  $('.form-field').val('')
  $('.message').show().text('Showing Country').css('color', '#024b30').hide(2000)
  $('.focus').focus()
}

const onFailure = function () {
  $('.message').show().text('Could not find country').css('color', 'red').hide(2000)
}

module.exports = {
  onSuccess,
  onFailure
}
