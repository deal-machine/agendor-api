'use strict'

const axios = require('axios')

const { name, internet, company } = require('faker')

const People = require('./People')
const peopleClass = new People(axios)

async function getPeople(id = '') {
  try {
    const people = await peopleClass.getPeople(id)
    console.log(people)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getOrganizationPeople(organization_id) {
  try {
    const organizationPeople = await peopleClass.listPeopleByOrganization(organization_id)
    console.log(organizationPeople)
  }
  catch (erro) {
    console.error({ "Error": err.message })
  }
}

async function createPerson(person = '') {
  try {
    const createPerson = await peopleClass.createPerson(person)
    console.log(createPerson)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function deletePerson(id) {
  try {
    const deletePerson = await peopleClass.deletePerson(id)
    console.log(deletePerson)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function upsertPerson(email) {
  try {
    const upsertPerson = await peopleClass.upsertPerson(email)
    console.log(upsertPerson)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function updatePerson(id, person) {
  try {
    const updatePerson = await peopleClass.updatePerson(id, person)
    console.log(updatePerson)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}


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
})