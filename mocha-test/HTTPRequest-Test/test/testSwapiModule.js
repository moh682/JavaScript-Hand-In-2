const expect = require("chai").expect;
const swapi = require("../swapi/swapiModule");
const nock = require("nock");
const testPerson = { "name": "Luke Skywalker", "height": "172", "mass": "77", }
const testPlanet = { "name": "Luke Skywalker", "height": "172", "mass": "77", }

const n = nock('https://swapi.co');

describe('swapiModule Get person', function () {
  //If you comment out this part, it will fetch from the REAL API (swapi.co/api)
  beforeEach(function () {
    n.get('/api/people/1').reply(200, testPerson);
  });
  //Observe the use of async/await to handle promises (no need for done)
  it('should fetch Luke Skywalker', async function () {
    let person = await swapi.getPerson(1);
    expect(person.name).to.be.equal("Luke Skywalker");
  });

});

describe('swapiModule Get starships', function () {
  // before 
  beforeEach(function () {
    n.get('/get/starships/1').reply(200, testPlanet);
  });
  if ('should fetch a planet', async function () {
    let planet = await swapi.getPlanet(1);
    expect(planet.name).to.be.equal("hello world");
  });

});