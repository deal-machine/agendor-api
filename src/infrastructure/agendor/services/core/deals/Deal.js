'use strict'

const { url, config } = require('../../../http/api')

module.exports = class Deal {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getDeals(id) {
    const { data } = await this._httpClient.get(`${url}/deals/${id}`, config)
    return data
  }

  async getDealsOfPerson(person_id) {
    const { data } = await this._httpClient.get(`${url}/people/${person_id}/deals`, config)
    return data
  }

  async getDealsOfOrganizations(organization_id) {
    const { data } = await this._httpClient.get(`${url}/organizations/${organization_id}/deals`, config)
    return data
  }

  async createDealForPerson(person_id, deal) {
    const { data } = await this._httpClient.post(`${url}/people/${person_id}/deals`, deal, config)
    return data
  }

  async createDealForOrganization(organization_id, deal) {
    const { data } = await this._httpClient.post(`${url}/organizations/${organization_id}/deals`, deal, config)
    return data
  }

  async updateDeal(id, deal) {
    const { data } = await this._httpClient.put(`${url}/deals/${id}`, deal, config)
    return data
  }

  async updateDealStatus(id, dealStatus) {
    const { data } = await this._httpClient.put(`${url}/deals/${id}/status`, dealStatus, config)
    return data
  }

  async updateDealStage(id, dealStage) {
    const { data } = await this._httpClient.put(`${url}/deals/${id}/stage`, dealStage, config)
    return data
  }
}