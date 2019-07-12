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
    })
    .get('/', (req, res) => {
        res.send(trails);
    })
    .get('/:trail', (req, res) => {
        res.send(trails[req.params.trail]);
    })
    .put('/:trail', (req, res) => {
        const {
            name,
            type,
            distance,
            painScale
        } = req.body;

        const updatedTrail = {
            name,
            type,
            distance,
            painScale
        };

        trails[req.params.trail] = updatedTrail;
        res.send(trails[req.params.trail]);
    })
    .delete('/:trail', (req, res) => {
        const deleted = trails.splice(req.params.trail, 1);
        res.send(deleted[0]);
    });
