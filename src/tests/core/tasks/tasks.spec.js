'use strict'

const {
  getTasks,
  getTasksOfPerson,
  getTasksOfOrganization,
  getTasksOfDeal,
  createTaskForPerson,
  createTaskForOrganization,
  createTaskForDeal
} = require('./tasksService')

describe('Test Core Tasks', () => {

  it('should be able to get tasks', async () => {
    const tasks = await getTasks()

    expect(tasks).toHaveProperty('data')
    expect(tasks).toHaveProperty('links')
  })

  it('should be able to get all tasks of a person', async () => {
    const tasksOfPerson = await getTasksOfPerson('33623986')

    expect(tasksOfPerson).toHaveProperty('data')
    expect(tasksOfPerson).toHaveProperty('meta')
    expect(tasksOfPerson).toHaveProperty('links')
  })

  it('should be able to get all tasks of an organization', async () => {
    const tasksOfOrganization = await getTasksOfOrganization('23517322')

    expect(tasksOfOrganization).toHaveProperty('data')
  })

  it('should be able to get all tasks of a deal', async () => {
    const tasksOfDeal = await getTasksOfDeal('10756436')

    expect(tasksOfDeal).toHaveProperty('data')
  })
})