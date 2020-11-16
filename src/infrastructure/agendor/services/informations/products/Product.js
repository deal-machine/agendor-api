'use strict'

const { url, config } = require('../../../http/api')

module.exports = class Product {
  _httpClient

  constructor(_httpClient) {
    this._httpClient = _httpClient
  }

  async getProducts() {
    try {
      const { data } = await this._httpClient.get(`${url}/products`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async createProduct(product) {
    try {
      const { data } = await this._httpClient.post(`${url}/products`, product, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }
  }

  async deleteProduct(id) {
    try {
      const { data } = await this._httpClient.delete(`${url}/products/${id}`, config)
      return data
    }
    catch (err) {
      console.error({ "Error": err.message })
    }

  }
}