const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const { Client } = require('pg');
const api = require('./server/routes');

var connectionString = "postgres://velypjqqksivzw:053bae585a9fc031019c0616372ab12114a20fdfc84f9395ef000f37cd9f5414@ec2-54-247-96-169.eu-west-1.compute.amazonaws.com:5432/ddutuvr3f1jsra";
const client = new Client({
    connectionString: connectionString, ssl: true
});
async function connect(){
  await client.connect();
}
connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//var distDir = __dirname + "/dist";
app.use(express.static(path.join(__dirname, 'public')));


// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);


server.listen(port, () => console.log(`API running on localhost:${port}`));


