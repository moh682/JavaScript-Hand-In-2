const expect = require("chai").expect;
const myModule = require('module');
const {tempDir} = require('os');

// Demonstrate Async behavior 
describe("Testing async behaviour", function () {
  var foo = false;
  before(function (done) {
    // This should demonstrate the async behavior. finishing after 1000 ms
    setTimeout(function () {
      foo = true; // Assigning foo to true after 1000ms
      done();  //Test will fail without this
    }, 1000);
  });
  it("should pass (with done called)", function () {
    expect(foo).to.equal(true);
  });
});


describe('learnyounode modular Exercise TEST', function(){
  it("should find five *.js files", function (done) {
    myModule(tempDir, "js", function (err, data) {
      if (err) {
        throw err;
      }
      //assert.equal(data.length , 2);
      expect(data.length).to.be.equal(3);
      done();
    });
  })
})