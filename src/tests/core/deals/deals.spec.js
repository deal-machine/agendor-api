'use strict'

const {
  getDeals,
  getDealsOfPerson,
  getDealsofOrganization
} = require('../../../infrastructure/agendor/services/core/deals/dealsRepository')

describe('Tests Core Deals', () => {

  it('should be able to get deals', async () => {
    const deals = await getDeals()

    expect(deals).toHaveProperty('data')
  })

  it('should be able to get deals of a person', async () => {
    const dealsPerson = await getDealsOfPerson('33545094')

    expect(dealsPerson).toHaveProperty('data')
  })

  it('should be able to get deals of an organization', async () => {
    const dealsOrganization = await getDealsofOrganization('23387965')

    expect(dealsOrganization).toHaveProperty('data')
  })
})