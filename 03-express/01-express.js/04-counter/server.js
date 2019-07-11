var session = require('express-session');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');


var app = express();


app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('static')));
app.use(session({
    secret:'secretfjgrgword',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.get('/', (request, response) => {
  response.render('index', { counter: Counter(request) });
});

app.post('/adding', (request, response) => {
  Counter(request);

  response.redirect('/');
});

app.post('/reset', (request, response) => {
  request.session.destroy();

  response.redirect('/');
});

function Counter(request) {
  return request.session.counter = request.session.counter ? request.session.counter + 1 : 1;
}


app.listen(8000, function () {
    console.log("listening on port 8000");
  })