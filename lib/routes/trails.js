const { Router } = require('express');

const trails = [];

module.exports = Router()
    .post('/', (req, res) => {
        const {
            name,
            type,
            distance,
            painScale
        } = req.body;

        const trail = {
            name,
            type,
            distance,
            painScale
        };

        trails.push(trail);
        res.send(trail);
    });
