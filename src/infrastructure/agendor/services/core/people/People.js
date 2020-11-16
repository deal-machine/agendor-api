'use strict'

const { url, config } = require('../../../http/api')

module.exports = class Person {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getPeople(id = '') {
    try {
      const { data } = await this._httpClient.get(`${url}/people/${id}`, config)
      return data;
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async listPeopleByOrganization(organization_id) {
    try {
      const { data } = await this._httpClient.get(`${url}/organizations/${organization_id}/people`, config)
      return data
    }
    catch (erro) {
      console.error({ "Error": err.message })
    }
  }

  async createPerson(person) {
    try {
      const { data } = await this._httpClient.post(`${url}/people`, person, config)
      return data;
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async upsertPerson(email) {
    try {
      const { data } = await this._httpClient.post(`${url}/people/upsert`, email, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async updatePerson(id, person) {
    try {
      const { data } = await this._httpClient.put(`${url}/people/${id}`, person, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async deletePerson(id) {
    try {
      const { data } = await this._httpClient.delete(`${url}/people/${id}`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }
}