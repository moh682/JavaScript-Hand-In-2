var expect = require("chai").expect;
var http = require('http');
var app = require('../app');
var fetch = require("node-fetch");
var TEST_PORT = 3344;
var URL = `http://localhost:${TEST_PORT}/api`;
var jokes = require("../model/jokes");
var server;

describe("Verify the Joke API", function () {
  before(function (done) {
    server = http.createServer(app);
    server.listen(TEST_PORT, () => {
      console.log("Server Started")
      done()
    })
  })
  after(function (done) {
    server.close();
    done();
  })
  beforeEach(function () {
    jokes.addJoke(["aaa", "bbb", "ccc"])
  })

  it("Should add the joke 'ddd", async function () {
    var init = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ joke: "ddd" })
    }
    await fetch(URL + "/jokes/addjoke", init).then(r => r.json()).catch((err)=> console.log(err));
    //Verify result
    expect(jokes.getAllJokes()).lengthOf(5);
    expect(jokes.getAllJokes()).to.include("ddd")
  })
})
