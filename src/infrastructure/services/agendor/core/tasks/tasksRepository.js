'use strict'

const axios = require('axios')

const { lorem } = require('faker')

const Task = require('./Task')
const task = new Task(axios)

async function getTasks() {
  try {
    const tasks = await task.getTasks()
    console.log(tasks)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getTasksOfPerson(person_id) {
  try {
    const tasksPerson = await task.getTasksOfPerson(person_id)
    console.log(tasksPerson)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getTasksofOrganization(organization_id) {
  try {
    const tasksOrganization = await task.getTasksOfOrganization(organization_id)
    console.log(tasksOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function getTasksOfDeal(deal_id) {
  try {
    const tasksDeal = await task.getTasksOfDeal(deal_id)
    console.log(tasksDeal)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createTaskForPerson(person_id, text) {
  try {
    const taskPerson = await task.createTaskForPerson(person_id, text)
    console.log(taskPerson)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createTaskForOrganization(organization_id, text) {
  try {
    const taskOrganization = await task.createTaskForOrganization(organization_id, text)
    console.log(taskOrganization)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

async function createTaskForDeal(deal_id, text) {
  try {
    const taskDeal = await task.createTaskForDeal(deal_id, text)
    console.log(taskDeal)
  }
  catch (err) {
    console.error({ "Error": err.message })
  }
}

//getTasks()
//getTasksOfPerson('33623986')
//getTasksofOrganization('23517322')
//getTasksOfDeal('10756436')
//createTaskForPerson('33623986', { text: lorem.text() })
//createTaskForOrganization('23517322', { text: lorem.text() })
//createTaskForDeal('10756436', { text: lorem.text() })