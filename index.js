const http = require('http');
const fs = require('fs');
const path = require('path');
// const data = require('data');
const qs = require('querystring');

//create a server
var server = http.createServer(function(request, response){



    if (request.method === "GET"){

        if(request.url === "/" || request.url === "/home" || request.url === "/index"){
            fs.readFile('./public/index.html', 'UTF-8', function(error, contents){
                if (error){
                    console.log("there is an error");
                } else {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(contents);
                } //if and else close here
            })// readfile ends
        } //checking url ends
        else if(request.url === "/about" || request.url === "/about.html"){
            fs.readFile('./public/about.html', 'UTF-8', function(error, contents){
                if (error){
                    console.log("there is an error");
                } else {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(contents);
                } //if and else close here
            })// readfile ends
        } //checking url ends
        else if(request.url === "/contact" || request.url === "/contact.html"){
            fs.readFile('./public/contact.html', 'UTF-8', function(error, contents){
                if (error){
                    console.log("there is an error");
                } else {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(contents);
                } //if and else close here
            })// readfile ends
        } //checking url ends
        else if(request.url === "/news" || request.url === "/news.html"){
            fs.readFile('./public/news.html', 'UTF-8', function(error, contents){
                if (error){
                    console.log("there is an error");
                } else {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(contents);
                } //if and else close here
            })// readfile ends
        } //checking url ends
        //request url page mjst be linked to css file and that file is checked for matching
        else if (request.url.match(/.css$/)) {
            var cssPath = path.join(__dirname, 'public', request.url);
            var fileStream = fs.createReadStream(cssPath, 'UTF-8');
            response.writeHead(200, {'Content-Type': 'text/css'});
            fileStream.pipe(response)
        }//css path ends
    } // GET method ends





}).listen(3000);// server ends

console.log("i am working and running at http://192.168.33.10:3000/")