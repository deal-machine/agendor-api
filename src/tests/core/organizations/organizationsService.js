'use strict';

const axios = require('axios');

//const { name } = require('faker')

const Organization = require('../../../infrastructure/agendor/services/core/organizations/Organization')
const organizationClass = new Organization(axios)

async function getOrganizations(id = '') {
  try {
    const organizations = await organizationClass.getOrganizations(id)
    return organizations
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createOrganization(organization) {
  try {
    const createdOrganization = await organizationClass.createOrganization(organization)
    return createdOrganization
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function upsertOrganization(organization) {
  try {
    const upsertedOrganization = await organizationClass.upsertOrganization(organization)
    return upsertedOrganization
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function updateOrganization(id, organization) {
  try {
    const updatedOrganization = await organizationClass.updateOrganization(id, organization)
    return updatedOrganization
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function deleteOrganization(id) {
  try {
    const deletedOrganization = await organizationClass.deleteOrganization(id)
    return deletedOrganization
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

module.exports = {
  getOrganizations,
  createOrganization,
  upsertOrganization,
  updateOrganization,
  deleteOrganization
}

/*
getOrganizations('23516829')

createOrganization({ name: name.firstName })

upsertOrganization({ name: "Abby", legalName: name.lastName() })

updateOrganization('23516829', { legalName: name.lastName() })

deleteOrganization('23516829')
*/