'use strict';

const axios = require('axios')

const User = require('./User')
const user = new User(axios);

(async () => {
  try {
    const currentUser = await user.getUser('me')
    const users = await user.getUser('')

    console.log(currentUser)
    console.log(users)
  }
  catch (err) {
    console.error({ Error: err.message })
  }
})()

/*
module.exports = class UsersRepository {

  constructor() { }

  async getUsers() {
    const users = await user.getUser('');
    return users;
  };

  async getCurrentUser() {
    const currentUser = await user.getUser('me')
    return currentUser;
  }
}
*/