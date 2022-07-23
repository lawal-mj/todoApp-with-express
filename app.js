const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require('./date')


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));





// the different tasks lists 
let items = ['buy food', 'cook food', 'eat food'];
let workItems = []

// a function from the module i created 
let day = date.getDate()



app.get('/', function(req, res){
  res.render('list', {listTitle: day, listItems: items});

})



app.post('/', function(req, res){
  
  var item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(item)
    res.redirect('/work')
  } 
  else{
    items.push(item)
    res.redirect('/')
  }
  

})




app.get('/work', function(req, res){
  res.render('list', {listTitle: "Work", listItems: workItems})
})



app.post('/work', function(req, res){
  let item = req.body.newItem
  workItems.push(item);
  res.redirect('/work')
})











app.listen(3000, function(){
  console.log("Listening....")
})



