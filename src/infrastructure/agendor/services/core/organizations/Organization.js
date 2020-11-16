'use strict';

const { url, config } = require('../../../http/api')

module.exports = class Organization {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getOrganizations(organization = '') {
    try {
      const { data } = await this._httpClient.get(`${url}/organizations/${organization}`, config)
      return data;
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async createOrganization(organization) {
    try {
      const { data } = await this._httpClient.post(`${url}/organizations`, organization, config)
      return data;
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async upsertOrganization(organization) {
    try {
      const { data } = await this._httpClient.post(`${url}/organizations/upsert`, organization, config)
      return data;
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async updateOrganization(id, organization) {
    try {
      const { data } = await this._httpClient.put(`${url}/organizations/${id}`, organization, config)
      return data;
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async deleteOrganization(id) {
    try {
      const { data } = await this._httpClient.delete(`${url}/organizations/${id}`, config)
      return data;
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }
}