const helloworld = require('../src/helloworld.js');
const assert = require('assert');
const request = require('supertest');

describe('Unit testing the / route', function() {

    it('should return helloworld message', function() {
      return request(helloworld)
        .get('/')
        .then(function(response){
            assert.equal(response.status, 200)
            assert.equal(response.text, 'Hello World!')
        })
    });
});