const http = require('http');
const { readFileSync, read } = require('fs');

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const navbarStyles = readFileSync('./navbar-app/styles.css');
const navbarLogo = readFileSync('./navbar-app/logo.svg');
const navbarJS = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    
    // home pa ge
    if (req.url === '/') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end();
    }

    //about page
    else if (req.url === '/about') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>about page </h1>')
        res.eånd();
    } 

     //styles
     else if (req.url === '/styles.css') {
        res.writeHead(200, {'content-type':'text/css'})
        res.write(navbarStyles)
        res.end();
    }

    // image
    else if (req.url === '/logo.svg') {
        res.writeHead(200, {'content-type':'text/svg+xml'})
        res.write(navbarLogo)
        res.end();
    }

     // JS
     else if (req.url === '/browser-app.js') {
        res.writeHead(200, {'content-type':'text/svg+xml'})
        res.write(navbarJS)
        res.end();
    }

    // else 404
    else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>not found page </h1>')
        res.end();
    }
    
})

server.listen(3000);