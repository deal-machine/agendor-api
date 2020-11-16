'use strict'

const { url, config } = require('../../http/api')

module.exports = class Information {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  //list all categories in account
  async getCategories() {
    try {
      const { data } = await this._httpClient.get(`${url}/categories`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  //List all available address states.
  async getStates() {
    try {
      const { data } = await this._httpClient.get(`${url}/states`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  //List all cities in a state.
  async getCities(state) {
    try {

      const newState = this.setUpperCaseState(state)

      const states = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]

      const correctState = states.filter(item => {
        return item == newState
      })

      if (correctState.length === 0) {
        throw new Error(`${newState} not exists.`)
      }
      else {
        const { data } = await this._httpClient.get(`${url}/states/${correctState}/cities`, config)
        return data
      }
    }
    catch (err) {
      console.error({ "Error": err.message })
    }

  }

  //List all deal stages in account
  async getDealStages() {
    const { data } = await this._httpClient.get(`${url}/deal_stages`, config)
    return data
  }

  //List all deal statuses.
  async getDealStatuses() {
    try {
      const { data } = await this._httpClient.get(`${url}/deal_statuses`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  //List all lead origins in account
  async getLeadOrigins() {
    try {
      const { data } = await this._httpClient.get(`${url}/lead_origins`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  //List all loss reasons in your account.
  async getLossReasons() {
    try {
      const { data } = await this._httpClient.get(`${url}/loss_reasons`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  //List all metrics in your account
  async getMetrics() {
    try {
      const { data } = await this._httpClient.get(`${url}/metrics`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  //List all sectors in your account.
  async getSectors() {
    try {
      const { data } = await this._httpClient.get(`${url}/sectors`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }

  }

  //Set state upper case
  setUpperCaseState(word) {
    if (word.split(' ').length > 1) {
      const array = word.split(' ')
      const state = `${array[0].substr(0, 1).toUpperCase()}${array[1].substr(0, 1).toUpperCase()}`
      return state
    } else {
      return word.substr(0, 2).toUpperCase()
    }
  }
}