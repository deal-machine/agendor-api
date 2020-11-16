'use strict';

const { url, config } = require('../../../../http/api.js')

module.exports = class User {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getUsers(user) {
    const { data } = await this._httpClient.get(`${url}/users/${user}`, config)
    return data;
  }

  async updateUser(id, user) {
    const { data } = await this._httpClient.put(`${url}/users/${id}`, user, config)
    return data;
  }
}