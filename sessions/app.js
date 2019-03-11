var cookieSession = require('cookie-session')
var express = require('express')

var app = express()

app.use(cookieSession({
  name: 'session',
  secret : "I_should_never_be_visible_in_code",
  maxAge: 24 * 60 * 30 // 30 min
}))