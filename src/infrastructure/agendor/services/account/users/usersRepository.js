'use strict';

const axios = require('axios')

const User = require('./User')
const userClass = new User(axios);

async function getUsers(id = '') {
  try {
    const users = await userClass.getUsers(id)
    return users
  }
  catch (err) {
    console.error({ Error: err.message })
  }
}

async function updateUser(id, user) {
  try {
    const updatedUser = await userClass.updateUser(id, user)
    return updatedUser
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}
//getUsers('me')
//updateUser('576723', { contact: { linkedIn: "in/bárbara-moreira-siqueira-07a26597/" } })

module.exports = { getUsers, updateUser }
