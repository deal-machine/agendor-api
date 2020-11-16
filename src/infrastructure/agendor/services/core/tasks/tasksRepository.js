'use strict'

const axios = require('axios')

//const { lorem } = require('faker')

const Task = require('./Task')
const task = new Task(axios)

async function getTasks() {
  try {
    const tasks = await task.getTasks()
    return tasks
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getTasksOfPerson(person_id) {
  try {
    const tasksPerson = await task.getTasksOfPerson(person_id)
    return tasksPerson
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getTasksofOrganization(organization_id) {
  try {
    const tasksOrganization = await task.getTasksOfOrganization(organization_id)
    return tasksOrganization
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getTasksOfDeal(deal_id) {
  try {
    const tasksDeal = await task.getTasksOfDeal(deal_id)
    return tasksDeal
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createTaskForPerson(person_id, text) {
  try {
    const taskPerson = await task.createTaskForPerson(person_id, text)
    taskPerson
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createTaskForOrganization(organization_id, text) {
  try {
    const taskOrganization = await task.createTaskForOrganization(organization_id, text)
    return taskOrganization
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createTaskForDeal(deal_id, text) {
  try {
    const taskDeal = await task.createTaskForDeal(deal_id, text)
    return taskDeal
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

module.exports = {
  getTasks,
  getTasksOfPerson,
  getTasksofOrganization,
  getTasksOfDeal,
  createTaskForPerson,
  createTaskForOrganization,
  createTaskForDeal
}

//getTasks()
//getTasksOfPerson('33623986')
//getTasksofOrganization('23517322')
//getTasksOfDeal('10756436')
//createTaskForPerson('33623986', { text: lorem.text() })
//createTaskForOrganization('23517322', { text: lorem.text() })
//createTaskForDeal('10756436', { text: lorem.text() })