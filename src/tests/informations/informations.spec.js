'use strict'

const axios = require('axios')

const Information = require('../../infrastructure/agendor/services/informations/Information')
const information = new Information(axios)

describe("Get Informations", () => {

  it('should be able to get Categories', async () => {
    const categories = await information.getCategories();

    expect(categories).toHaveProperty('data')
    expect(categories).toHaveProperty('links')
  });

  it('should be able to get States', async () => {
    const state = await information.getStates();

    expect(state).toHaveProperty('data')
    expect(state).toHaveProperty('links')
  })

  it('should be able to get Cities in State', async () => {
    const cities = await information.getCities('sao paulo')

    expect(cities).toHaveProperty('data')
    expect(cities).toHaveProperty('links')
  })

  it('should be able to get Deal Stages', async () => {
    const dealStages = await information.getDealStages();

    expect(dealStages).toHaveProperty('data')
    expect(dealStages).toHaveProperty('links')
  })

  it('should be able to get Deal Statuses', async () => {
    const dealStatuses = await information.getDealStatuses()

    expect(dealStatuses).toHaveProperty('data')
    expect(dealStatuses).toHaveProperty('links')
  })

  it('should be able to get Lead Origins', async () => {
    const leadOrigins = await information.getLeadOrigins()

    expect(leadOrigins).toHaveProperty('data')
    expect(leadOrigins).toHaveProperty('links')
  })

  it('should be able to get Loss Reasons', async () => {
    const lossReasons = await information.getLossReasons()

    expect(lossReasons).toHaveProperty('data')
    expect(lossReasons).toHaveProperty('links')
  })

  it('should be able to get Metrics', async () => {
    const metrics = await information.getMetrics()

    expect(metrics).toHaveProperty('data')
    expect(metrics).toHaveProperty('links')
  })

  it('should be able to get Sectors', async () => {
    const sectors = await information.getSectors()

    expect(sectors).toHaveProperty('data')
    expect(sectors).toHaveProperty('links')
  })
})