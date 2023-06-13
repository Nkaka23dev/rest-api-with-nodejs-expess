const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-us':
            path += '';
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            break;
        default:
            res.statusCode = 404;
            path += "404.html";
            break
    }

    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error, "Error occured")
        } else {
            res.write(data);
            res.end();
        }
    })
})
server.listen(8000, "LocalHost", () => {
    console.log("Connection successfully created on port 3000")
})
