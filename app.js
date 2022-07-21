const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')



app.get('/', function(req, res) {
 
    var today = new Date()
    var day = today.getDay()


    switch (day) {
        case 0:
            res.render('List.ejs', {date: 'Sunday'})
            break;
        case 1:
            res.render('List.ejs', {date: 'Monday'})
            break;
        case 2:
            res.render('List.ejs', {date: 'Tuesday'})
            break;
        case 3:
            res.render('List.ejs', {date: 'Wednesday'})
            break;
        case 4:
            res.render('List.ejs', {date: 'Thurs'})
            break;
        case 5:
            res.render('List.ejs', {date: 'fri'})
            break;
        case 6:
            res.render('List.ejs', {date: 'sat'})
            break;
        default:
            res.render('List.ejs', {date: "its today"});
    }


        console.log(day)

            
            
})


 










app.listen(3000, function(req, res){
    console.log("Server started on port 3000")
})