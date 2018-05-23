var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
  console.log(__dirname,"/views/index.html");
}

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"/views/index.html"));
  });

// setup a 'route' to listen on the default url path (http://localhost)
//app.get("/", function(req,res){
//   res.send("Entrada<br /><a href='/index'>Go to the about page</a>");
//});

// setup another route to listen on /about
app.get("/index", function(req,res){
    res.sendFile(path.join(__dirname,"/views/index.html"));
  });

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);