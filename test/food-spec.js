const chai = require('chai');
const request = require('supertest');
const app = require('../app');

chai.should();

describe('Sending a GET to /api/ice-creams', () => {
  describe('should succeed', () => {
    it('in getting all ice cream flavors', (done) => {
      request(app)
        .get('/api/ice-creams')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          const iceCreams = [
            {
              name: 'Raising',
              ingredients: ['milk', 'cream', 'raisins'],
              brand: 'Sweet Cow'
            },
            {
              name: 'Chunky Monkey',
              ingredients: ['milk', 'cream', 'banana'],
              brand: "Ben & Jerry's"
            },
          ];
          res.body.should.deep.equal(iceCreams);

          done();
        })
    })
  })
})
