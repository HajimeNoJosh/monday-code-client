const config = require('../config.js')

const countryGet = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + formData.location.city + ',' + formData.location.country + '&appid=' + '14e5521311c5926d6d16648103cab43b'
  })
}

module.exports = {
  countryGet
}
