const express = require('express');
const app = express();
const server = app.listen(3000);
var io = require('socket.io').listen(server);
var bodyParser = require('body-parser');
var path = require("path");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));


io.sockets.on('connection',(socket)=>{
    socket.on('color', (data)=>{
        
        io.emit('bg-color',data)
    })
})

app.get('/', function (request, response) {
  response.render('index');
})

