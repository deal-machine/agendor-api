'use strict'

const { getProducts, createProduct, deleteProduct } = require('./productsService')

describe('Test products', () => {

  it('should be able to get Products', async () => {
    const products = await getProducts()

    expect(products).toHaveProperty('data')
    expect(products).toHaveProperty('meta')
    expect(products).toHaveProperty('links')
  })

})