'use strict'

const { url, config } = require('../../../../http/api')

module.exports = class Task {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getTasks() {
    const { data } = await this._httpClient.get(`${url}/tasks`, config)
    return data
  }

  async getTasksOfPerson(person_id) {
    const { data } = await this._httpClient.get(`${url}/people/${person_id}/tasks`, config)
    return data
  }

  async getTasksOfOrganization(organization_id) {
    const { data } = await this._httpClient.get(`${url}/organizations/${organization_id}/tasks`, config)
    return data
  }

  async getTasksOfDeal(deal_id) {
    const { data } = await this._httpClient.get(`${url}/deals/${deal_id}/tasks`, config)
    return data
  }

  async createTaskForPerson(person_id, text) {
    const { data } = await this._httpClient.post(`${url}/people/${person_id}/tasks`, text, config)
    return data
  }

  async createTaskForOrganization(organization_id, text) {
    const { data } = await this._httpClient.post(`${url}/organizations/${organization_id}/tasks`, text, config)
    return data
  }

  async createTaskForDeal(deals_id, text) {
    const { data } = await this._httpClient.post(`${url}/deals/${deals_id}/tasks`, text, config)
    return data
  }
}