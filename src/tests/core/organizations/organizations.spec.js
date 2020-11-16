'use strict'

const { getOrganizations } = require('../../../infrastructure/agendor/services/core/organizations/organizationsRepository')

describe('Test Core Organizations', () => {

  it('should be able to get organizations', async () => {
    const organizations = await getOrganizations()

    expect(organizations).toHaveProperty('data')
  })
})