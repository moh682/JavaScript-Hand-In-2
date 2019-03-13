
const { expect } = require('chai');
const calc = require('../calc');
const fetch = require('node-fetch');
const PORT = 2345;
const URL = `http://localhost:${PORT}/api/calc/add/`;
let server;


describe('Calculator API', function () {

  describe('Testing the basic Calc API', function () {
    it('it add 4 + 3, should return 7', function () {
      const result = calc.add(4, 3);
      expect(result).to.be.equal(7); // expect 7
    }); // ** it **

  }); // Test Basic Calc API

  describe('Testing the REST Calc API', function () {
    before(function () {
      calc.calcServer(PORT, function (s) {
        server = s;
      }) // calcServer
    }) // ** before **
    after(function () {
      server.close();
    }) // after

    it('it add 4 + 3, should return 7', async function () {
      const result = await fetch(URL + ' 4/3').then(r => r.text())
      expect(result).to.be.equal('7'); // expect 7
    }); // ** it **

  }); // Test REST Calc API


}); // Calculator API