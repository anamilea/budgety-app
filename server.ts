
const path = require('path');
import * as http from 'http';
import * as express from 'express';

const bodyParser = require('body-parser');
const { Client } = require('pg');

var connectionString = "postgres://velypjqqksivzw:053bae585a9fc031019c0616372ab12114a20fdfc84f9395ef000f37cd9f5414@ec2-54-247-96-169.eu-west-1.compute.amazonaws.com:5432/ddutuvr3f1jsra";
const client = new Client({
    connectionString: connectionString, ssl: true
});

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.config();
        this.openDbConnection();
        this.api();
        this.setRoutes();
    }

    public config(): void {
        process.env.http_proxy = 'http://localhost:4200';
        this.express.use(express.static(path.join(__dirname, '../public')));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
     //   this.express.use(expressSession({ secret: 'shh', resave: true, saveUninitialized: false }));
    }

    public api(): void {
        this.express.use('/api/v1');
    }

    public setRoutes(): void {
        this.express.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/index.html'));
        });
    }

    private async openDbConnection() {
        try {
            await client.connect();
        } catch (err) {
            console.error(err);
        }
    }
}
export default new App().express;


this.App.set('port', (process.env.PORT || 5000));

const server = http.createServer(this.App);

server.listen(this.App.get('port'), () => {
    console.log('Budgety server is listening on port ' + this.App.get('port'));
});


this.App.get('/api/users', (req, res) => {
    client.query('SELECT * FROM Users where id = $1', [1],function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});
// async function connect(){
//  
// }
// connect();
// app.use(bodyParser.json());

// var distDir = __dirname + "/dist";
// app.use(express.static(distDir));

// app.set('port', process.env.PORT || 5000);

// app.get('/api/users', (req, res) => {
//     client.query('SELECT * FROM Users where id = $1', [1],function (err, result) {
//         if (err) {
//             console.log(err);
//             res.status(400).send(err);
//         }
//         res.status(200).send(result.rows);
//     });
// });

// app.listen(process.env.PORT || 5000, function () {
//     console.log('Server is running.. on Port 4000');
// });

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