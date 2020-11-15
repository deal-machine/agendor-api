'use strict';

const axios = require('axios');

const { name } = require('faker')

const Organization = require('./Organization.js');
const organizationClass = new Organization(axios);

async function getOrganizations(id = '') {
  try {
    const organizations = await organizationClass.getOrganizations(id)
    console.log(organizations)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createOrganization(organization) {
  try {
    const createOrganization = await organizationClass.createOrganization(organization)
    console.log(createOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function upsertOrganization(organization) {
  try {
    const upsertOrganization = await organizationClass.upsertOrganization(organization)
    console.log(upsertOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function updateOrganization(id, organization) {
  try {
    const updateOrganization = await organizationClass.updateOrganization(id, organization)
    console.log(updateOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function deleteOrganization(id) {
  try {
    const deleteOrganization = await organization.deleteOrganization(id)
    console.log(deleteOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

//getOrganizations('23516829')

//createOrganization({ name: name.firstName })

//upsertOrganization({ name: "Abby", legalName: name.lastName() })

//updateOrganization('23516829', { legalName: name.lastName() })

//deleteOrganization('23516829')
