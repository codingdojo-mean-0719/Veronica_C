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


const users = [];
const messages = [];

function theUser(user) {
  const usersCount = users.length;

  for (var i = 0; i < usersCount; i++) {
    if (user == users[i]) {
      return true;
    }
  }
  return false;
}

  // io.on('got_a_new_user', function(req) {
  //   app.io.broadcast('new_user', { new_user_name: req.data.name});
  //   req.io.emit('existing_user', users)
  // })

  io.sockets.on("connection", function(socket) {
    socket.on("page_load", function(data) {
      const existingUser = theUser(data.user);
      const event = existingUser ? 'existing_user' : 'load_messages';
      data = existingUser ? {
                    error: "This user already exits"
                  } : { current_user: data.user, messages: messages };

      if (!existingUser) {
        users.push(data.user);
      }

      socket.emit(event, data);
    });

    socket.on("new_message", function(data) {
      messages.push({ name: data.user, message: data.message });
      io.emit("post_new_message", { new_message: data.message, user: data.user });
    });
  });

  app.get("/", function(request, response){
    response.render("index")
  });
