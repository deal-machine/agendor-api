'use strict'

const { url, config } = require('../../../../http/api.js')

module.exports = class Person {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getPeople(id) {
    const { data } = await this._httpClient.get(`${url}/people/${id}`, config)
    return data;
  }
  async listPeopleByOrganization(organization_id) {
    const { data } = await this._httpClient.get(`${url}/organizations/${organization_id}/people`, config)
    return data
  }

  async createPerson(person) {
    const { data } = await this._httpClient.post(`${url}/people`, person, config)
    return data;
  }

  async upsertPerson(email) {
    const { data } = await this._httpClient.post(`${url}/people/upsert`, email, config)
    return data
  }

  async updatePerson(id, person) {
    const { data } = await this._httpClient.put(`${url}/people/${id}`, person, config)
    return data
  }

  async deletePerson(id) {
    const { status } = await this._httpClient.delete(`${url}/people/${id}`, config)
    return status
  }
}