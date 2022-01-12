// implement your server here
// require your posts router and connect it here
const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send(`
    <h2>Welcome to the jungle</h>
  `)
})

module.exports = server
