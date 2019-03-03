const express = require("express");
let app = express();

const PORT = 3000;

//Add your code here
app.listen(PORT,()=> {console.log(`Server started, listening on: ${PORT}`)});

app.use('/', function(req, res, next){
  var date = new Date()
  req.date = date;
  next()
})
app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){ 
  var operator = {
    '*': (a,b) => {return a * b},
    '/': (a,b) => {return a / b},
    '%': (a,b) => {return a % b},
    '-': (a,b) => {return a - b},
    '+': (a,b) => {return a + b}
  }
  var calculatorRequest = {
  operation: req.params.operation,
  n1: Number(req.params.n1),
  n2: Number(req.params.n2)
}

    let result = operator[calculatorRequest.operation](calculatorRequest.n1, calculatorRequest.n2);
 res.json({"operation":calculatorRequest.operation,"n1":calculatorRequest.n1,"n2":calculatorRequest.n2,"result":result,"date":req.date ,"headers": req.headers})
 })

app.get("/api/calculator/*",function(req,res){  
  res.send('The request to "/api/calculator/*" have been made')
 })
