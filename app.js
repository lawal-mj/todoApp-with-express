const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// to hold the new tasks 
var items = []

app.get("/", function (req, res) {
  var today = new Date();
  var day = today.getDay();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  res.render('List', {date:day, newListItem: items})

});


app.post('/', function(req, res){
    var item = req.body.newTask;
    // adds new items to the new tasks list 
    items.push(item)
    res.redirect('/')

})



app.listen(3000, function (req, res) {
  console.log("Server started on port 3000");
});
