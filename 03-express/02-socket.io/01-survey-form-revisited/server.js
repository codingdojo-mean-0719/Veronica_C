const express = require('express');
const app = express();
const server = app.listen(3000);
var io = require('socket.io').listen(server);
var bodyParser = require('body-parser');
var path = require("path");
//var counter = 0;
io.sockets.on('connection', function(socket){
    console.log("socket", socket.id);
    socket.on('posted_form', function(data){
        var random_number= Math.floor((Math.random()*1000)+1);
        socket.emit('current_message', {response: data});
        socket.emit('random_number', {response: random_number});
    })
})

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


