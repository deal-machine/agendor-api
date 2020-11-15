'use strict';

const axios = require('axios')

const User = require('./User')
const user = new User(axios);

async function getUsers(id = '') {
  try {
    const users = await user.getUsers(id)
    console.log(users)
  }
  catch (err) {
    console.error({ Error: err.message })
  }
}

getUsers('me')
