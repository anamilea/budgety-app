const express = require('express');
const router = express.Router();
const { Client } = require('pg');

var connectionString = 
"postgres://velypjqqksivzw:053bae585a9fc031019c0616372ab12114a20fdfc84f9395ef000f37cd9f5414@ec2-54-247-96-169.eu-west-1.compute.amazonaws.com:5432/ddutuvr3f1jsra";
const client = new Client({
    connectionString: connectionString, ssl: true
});
async function connect(){
  await client.connect();
}
connect();

/* GET api listing. */
router.get('/xyz', (req, res) => {
  res.send('api works');
});

router.get('/users', function (req, res, next) {
    client.query('SELECT * FROM Users where id = $1', [1],function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

router.get('/expenses/:id', (req, res) => {
//onsole.log("TCL: req", req)
  
  console.log(req.params.id, '!!!!');
  client.query('SELECT * FROM Expenses where user_id = $1', [req.params.id],function (err, result) {
    if (err) {
        console.log(err);
        res.status(400).send(err);
    }
    
    res.status(200).send(result.rows);
    console.log("TCL: esult.rows", result.rows)
});
} );

// router.get('/expenses', (req, res) => {
//   client.query('SELECT * FROM Expenses where id = $1', [1],function (err, result) {
//     if (err) {
//         console.log(err);
//         res.status(400).send(err);
//     }
//     res.status(200).send(result.rows);
// });
// });

module.exports = router;