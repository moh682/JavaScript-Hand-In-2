
const LocBlog = require('../models/locationBlog');
const User = require('../models/user');

const dbConnect = require('../dbConnect');
dbConnect(require('../settings').TEST_DB_URI);

async function addLocationBlog(info, img, pos, author){
  var loc = new LocBlog({
    info, img, pos, author
  });
  LocBlog.create(loc);
  LocBlog.save();
  return loc;
}

async function likeLocationBlog(blogid, userid){
  var blog = await LocBlog.findOneAndUpdate({_id : [blogid]}, {likedBy: [userid]}, {new: true}).exec();
  return blog;
}

module.exports = {
  addLocationBlog,
  likeLocationBlog
}