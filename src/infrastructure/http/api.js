"use strict";

const url = "https://api.agendor.com.br/v3"
const token = "8dc6e478-bdf2-4ec4-a41f-be81d5df9c62"
const config = {
  headers: {
    Authorization: `Token ${token}`,
    'Content-Type': 'application/json',
  },
}

module.exports = { url, config }
