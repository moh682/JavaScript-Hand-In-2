const dbConnect = require('../dbConnect');
const dbString = require('../settings').DEV_DB_URI;
dbConnect(dbString);

const User = require('../models/user');

// forget about position in this part
function addUser(firstName, lastName, userName, password, email, created = undefined){
    var user = new User({
      firstName,
      lastName,
      userName,
      password,
      email,
      created
    });

    user.save();
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
