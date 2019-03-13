const express = require('express');
const http = require('http');

// Basic Calculator API 

// adds values
function add(n1,n2){
  return n1 + n2;
}

// divide Values
function divide(n1,n2){
  return n1 / n2;
}

// Substract values
function subs(n1,n2){
  return n1 - n2;
}

// End of Basic Calculator API 

// REST Calculator API
function calcServer(port, isStartedCb){
  const app = express();
  app.get('/api/calc/add/:n1/:n2', (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    res.send(add(n1,n2).toString());
  }); // app.get Method

  let server = http.createServer(app);
  server.listen(port,() => {
    isStartedCb(server)
  });
}

module.exports = {
  add,calcServer
}