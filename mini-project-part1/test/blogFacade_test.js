
const mocha = require('mocha');

const User = require('../models/user');
const LocBlog = require('../models/locationBlog');

const {likeLocationBlog, addLocationBlog} = require('../facade/blogFacade');
const {addUser} = require('../facade/userFacade');

// Connects to test-DB in mongoDB
require('../dbConnect')(require('../settings').TEST_DB_URI);

describe("test blog Facade", function(){
  var user;

  before(async function(){
    // do something before the test ** IF NEEDED **
      addUser(
      "createBlog", 
      "c1", 
      "c1", 
      "c1",
      "c1@c1.dk"
      );
  })

  it("tests addLocationBlog", async function(){
    var userid = await User.find({firstName:"createBlog"}).exec()
      .then((data) => {
        return data[0]._id
      })
      .catch((err) => console.log(err));
    
    addLocationBlog("Welcome to this first test blog","URL", {})

  })

})
