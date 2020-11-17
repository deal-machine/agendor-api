'use strict'

const axios = require('axios')

const Information = require('../../infrastructure/agendor/services/informations/Information')
const informationClass = new Information(axios)

async function getCategories() {
  try {
    const categories = await informationClass.getCategories()
    return categories
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getStates() {
  try {
    const states = await informationClass.getStates()
    return states
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getCitiesInState(state) {
  try {

    const newState = setUpperCaseState(state)

    const states = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]

    const correctState = states.filter(item => {
      return item == newState
    })

    if (correctState.length === 0) {
      throw new Error(`${newState} not exists.`)
    }
    else {
      const cities = await informationClass.getCities(newState)
      return cities
    }
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getDealStages() {
  try {
    const stages = await informationClass.getDealStages()
    return stages
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getDealStatuses() {
  try {
    const statuses = await informationClass.getDealStatuses()
    return statuses
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getLeadOrigins() {
  try {
    const leadOrigins = await informationClass.getLeadOrigins()
    return leadOrigins
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getLossReasons() {
  try {
    const lossReasons = await informationClass.getLossReasons()
    return lossReasons
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getMetrics() {
  try {
    const metrics = await informationClass.getMetrics()
    return metrics
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getSectors() {
  try {
    const sectors = await informationClass.getSectors()
    return sectors
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

//Set state upper case
function setUpperCaseState(word) {
  if (word.split(' ').length > 1) {
    const array = word.split(' ')
    const state = `${array[0].substr(0, 1).toUpperCase()}${array[1].substr(0, 1).toUpperCase()}`
    return state
  } else {
    return word.substr(0, 2).toUpperCase()
  }
}

module.exports = {
  getCategories,
  getStates,
  getCitiesInState,
  getDealStages,
  getDealStatuses,
  getLeadOrigins,
  getLossReasons,
  getMetrics,
  getSectors
}