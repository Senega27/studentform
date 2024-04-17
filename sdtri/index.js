
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
var task =[];

var complete = ["finish jquery"];
//addtask
app.post('/submit', function (req, res) {
  var Name= req.body.name;
  var eMAIL= req.body.email;
  var phnum=req.body.number;
  var bg=req.body.blood;

  
  task.push(Name);
  task.push(eMAIL);
  task.push(phnum);
  task.push(bg);
  res.redirect("/");
});

app.get("/", function(req, res) {    
  res.render("index", { task: task, complete: complete });
});

app.listen(3000, function () {
  console.log('listening on port 3000!')
});
