const express = require('express');
const musicOperations = require('../controller/music');
const routes = express.Router();
routes.get('/singer',musicOperations.getByArtist);
routes.get('/allsongs',musicOperations.getAllSongs);
routes.post('/addsong',musicOperations.addASong);
module.exports = routes;