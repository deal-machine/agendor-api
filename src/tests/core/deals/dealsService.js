'use strict'

const axios = require('axios')

//const { name } = require('faker')

const Deal = require('../../../infrastructure/agendor/services/core/deals/Deal')
const dealClass = new Deal(axios)

async function getDeals(id = '') {
  try {
    const deal = await dealClass.getDeals(id)
    return deal
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getDealsOfPerson(person_id) {
  try {
    const dealsPerson = await dealClass.getDealsOfPerson(person_id)
    return dealsPerson
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getDealsOfOrganization(organization_id) {
  try {
    const dealsOrganization = await dealClass.getDealsOfOrganizations(organization_id)
    return dealsOrganization
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createDealForPerson(person_id, deal) {
  try {
    const dealPerson = await dealClass.createDealForPerson(person_id, deal)
    return dealPerson
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createDealForOrganization(organization_id, deal) {
  try {
    const dealOrganization = await dealClass.createDealForOrganization(organization_id, deal)
    return dealOrganization
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function updateDeal(id, deal) {
  try {
    const updatedDeal = await dealClass.updateDeal(id, deal)
    return updatedDeal
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function updateDealStatus(id, dealStatus) {
  try {

    if (dealStatus.dealStatusText !== "ongoing"
      && dealStatus.dealStatusText !== "won"
      && dealStatus.dealStatusText !== "lost") {
      throw new Error(`Status must be "ongoing" "won" "lost".`)
    }

    const updatedStatus = await dealClass.updateDealStatus(id, dealStatus)
    return updatedStatus
  }
  catch (err) {
    console.error(err.message)
  }
}

async function updateDealStage(id, dealStage) {
  try {
    const updatedStage = await dealClass.updateDealStage(id, dealStage)
    return updatedStage
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

module.exports = {
  getDeals,
  getDealsOfPerson,
  getDealsOfOrganization,
  createDealForPerson,
  createDealForOrganization,
  updateDeal,
  updateDealStatus,
  updateDealStage
}

/*
getDeals('10756436')

getDealsOfPerson('33545094')

getDealsofOrganization('23387965')

createDealForPerson('33623986', { title: name.title() })

createDealForOrganization('23517322', { title: name.title() })

updateDeal('10756436', { description: name.jobDescriptor() })

dealStatusText = Enum: "ongoing" "won" "lost"
updateDealStatus('10756436', { dealStatusText: "ongoing" })

updateDealStage('10756436', { dealStage: 3 })
*/