'use strict';

const axios = require('axios');

const { name } = require('faker')

const Organization = require('./Organization.js');
const organization = new Organization(axios);

async function getOrganizations(id = '') {
  try {
    const organizations = await organization.getOrganizations(id)
    console.log(organizations)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createOrganization(organization) {
  try {
    const createOrganization = await organization.createOrganization(organization)
    console.log(createOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function upsertOrganization(organization) {
  try {
    const upsertOrganization = await organization.upsertOrganization()
    console.log(upsertOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function updateOrganization(id, organization) {
  try {
    const updateOrganization = await organization.updateOrganization()
    console.log(updateOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function deleteOrganization(id) {
  try {
    const deleteOrganization = await organization.deleteOrganization()
    console.log(deleteOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

getOrganizations('23516829')

createOrganization({ name: name.firstName() })

upsertOrganization({ name: "Abby", legalName: name.lastName() })

updateOrganization('23516829', { legalName: name.lastName() })

deleteOrganization('23516829')
