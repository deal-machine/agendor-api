'use strict'

const axios = require('axios')

const { name } = require('faker')

const Product = require('./Product')
const productClass = new Product(axios)

async function getProducts() {
  try {
    const products = await productClass.getProducts()
    console.log(products)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createProduct(product) {
  try {
    const createdProduct = await productClass.createProduct(product)
    console.log(createdProduct)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function deleteProduct(id) {
  try {
    const deletedProduct = await productClass.deleteProduct(id)
    console.log(deletedProduct)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

//getProducts()
//createProduct({ name: name.title() })
//deleteProduct('488847')