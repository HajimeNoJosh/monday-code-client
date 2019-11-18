'use strict'

let apiUrl
const apiUrls = {
  production: 'https://api.openweathermap.org/data/2.5/weather?q=',
  development: 'https://api.openweathermap.org/data/2.5/weather?q='
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
