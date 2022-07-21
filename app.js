const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();
  var day = today.getDay();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  res.render('List', {date:day})

});


app.post('/', function(req, res){
    var newTask = req.body.newTask;

    console.log(newTask)
})



app.listen(3000, function (req, res) {
  console.log("Server started on port 3000");
});
