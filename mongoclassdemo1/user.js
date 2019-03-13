var mongoose = require('mongoose')
var mongodb = "mongodb+srv://admin:admin@gettingstarted-9sv1o.mongodb.net/classdemo1?retryWrites=true";
// Connecting to MongoDB {String from site}
mongoose.connect(mongodb,
  // for more information: http://slides.mydemos.dk/noSQL/mongo_mongoose.html#16 
  { useNewUrlParser: true, useCreateIndex: true }
)
  .then((con) => console.log("Connected to Mongo"))
  .catch((err) => console.log("UPPS: " + err))

// Close database after 3 sec
setTimeout(() => 
mongoose.disconnect(() => console.log("Disconnected"))
, 3000);

var userSchema = new mongoose.Schema({
  userName: String,
  email: { type: String, unique: true },
  craeted: { type: Date, default: Date.now }
});

// Build the User model
var User = mongoose.model('User', userSchema);

async function addUser(userName, email) {
  var user = new User({ userName, email });
  await user.save();

}

// Test Creating Users in MongoDB
async function testAddUser() {
  try {
    // Deletes all the users when not specifiying what to delete in argument
    await User.deleteMany({});
    await addUser("aaaa", "a@blur.dk");
    await addUser("bbbb", "b@blur.dk");
    await addUser("cccc", "c@blur.dk");
    await addUser("dddd", "d@blur.dk");
    await addUser("Kurt Wonnegut", "kurt@blur.dk");
    await addUser("Peter Wonnegut", "peter@blur.dk");
    await addUser("ib Wonnegut", "ib@blur.dk");
    console.log("Users Added");
  } catch (err) {
    console.log("ERROR in Add Users: " + err)
  }
}
//testAddUser();

async function findUser(fields, projection){
  return await User.find({userName: /Wonnegut/i }, {userName: 1, _id : 0})
  .sort({userName : -1}) // Sort direction -1 / 1
  .collation({locale: "da"})
  .limit(6);
  //return await User.find(fields, projection)
}

async function testFinderUser(){
  var users = await findUser("asdads", "asd");
  console.log(users);
}
//testFinderUser();

async function updateUser(){
  var user = await User.findOneAndUpdate(
    {userName: "aaaa"}, // Locate 
    {email: "asfedenyeemail@gmail.com"}, // Update variable
    {new:true}) // return the updated user || By defualt return value is old User
    console.log(user)
}

//updateUser()


async function deleteUser(){
  await User.findOneAndRemove(
    {userName: "bbbb"})
  var user = await User.findOne({userName: "bbbb"});
  console.log("Status: " + (user === null));
} 
deleteUser()