var express = require('express');
var router = express.Router();

var {  addUser,
  getAllUsers,
  findUserByName} = require('../facade/userFacade');

/* GET users listing. */
router.get('/all', async function(req, res, next) {
  var users = await getAllUsers();

  res.json(users);
});

router.get('/:name', async function(req, res, next){
  var name = req.params.name;
  var user = await findUserByName(name);
  res.json(user);
})

router.post('/add', async function(req,res,next){
  var username = req.body.userName;
  var password = req.body.password;
  var email = req.body.email;

  var user = await addUser(username, password, email)
    .then((data) => { return data})
    .catch((err) => { 
      res.json(err.errmsg);
      })
  res.json(user);
  // returns the user
})

module.exports = router;
