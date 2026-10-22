let configDB = require('./config/db');
let app = require("./config/express");
let http = require('http');

configDB().catch(console.dir);
var server = http.createServer(app);

// Render (and other cloud providers) set the port through the PORT variable.
const port = process.env.PORT || 3000;

server.on('listening', onListening);
server.listen(port);

function onListening(){
    console.log(`Server running at http://localhost:${port}/`);
}
