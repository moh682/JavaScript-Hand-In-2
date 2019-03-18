const {expect} = require('chai');
const mocha = require('mocha');
const mongoose = require('mongoose');

const dbConnect = require('../dbConnect');
dbConnect(require('../settings').TEST_DB_URI);

const User = require('../models/user');
const {addUser, getAllUsers, findUserByName} = require('../facade/userFacade');

describe('Test addUser in userFacade',function(){

  before( async function(){
    // Removes all the values to test it again
    await User.remove({});

    // do something before the test start
    addUser(
      "firstname", 
      "lastname", 
      "username", 
      "password",
      "testEmail@email.dk"
      );
    addUser(
      "firstname2", 
      "lastname2", 
      "username2", 
      "password2",
      "testEmail@email.dk2"
      );
    addUser(
      "firstname3", 
      "lastname3", 
      "username3", 
      "password3",
      "testEmail@email.dk3"
      );

  });

  it('Test if the User is in the DB', async function(){
      var user = await User.find({firstName:"firstname"});
      expect(user[0].lastName).to.be.equal("lastname","Check for lastname");
      expect(user[0].email).to.be.equal('testEmail@email.dk', "check for email");
  });

  it("Test if You can Retrieve all Users", async function(){
    var users = await getAllUsers();
    expect(users[0].firstName).to.be.equal("firstname");
    expect(users[1].firstName).to.be.equal("firstname2");
    expect(users[2].firstName).to.be.equal("firstname3");
  });

  it("Test if you can retrieve User by firsname", async function(){
    var user = await findUserByName("firstname3");
    expect(user[0].firstName).to.be.equal("firstname3");
  })

  after(function(){
    // at the end of the test do something...
    // dbConnect.prototype.close
    //dbConnect.connection.close()
  });

})