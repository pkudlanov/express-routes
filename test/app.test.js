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
            .get('/api/v1/trails')
            .then(res => {
                expect(res.body).toEqual([{
                    name: 'PITA',
                    type: 'Cross Country',
                    distance: 7,
                    painScale: 8
                }]);
            });
    });

    it('returns specified object by id with GET and id', () => {
        return request(app)
            .get('/api/v1/trails/0')
            .then(res => {
                expect(res.body).toEqual({
                    name: 'PITA',
                    type: 'Cross Country',
                    distance: 7,
                    painScale: 8
                });
            });
    });

    it('updates the trail object with PUT', () => {
        return request(app)
            .put('/api/v1/trails/0')
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
