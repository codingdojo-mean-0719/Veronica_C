var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
   
    // this is how we do routing:
    if(request.url === '/cats.html') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars.html") {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/new.html") {
        fs.readFile('./views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/styleSheets/style.css'){
        fs.readFile('./styleSheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cats/cat2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cats/cat2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/images/cats/furry_cat.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cats/furry_cat.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
    }
    else if(request.url === '/images/cats/hi-cat.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cats/hi-cat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
    else if(request.url === '/images/cats/small_kittie.jpg'){
    // notice we won't include the utf8 encoding
    fs.readFile('./images/cats/small_kittie.jpg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
    }
    else if(request.url === '/images/cars/future.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cars/future.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cars/pink_car.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cars/pink_car.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cars/white_car.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cars/white_car.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");