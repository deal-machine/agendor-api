'use strict'

const {
  getOrganizations,
  createOrganization,
  upsertOrganization,
  updateOrganization,
  deleteOrganization
} = require('./organizationsService')

describe('Test Core Organizations', () => {

  it('should be able to get organizations', async () => {
    const organizations = await getOrganizations()

    expect(organizations).toHaveProperty('data')
  })
})