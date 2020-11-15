'use strict'

const { url, config } = require('../../../http/api')

module.exports = class Information {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  //list all categories in account
  async getCategories() {
    const { data } = await this._httpClient.get(`${url}/categories`, config)
    return data
  }
  //List all available address states.
  async getStates() {
    const { data } = await this._httpClient.get(`${url}/states`, config)
    return data
  }
  //List all cities in a state.
  async getCities(state) {
    const { data } = await this._httpClient.get(`${url}/states/${state}/cities`, config)
    return data
  }
  //List all deal stages in account
  async getDealStages() {
    const { data } = await this._httpClient.get(`${url}/deal_stages`, config)
    return data
  }
  //List all deal statuses.
  async getDealStatuses() {
    const { data } = await this._httpClient.get(`${url}/deal_statuses`, config)
    return data
  }
  //List all lead origins in account
  async getLeadOrigins() {
    const { data } = await this._httpClient.get(`${url}/lead_origins`, config)
    return data
  }
  //List all loss reasons in your account.
  async getLossReasons() {
    const { data } = await this._httpClient.get(`${url}/loss_reasons`, config)
    return data
  }
  //List all metrics in your account
  async getMetrics() {
    const { data } = await this._httpClient.get(`${url}/metrics`, config)
    return data
  }
  //List all sectors in your account.
  async getSectors() {
    const { data } = await this._httpClient.get(`${url}/sectors`, config)
    return data
  }
}