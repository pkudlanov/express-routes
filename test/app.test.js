const request = require('supertest');
const app = require('../lib/app');

describe('items routes', () => {
    it('creates a trail with POST', () => {
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
    
    it('returns the whole array of trails with GET', () => {
        return request(app)
            .get('./api/v1/trails')
            .then(res => {
                expect(res.body).toEqual([{
                    name: 'PITA',
                    type: 'Cross Country',
                    distance: 7,
                    painScale: 8
                }]);
            });
    });
});
