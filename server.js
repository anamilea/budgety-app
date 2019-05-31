const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');
const api = require('./server/routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, './dist/dizertatie-app')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname ,'dist/dizertatie-app/index.html'));
});

const port = process.env.PORT || '5000';
app.set('port', port);

const server = http.createServer(app);


server.listen(port, () => console.log(`API running, dirname is ${__dirname} `+ ` on localhost:${port}`));


