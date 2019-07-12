const request = require('supertest');
const app = require('../lib/app');

describe('items routes', () => {
    it('creates and item with POST', () => {
        return request(app)
            .post('/api/v1/trails')
            .send({ name: 'PITA', type: 'Cross Country', distance: 7, painScale: 8 })
            .then(res => {
                expect(res.body).toEqual({
                    name: 'PITA',
                    type: 'Cross Country',
                    distance: 7,
                    painScale: 8
                });
            });
    });
});
