var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/************  EMBEDING  **************/
var JobSchema = new Schema({
 type: String,
 company: String,
 companyUrl : String
});

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: {type: String, unique:true, required: true},
  password: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  // This is embeding
  job: [JobSchema],
  created: {type: Date, default: Date.now},
  lastUpdated: Date
});

/*************************************/

// Do on every save
UserSchema.pre("save", function(next){
  this.password = "Hash me Please and add some salt" + this.password;
  // calling next is important
  next();
});

// Do on every update
UserSchema.pre("update", function(){
  this.update({}, {$set : {lastUpdated: new Date()}});
  next()
});

var User = mongoose.model("User", UserSchema);

module.exports = User