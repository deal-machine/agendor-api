'use strict'

const { url, config } = require('../../../http/api')

module.exports = class Task {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getTasks() {
    try {
      const { data } = await this._httpClient.get(`${url}/tasks`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async getTasksOfPerson(person_id) {
    try {
      const { data } = await this._httpClient.get(`${url}/people/${person_id}/tasks`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async getTasksOfOrganization(organization_id) {
    try {
      const { data } = await this._httpClient.get(`${url}/organizations/${organization_id}/tasks`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async getTasksOfDeal(deal_id) {
    try {
      const { data } = await this._httpClient.get(`${url}/deals/${deal_id}/tasks`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async createTaskForPerson(person_id, text) {
    try {
      const { data } = await this._httpClient.post(`${url}/people/${person_id}/tasks`, text, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async createTaskForOrganization(organization_id, text) {
    try {
      const { data } = await this._httpClient.post(`${url}/organizations/${organization_id}/tasks`, text, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async createTaskForDeal(deals_id, text) {
    try {
      const { data } = await this._httpClient.post(`${url}/deals/${deals_id}/tasks`, text, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }
}