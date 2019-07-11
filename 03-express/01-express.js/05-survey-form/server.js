//Have the server render views/index.ejs that has the form for the user to fill out
//The user fills out the form and submits
//submitted form gets sent to /result
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
   });
   
app.post('/results', function(req, res) {
    const submittedInfo = {
        name: req.body.name,
        location: req.body.location,
        favLanguage: req.body.favLanguage,
        comment: req.body.comment
};

    res.render("results", { userData: submittedInfo });
});


app.listen(8000, function() {
 console.log("listening on port 8000!");
});