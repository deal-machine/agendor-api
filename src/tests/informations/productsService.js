'use strict'

const axios = require('axios')

const Product = require('../../infrastructure/agendor/services/informations/products/Product')
const productClass = new Product(axios)

async function getProducts() {
  try {
    const products = await productClass.getProducts()
    return products
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createProduct(product) {
  try {
    const createdProduct = await productClass.createProduct(product)
    return createdProduct
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function deleteProduct(id) {
  try {
    const deletedProduct = await productClass.deleteProduct(id)
    return deletedProduct
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

module.exports = { getProducts, createProduct, deleteProduct }