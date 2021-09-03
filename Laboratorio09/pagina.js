const http = require('http');
const fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }
const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type','text/html');
    response.write(html);
    response.end();
});

server.listen(3000);

});