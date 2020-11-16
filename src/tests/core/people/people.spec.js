'use strict'

const axios = require('axios')

const People = require('../../../infrastructure/agendor/services/core/people/People')
const people = new People(axios)

describe('Test Core People', () => {

  it('should be able to get people', async () => {
    const peoples = await people.getPeople()

    expect(peoples).toHaveProperty('data')
  })

  it('should be able to get all people of an organization', async () => {
    const peopleOrganization = await people.listPeopleByOrganization('23243205')

    expect(peopleOrganization).toHaveProperty('data')
  })
})