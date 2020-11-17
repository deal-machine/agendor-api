'use strict'

const {
  getPeople,
  getOrganizationPeople,
  createPerson,
  deletePerson,
  upsertPerson,
  updatePerson
} = require('./peopleService')

describe('Test Core People', () => {

  it('should be able to get people', async () => {
    const peoples = await getPeople()

    expect(peoples).toHaveProperty('data')
  })

  it('should be able to get all people of an organization', async () => {
    const peopleOrganization = await getOrganizationPeople('23243205')

    expect(peopleOrganization).toHaveProperty('data')
  })
})