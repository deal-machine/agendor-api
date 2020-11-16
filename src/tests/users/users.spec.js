'use strict'

const { getUsers } = require('../../infrastructure/services/agendor/account/users/usersRepository.js')

describe('Test Users', () => {

  it('should be able to list all users', async () => {
    const users = await getUsers()

    expect(users).toHaveProperty('data')
    expect(users).toHaveProperty('links')
  })

})