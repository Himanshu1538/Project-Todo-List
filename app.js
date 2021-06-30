//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = ["Buy food", "Cook food", "Eat food"];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

// A get request to home or root route.
app.get("/", function(req, res) {

  // Calling the function from module.
  let day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

// A post request to home or root route.
app.post("/", function(req, res) {
  // console.log(req.body);
  // Using the above console.log we get the idea how to use button to get the below if-else logic.
  var item = req.body.newItem;

  // Logic for adding items to different list i.e. main and work list.
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }


});

// A get request to work route.
app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

// A post request to work route.
app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

// A get request to about route.
app.get("/about", function(req, res){
  res.render("about");
});

// Setting the port 3000.
app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
