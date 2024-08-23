const request = require('supertest');
const app = require('../app');
const { describe, it, expect } = require('jest');


describe('GET /', () => {
  it('should respond with Hello, World!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});