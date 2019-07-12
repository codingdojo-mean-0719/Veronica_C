const express = require('express');
const app = express();
const server = app.listen(3000);
var io = require('socket.io').listen(server);
var bodyParser = require('body-parser');
var path = require("path");
var counter = 0
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));


io.sockets.on('connection', function (socket) {
 
  socket.on('button_click', function (data) {
    counter ++;
    console.log(counter);
   
    socket.emit('updated_counter', { counter: counter });
  });
    socket.on('reset_click', function () {
    counter = 0;
    socket.emit('updated_counter', { counter: counter });
  });
});

app.get('/', function (request, response) {
  response.render('index', { counter: counter });
})

