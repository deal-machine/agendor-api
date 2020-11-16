'use strict'

const axios = require("axios")

const Product = require('../../infrastructure/agendor/services/informations/products/Product')
const product = new Product(axios)

describe('Test products', () => {

  it('should be able to get Products', async () => {
    const products = await product.getProducts()

    expect(products).toHaveProperty('data')
    expect(products).toHaveProperty('meta')
    expect(products).toHaveProperty('links')
  })

})