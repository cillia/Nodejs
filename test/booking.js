'use strict';
const {expect} = require('chai');
const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('test des endpoints booking', function() {
  describe('création de la reservation, POST/reservation', function() {
    it('should return a 400 error', function() {
      return request
        .post('/bookings')
        .send({id_user: '123'})
        .expect(400);
        });
    });

})
