'use strict'

const axios = require('axios')

const Deal = require('../../../infrastructure/agendor/services/core/deals/Deal')
const deal = new Deal(axios)

describe('Tests Core Deals', () => {

  it('should be able to get deals', async () => {
    const deals = await deal.getDeals()

    expect(deals).toHaveProperty('data')
  })

  it('should be able to get deals of a person', async () => {
    const dealsPerson = await deal.getDealsOfPerson('33545094')

    expect(dealsPerson).toHaveProperty('data')
  })

  it('should be able to get deals of an organization', async () => {
    const dealsOrganization = await deal.getDealsOfOrganizations('23387965')

    expect(dealsOrganization).toHaveProperty('data')
  })
})