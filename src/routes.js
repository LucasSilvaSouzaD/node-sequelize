const express = require('express')
const UserController = require('./controllers/UserController')
const AdressesController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')

const routes = express.Router()

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.post('/users/:user_id/addresses', AdressesController.store)
routes.get('/users/:user_id/addresses', AdressesController.index)


routes.post('/users/:user_id/techs', TechController.store)
routes.get('/users/:user_id/techs', TechController.index)
routes.delete('/users/:user_id/techs', TechController.delete)


module.exports = routes