'use strict';

const { url, config } = require('../../../../http/api.js')

module.exports = class User {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getUser(user) {
    const { data } = await this._httpClient.get(`${url}/users/${user}`, config)
    return data.data;
  }

  async updateUser(id, user) {
    const response = await this._httpClient.put(`${url}/users/${id}`, config)
    return response;
  }
}