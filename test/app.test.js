const request = require('supertest');
const assert = require('assert');
const app = require('../app');

describe('GET /', function () {
  it('should return status code 200 if endpoint is working', async function () {
    const res = await request(app).get('/');

    assert.equal(res.status, 200);
  });
});
