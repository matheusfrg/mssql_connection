const express = require('express')
const routes = express.Router()

const VagaController = require('./controllers/VagasController')

routes.get('/vagas', VagaController.index)

module.exports = routes