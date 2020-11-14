'use strict';

const axios = require('axios')

const User = require('./account/users/User')

const user = new User(axios);

(async () => {
  try {
    const getInfoUsers = await Promise.all([
      user.getUsers('me'),
      user.getUsers('')
    ])

    const currentUser = getInfoUsers[0]
    const users = getInfoUsers[1]


  } catch (error) {
    console.error("error:", error)
  }

})();
