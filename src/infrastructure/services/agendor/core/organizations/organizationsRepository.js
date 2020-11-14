'use strict';

const axios = require('axios');

const { name } = require('faker')

const Organization = require('./Organization.js');
const organization = new Organization(axios);


(async () => {
  try {
    //list all organizations
    const organizations = await organization.getOrganizations('')

    //list an organization by id parameter
    const organizationById = await organization.getOrganizations('23516829')

    //create organization
    const createOrganization = await organization.createOrganization({ name: name.firstName() })

    //upsert organization
    const upsertOrganization = await organization.upsertOrganization({ name: "Abby", legalName: name.lastName() })

    //update organization
    const updateOrganization = await organization.updateOrganization('23516829', { legalName: name.lastName() })

    //delete organization
    const deleteOrganization = await organization.deleteOrganization('23516829')

  }
  catch (err) {
    console.error({ "Error": err.message })
  }
})()