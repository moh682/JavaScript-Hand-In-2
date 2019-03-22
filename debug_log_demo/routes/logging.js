const express = require("express");
const router = express.Router();
const winston = require('winston');

router.get("/", function(req, res, next) {
  res.send("Logging page");
});
// errr, warn, info, verbose, debug, silly
winston.log("debug","An info message");

module.exports = router;