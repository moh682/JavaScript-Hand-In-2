const User = require('../models/user');

// forget about position in this part
async function addUser(userName, password, email, firstName = 'undefined', lastName = "undefined", created = undefined){
    var user = new User({
      firstName: [firstName],
      lastName: [lastName],
      userName: [userName],
      password : [password],
      email: [email],
      created
    });
    await user.save();
}

async function getAllUsers(){
  // returns all
return await User.find({});
}

async function findUserByName(userName){
  return await User.find({
    "firstName": userName
    });
}

module.exports = {
  addUser,
  getAllUsers,
  findUserByName
}
