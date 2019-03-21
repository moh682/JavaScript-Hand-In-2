
const mocha = require('mocha');
const {expect} = require('chai');

const User = require('../models/user');
const LocBlog = require('../models/locationBlog');

const {likeLocationBlog, addLocationBlog} = require('../facade/blogFacade');
const {addUser} = require('../facade/userFacade');

// Connects to test-DB in mongoDB
require('../dbConnect')(require('../settings').TEST_DB_URI);

describe("test blogFacade", function(){

  var log;

  before(async function(){
    await LocBlog.deleteMany({});
  })

  it("test creation of a Blog and add it to user", async function(){

    var userid = await User.find({firstName:"firstname"}).select({_id:1}).exec()
      .then((data) => {
        if(data !== []){
         return data[0]
        }else{
          throw Error("User you were looking for doesnt exist")
        }
      })
      .catch((err) => err);

    log = await addLocationBlog("Welcome to this first test blog","URL",{longitude:50,latitude:13}, userid)
      .catch((err) => {throw err})

    expect(log.author).to.be.equal(userid);

  })

  it("test if user can like a blog", async function(){
        var users = await User.find({}).select({_id:1, firstName:1}).exec() 
      .then((data) => {
        if(data !== []){
         return [data[1],data[2]]
        }else{
          throw Error("User you were looking for doesnt exist")
        }
      })
      .catch((err) => err);
      
      log = await likeLocationBlog(log._id, [users[0]._id, users[1]._id]);

      expect(log.likedBy.length).to.be.equal(2);

  })

})
