var express = require("express");
var app = express();
app.get('/', function(request, response){
    response.send();
})

app.listen(8000, function(){
    console.log("Listening on 8000");
})

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');