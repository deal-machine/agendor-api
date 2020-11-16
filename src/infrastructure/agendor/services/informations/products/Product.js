'use strict'

const { url, config } = require('../../../http/api')

module.exports = class Product {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getProducts() {
    const { data } = await this._httpClient.get(`${url}/products`, config)
    return data
  }

  async createProduct(product) {
    const { data } = await this._httpClient.post(`${url}/products`, product, config)
    return data
  }

  async deleteProduct(id) {
    const { data } = await this._httpClient.delete(`${url}/products/${id}`, config)
    return data
  }
}