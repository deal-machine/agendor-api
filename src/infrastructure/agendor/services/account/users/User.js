'use strict';

const { url, config } = require('../../../http/api')

module.exports = class User {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  //If user = 'me', return current user
  async getUsers(user = '') {
    try {
      const { data } = await this._httpClient.get(`${url}/users/${user}`, config)
      return data;
    }
    catch (err) {
      console.error({ Error: err.message })
    }
  }

  //user must be active:true in requisition body => {active: true}
  async updateUser(id, user) {
    try {
      const { data } = await this._httpClient.put(`${url}/users/${id}`, user, config)
      return data;
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }
}