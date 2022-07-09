const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write("Hello, Welcome to my home page");
    // res.end();
    if (req.url === "/") {
        res.end("welcome to the homepage");
    }
    if (req.url === "/About") {
        res.end("this page is about");
    }
    res.end("<h1>Oops!</h1><p>we can't seem to find the page you were looking for</p><a href='/'>back home</>");
})
server.listen(5000);