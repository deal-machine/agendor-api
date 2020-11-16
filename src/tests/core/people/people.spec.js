'use strict'

const {
  getPeople,
  getOrganizationPeople
} = require('../../../infrastructure/agendor/services/core/people/peopleRepository')

describe('Test Core People', () => {

  it('should be able to get people', async () => {
    const people = await getPeople()

    expect(people).toHaveProperty('data')
  })

  it('should be able to get all people of an organization', async () => {
    const peopleOrganization = await getOrganizationPeople('23243205')

    expect(peopleOrganization).toHaveProperty('data')
  })
})