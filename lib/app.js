const express = require('express');
const app = express();
const trailRoutes = require('./routes/trails');
const logger = require('./middleware/logger');

app.use(logger);

app.use(express.json());

app.use((req, res, next) => {
    const err = new Error('not found');
    err.status = 404;
    next(err);
});

app.use('/api/v1/trails', trailRoutes);


// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    const status = err.status || 500;
    console.log(err);
    res.status(status);
    res.send({ error: err });
});

module.exports = app;
