var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LocationBlogSchema = new Schema({
  info: {type: String, required: true},
  img: String, 
  pos: {
    // The reason long,lat because on Server 
    longitude: {type: Number, required: true},
    latitude: {type: Number, required: true},
  },
  author: {type: Schema.Types.ObjectId, ref: "User", required: true},
  // Why not use likedBy like above with author
  likedBy: [Schema.Types.ObjectId],
  created: {type: Date, default: Date.now},
  lastUpdated: Date
});

// When ever likedByCount is called this function will be returned
LocationBlogSchema.virtual("likedByCount").get(function(){
  return this.likedBy.length;
});

// Do on every save
LocationBlogSchema.pre("save", function(next){
  this.password = "Hash me Please and add some salt" + this.password;
  // calling next is important
  next();
});

// Do on every update
LocationBlogSchema.pre("update", function(){
  this.update({}, {$set : {lastUpdated: new Date()}});
  next()
});

var LocationBlog = mongoose.model("LocationBlog", LocationBlogSchema); 

module.exports = LocationBlog