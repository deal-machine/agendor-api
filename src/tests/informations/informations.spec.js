'use strict'

const {
  getCategories,
  getStates,
  getCitiesInState,
  getDealStages,
  getDealStatuses,
  getLeadOrigins,
  getLossReasons,
  getMetrics,
  getSectors
} = require('./informationsService')

describe("Get Informations", () => {

  it('should be able to get Categories', async () => {
    const categories = await getCategories();

    expect(categories).toHaveProperty('data')
    expect(categories).toHaveProperty('links')
  })

  it('should be able to get States', async () => {
    const state = await getStates();

    expect(state).toHaveProperty('data')
    expect(state).toHaveProperty('links')
  })

  it('should be able to get Cities in State', async () => {
    const cities = await getCitiesInState('sao paulo')

    expect(cities).toHaveProperty('data')
    expect(cities).toHaveProperty('links')
  })

  it('should be able to get Deal Stages', async () => {
    const dealStages = await getDealStages();

    expect(dealStages).toHaveProperty('data')
    expect(dealStages).toHaveProperty('links')
  })

  it('should be able to get Deal Statuses', async () => {
    const dealStatuses = await getDealStatuses()

    expect(dealStatuses).toHaveProperty('data')
    expect(dealStatuses).toHaveProperty('links')
  })

  it('should be able to get Lead Origins', async () => {
    const leadOrigins = await getLeadOrigins()

    expect(leadOrigins).toHaveProperty('data')
    expect(leadOrigins).toHaveProperty('links')
  })

  it('should be able to get Loss Reasons', async () => {
    const lossReasons = await getLossReasons()

    expect(lossReasons).toHaveProperty('data')
    expect(lossReasons).toHaveProperty('links')
  })

  it('should be able to get Metrics', async () => {
    const metrics = await getMetrics()

    expect(metrics).toHaveProperty('data')
    expect(metrics).toHaveProperty('links')
  })

  it('should be able to get Sectors', async () => {
    const sectors = await getSectors()

    expect(sectors).toHaveProperty('data')
    expect(sectors).toHaveProperty('links')
  })
})