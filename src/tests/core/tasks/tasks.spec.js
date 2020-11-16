'use strict'

const axios = require('axios')

const Task = require('../../../infrastructure/agendor/services/core/tasks/Task')
const task = new Task(axios)

describe('Test Core Tasks', () => {

  it('should be able to get tasks', async () => {
    const tasks = await task.getTasks()

    expect(tasks).toHaveProperty('data')
    expect(tasks).toHaveProperty('links')
  })

  it('should be able to get all tasks of a person', async () => {
    const tasksOfPerson = await task.getTasksOfPerson('33623986')

    expect(tasksOfPerson).toHaveProperty('data')
    expect(tasksOfPerson).toHaveProperty('meta')
    expect(tasksOfPerson).toHaveProperty('links')
  })

  it('should be able to get all tasks of an organization', async () => {
    const tasksOfOrganization = await task.getTasksOfOrganization('23517322')

    expect(tasksOfOrganization).toHaveProperty('data')
  })

  it('should be able to get all tasks of a deal', async () => {
    const tasksOfDeal = await task.getTasksOfDeal('10756436')

    expect(tasksOfDeal).toHaveProperty('data')
  })
})