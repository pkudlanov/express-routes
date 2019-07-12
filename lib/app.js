const express = require('express');
const app = express();
const trailRoutes = require('./routes/trails');

app.use(express.json());

app.use('/api/v1/trails', trailRoutes);

module.exports = app;
