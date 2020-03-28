const express = require('express')

const SessionMid = require('./middlewares/SessionMid')
const ProfileMid = require('./middlewares/ProfileMid')
const OngMid = require('./middlewares/OngMid')
const IncidentMid = require('./middlewares/IncidentMid')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const { celebrate, Segments, Joi } = require('celebrate')

const routes = express.Router()

routes.post('/session', SessionMid.index(), SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngMid.create(), OngController.create)

routes.get('/profile', ProfileMid.index(), ProfileController.index) 

routes.get('/incidents', IncidentMid.index(), IncidentController.index)
routes.post('/incidents', IncidentMid.create(), IncidentController.create)
routes.delete('/incidents/:id', IncidentMid.delete(), IncidentController.delete)


module.exports = routes