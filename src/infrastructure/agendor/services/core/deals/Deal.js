'use strict'

const { url, config } = require('../../../http/api')

module.exports = class Deal {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getDeals(id = '') {
    try {
      const { data } = await this._httpClient.get(`${url}/deals/${id}`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async getDealsOfPerson(person_id) {
    try {
      const { data } = await this._httpClient.get(`${url}/people/${person_id}/deals`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async getDealsOfOrganizations(organization_id) {
    try {
      const { data } = await this._httpClient.get(`${url}/organizations/${organization_id}/deals`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async createDealForPerson(person_id, deal) {
    try {
      const { data } = await this._httpClient.post(`${url}/people/${person_id}/deals`, deal, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }

  }

  async createDealForOrganization(organization_id, deal) {
    try {
      const { data } = await this._httpClient.post(`${url}/organizations/${organization_id}/deals`, deal, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async updateDeal(id, deal) {
    try {
      const { data } = await this._httpClient.put(`${url}/deals/${id}`, deal, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async updateDealStatus(id, dealStatus) {
    try {

      if (dealStatus.dealStatusText !== "ongoing"
        && dealStatus.dealStatusText !== "won"
        && dealStatus.dealStatusText !== "lost") {
        throw new Error(`Status must be "ongoing" "won" "lost".`)
      }

      const { data } = await this._httpClient.put(`${url}/deals/${id}/status`, dealStatus, config)
      return data
    }
    catch (err) {
      console.error(err.message)
    }
  }

  async updateDealStage(id, dealStage) {
    try {
      const { data } = await this._httpClient.put(`${url}/deals/${id}/stage`, dealStage, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }
}