'use strict';

const { url, config } = require('../../../http/api')

module.exports = class Organization {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getOrganizations(organization) {
    const { data } = await this._httpClient.get(`${url}/organizations/${organization}`, config)
    return data;
  }

  async createOrganization(organization) {
    const { data } = await this._httpClient.post(`${url}/organizations`, organization, config)
    return data;
  }

  async upsertOrganization(organization) {
    const { data } = await this._httpClient.post(`${url}/organizations/upsert`, organization, config)
    return data;
  }

  async updateOrganization(id, organization) {
    const { data } = await this._httpClient.put(`${url}/organizations/${id}`, organization, config)
    return data;
  }

  async deleteOrganization(id) {
    const { status } = await this._httpClient.delete(`${url}/organizations/${id}`, config)
    return status;
  }

}