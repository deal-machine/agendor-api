'use strict';

module.exports = class User {
  _httpClient

  url = "https://api.agendor.com.br/v3";

  token = "8dc6e478-bdf2-4ec4-a41f-be81d5df9c62";

  config = {
    headers: {
      Authorization: `Token ${this.token}`,
    },
  }

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getUsers(user) {
    const { data } = await this._httpClient.get(`${this.url}/users/${user}`, this.config)
    return data;
  }

  updateUser(id) { }
}