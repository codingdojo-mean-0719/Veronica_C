const express = require('express');
const app = express();
const server = app.listen(8000);
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost/Quotes', { useNewUrlParser: true });
//mongoose.Promise = global.Promise;

var quoteSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, message: "Name is required" },
  quote: { type: String, required: true, message: "quote is required!" }
},
  { timestamps: true }
);

const Quote = mongoose.model('quotes', quoteSchema);


app.get('/', function (request, response) {
  response.render('index');
});


app.post('/quotes', function (req, res) {
  console.log("Post Data", req.body);
  var quote = new Quote(req.body);
  const errors = [];
  quote.save()
    .then(savedQuote =>{
        console.log(savedQuote);
    })
    .catch(error => {
        Object.keys(error.errors).forEach(key =>{errors.push(error.errors[key].messages);
        })
        console.log(errors);
    });
})

app.get('/quotes', function (req, res) {
  Quote.find({}).sort('-createdAt')
    .then(results => {
      res.render('quotes', { quotes: results });
    })
    .catch(error => {
      console.log("error fetching data:", errors)
    });
})