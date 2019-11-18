'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCountryGet = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.countryGet(formData)
    .then(ui.onSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onCountryGet
}
