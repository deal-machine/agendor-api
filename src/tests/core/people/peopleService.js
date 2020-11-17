'use strict'

const axios = require('axios')

//const { name, internet, company } = require('faker')

const People = require('../../../infrastructure/agendor/services/core/people/People')
const peopleClass = new People(axios)

async function getPeople(id = '') {
  try {
    const people = await peopleClass.getPeople(id)
    return people
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getOrganizationPeople(organization_id) {
  try {
    const organizationPeople = await peopleClass.listPeopleByOrganization(organization_id)
    return organizationPeople
  }
  catch (erro) {
    console.error({ "Error": err.message })
  }
}

async function createPerson(person) {
  try {
    const createdPerson = await peopleClass.createPerson(person)
    return createdPerson
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function deletePerson(id) {
  try {
    const deletedPerson = await peopleClass.deletePerson(id)
    return deletedPerson
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function upsertPerson(email) {
  try {
    const upsertedPerson = await peopleClass.upsertPerson(email)
    return upsertedPerson
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function updatePerson(id, person) {
  try {
    const updatedPerson = await peopleClass.updatePerson(id, person)
    return updatedPerson
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

module.exports = {
  getPeople,
  getOrganizationPeople,
  createPerson,
  deletePerson,
  upsertPerson,
  updatePerson
}

/*
getPeople('33623986')

getOrganizationPeople('23243205')

createPerson({ name: name.firstName() })

deletePerson('33623986')

updatePerson('33623986', { contact: { email: internet.email() } })

upsertPerson({
  name: name.firstName(),
  description: company.catchPhraseDescriptor(),
  contact: {
    email: 'Clement97@gmail.com'
  }
})*/