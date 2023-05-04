const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("index")
})

app.get("/signin", function(req,res){
    res.render("signin")
})

app.get("/register", function(req,res){
    res.render("register")
})





app.listen(4000,"192.168.112.236" ,function() {
    console.log("Server started on port 4000");
  });