const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { Client } = require('pg');

var connectionString = "postgres://velypjqqksivzw:053bae585a9fc031019c0616372ab12114a20fdfc84f9395ef000f37cd9f5414@ec2-54-247-96-169.eu-west-1.compute.amazonaws.com:5432/ddutuvr3f1jsra";
const client = new Client({
    connectionString: connectionString, ssl: true
});
async function connect(){
  await client.connect();
}
connect();
app.use(bodyParser.json());

var distDir = __dirname + "/dis";
app.use(express.static(distDir));

app.set('port', process.env.PORT || 5000);
app.get('/api/users', function (req, res, next) {
    client.query('SELECT * FROM Users where id = $1', [1],function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});
app.listen(process.env.PORT || 5000, function () {
    console.log('Server is running.. on Port 4000');
});

// app.get('/api/users', function (req, res, next) {
//   client.query('SELECT * FROM Users where id = $1', [1], function (err, result) {
//       if (err) {
//           console.log(err);
//           res.status(400).send(err);
//       }

//       res.status(200).send(result.rows);
//   });
// });

// // Serve static files
// app.use(express.static(__dirname + '/dist/dizertatie-app'));

// // Send all requests to index.html
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/dizertatie-app/index.html'));
// });

// // default Heroku port
// app.listen(process.env.PORT || 5000);