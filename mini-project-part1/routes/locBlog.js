var express = require('express');
var router = express.Router();

const {  addLocationBlog,
  likeLocationBlog} = require('../facade/blogFacade');

router.post('/add', function(req,res,next){
  var userid = req.body.userid;
  var info = req.body.info;
  var pos = req.body.pos;
  var img = req.body.img != undefined ? req.body.img : " ";

  if(userid,info, pos, img !== undefined ){
  addLocationBlog(info, pos, userid, img);
  res.send("Everything went well");
  }
    
})

router.post('/like', function(req, res, next){
  var userid = req.body.userid;
  var blogid = req.body.blogid;

  likeLocationBlog(blogid, userid)
  res.send("you liked the page")
  })

module.exports = router;