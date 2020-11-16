'use strict'

const axios = require('axios')

const Organization = require('../../../infrastructure/agendor/services/core/organizations/Organization')
const organization = new Organization(axios)

describe('Test Core Organizations', () => {

  it('should be able to get organizations', async () => {
    const organizations = await organization.getOrganizations()

    expect(organizations).toHaveProperty('data')
  })
})