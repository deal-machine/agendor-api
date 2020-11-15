'use strict'

const axios = require('axios')

const { name } = require('faker')

const Deal = require('./Deal')
const deals = new Deal(axios)

async function getDeals(id = '') {
  try {
    const deal = await deals.getDeals(id)
    console.log(deal)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getDealsOfPerson(person_id) {
  try {
    const dealsPerson = await deals.getDealsOfPerson(person_id)
    console.log(dealsPerson)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getDealsofOrganization(organization_id) {
  try {
    const dealsOrganization = await deals.getDealsOfOrganizations(organization_id)
    console.log(dealsOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createDealForPerson(person_id, deal) {
  try {
    const dealPerson = await deals.createDealForPerson(person_id, deal)
    console.log(dealPerson)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createDealForOrganization(organization_id, deal) {
  try {
    const dealOrganization = await deals.createDealForOrganization(organization_id, deal)
    console.log(dealOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function updateDeal(id, deal) {
  try {
    const updateDeal = await deals.updateDeal(id, deal)
    console.log(updateDeal)
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

    const updateStatus = await deals.updateDealStatus(id, dealStatus)
    console.log(updateStatus)
  }
  catch (err) {
    console.error(err.message)
  }
}

async function updateDealStage(id, dealStage) {
  try {
    const updateStage = await deals.updateDealStage(id, dealStage)
    console.log(updateStage)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}
//getDeals('10756436')

//getDealsOfPerson('33545094')

//getDealsofOrganization('23387965')

//createDealForPerson('33623986', { title: name.title() })

//createDealForOrganization('23517322', { title: name.title() })

//updateDeal('10756436', { description: name.jobDescriptor() })

//dealStatusText = Enum: "ongoing" "won" "lost"
//updateDealStatus('10756436', { dealStatusText: "ongoing" })

//updateDealStage('10756436', { dealStage: 3 })