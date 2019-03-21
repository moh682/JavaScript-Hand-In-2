
const LocBlog = require('../models/locationBlog');
const User = require('../models/user');

async function addLocationBlog(info, pos, author, img){
  var loc = new LocBlog({
    info, img, pos, author
  });
  LocBlog.create(loc);
  //LocBlog.save();
  return loc;
}

async function likeLocationBlog(blogid, userid){
  var blog = await LocBlog.findOneAndUpdate({_id : [blogid]}, { $push: {likedBy: userid} }, {new: true}).exec();
  return blog;
}

module.exports = {
  addLocationBlog,
  likeLocationBlog
}