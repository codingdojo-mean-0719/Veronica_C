var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function (request, response) {
  response.send();
})
app.get("/cats", function (request, response) {
  response.render('cats');
})
app.get("/cats/Camila", function (request, response) {
  var cat_details = [
    { name: "Camila", food: "Loves salmon", age: 2, sleepingspots: ["Loves the backyard and get under the tree", "She likes the soft spots as well."], },
  ];
  response.render('details', { details: cat_details });
})
app.get("/cats/Furry", function (request, response) {
  var cat_details = [
    { name: "Furry", food: "Milk is his favorite!", age: 7, sleepingspots: ["He is an oldie cat that loves sleep any place.", "Enjoys the sunny places"], },
  ];
  response.render('details', { details: cat_details });
})
app.get("/cats/Bobbie", function (request, response) {
  var cat_details = [
    { name: "Bobbie", food: "Loves beef and chocolate", age: 3, sleepingspots: ["He loves to hide behind the bed", "Also sleeps on the chair."], },
  ];
  response.render('details', { details: cat_details });
})
app.listen(8000, function () {
  console.log("listening on port 8000");
})