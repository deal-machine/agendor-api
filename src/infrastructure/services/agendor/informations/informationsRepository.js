'use strict'

const axios = require('axios')

const Information = require('./Information')
const information = new Information(axios)

async function getCategories() {
  try {
    const categories = await information.getCategories()
    console.log(categories)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getStates() {
  try {
    const states = await information.getStates()
    console.log(states)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getCitiesInState(state) {
  try {

    const newState = upperCaseState(state)

    const states = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]

    const correctState = states.filter(item => {
      return item == newState
    })

    if (correctState.length === 0) {
      throw new Error(`${newState} is not a valid state.`)
    }
    else {
      const cities = await information.getCities(newState)
      console.log(cities)
    }
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getDealStages() {
  try {
    const stages = await information.getDealStages()
    console.log(stages)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getDealStatuses() {
  try {
    const statuses = await information.getDealStatuses()
    console.log(statuses)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getLeadOrigins() {
  try {
    const leadOrigins = await information.getLeadOrigins()
    console.log(leadOrigins)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getLossReasons() {
  try {
    const lossReasons = await information.getLossReasons()
    console.log(lossReasons)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getMetrics() {
  try {
    const metrics = await information.getMetrics()
    console.log(metrics)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getSectors() {
  try {
    const sectors = await information.getSectors()
    console.log(sectors)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

//Set state upper case
function upperCaseState(word) {
  if (word.split(' ').length > 1) {
    const array = word.split(' ')
    const state = `${array[0].substr(0, 1).toUpperCase()}${array[1].substr(0, 1).toUpperCase()}`
    return state
  } else {
    return word.substr(0, 2).toUpperCase()
  }
}

//getCategories()
//getStates()
//getCitiesInState('rio s')
//getDealStages()
//getDealStatuses()
//getLeadOrigins()
//getLossReasons()
//getMetrics()
//getSectors()