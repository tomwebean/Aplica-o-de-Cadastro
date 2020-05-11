const express = require('express');

const ClientController = require('./controllers/ClientController');

const routes = express.Router();

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.create);
routes.put('/clients/:id', ClientController.update);
routes.delete('/clients/:id', ClientController.delete);

module.exports = routes;
