'use strict'

const axios = require('axios')

const User = require('../../infrastructure/agendor/services/account/users/User')
const user = new User(axios)

describe('Test Users', () => {

  it('should be able to list all users', async () => {
    const users = await user.getUsers()

    expect(users).toHaveProperty('data')
    expect(users).toHaveProperty('links')
  })

})