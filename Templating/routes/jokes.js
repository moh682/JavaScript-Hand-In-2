var express = require('express');
var router = express.Router();
var Jokes = require('../model/jokes')

/* GET users listing. */
router.get('/', function(req, res, next){
  res.render('jokes', {"jokes": Jokes.getAllJokes(),"title": "Joke Generator"});
})

// get a random Joke
router.get('/random',function(req, res, next){
  res.render('jokes',{"joke": Jokes.getRandomJoke()});
})

// This needs refactoring
router.get('/addjoke', function(req, res, next){
  res.render('addJoke', { "title": "Add a Joke"});
})

router.post('/addjoke', function(req, res, next){
  let joke = req.body.joke
  Jokes.addJoke(joke);
  res.render('addJoke', { "title": "Add a Joke"});
})
module.exports = router;
