const express = require('express');
const router = express.Router();
const {
  Client
} = require('pg');

var connectionString =
  "postgres://velypjqqksivzw:053bae585a9fc031019c0616372ab12114a20fdfc84f9395ef000f37cd9f5414@ec2-54-247-96-169.eu-west-1.compute.amazonaws.com:5432/ddutuvr3f1jsra";
const client = new Client({
  connectionString: connectionString,
  ssl: true
});
async function connect() {
  await client.connect();
}
connect();


router.get('/users', function (req, res, next) {
  client.query('SELECT * FROM Users where id = $1', [1], function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});


router.post('/expenses/:id', (req, res) => {

  client.query('INSERT INTO Expenses( value, user_id, date, name, category)  VALUES ( $1, $2, $3, $4, $5) RETURNING id, user_id, value, date, name;', 
  [req.body.price, req.params.id, req.body.date, req.body.name, req.body.category], 
  function (err, result) {
    if (result.rowCount === 1) {
      console.log(result.rows);
      res.json(result.rows);
    } else {
      console.log(err);
      res.status(400).send(err);
    }
  });
});


router.put('/expenses/:id', (req, res) => {

  client.query('UPDATE Expenses SET value = $1, name = $2 WHERE id= $3;', [req.body.value, req.body.name, req.params.id], function (err, result) {
    if (result.rowCount === 1) {
      res.json('ok');
    } else {
      console.log(err);
      res.status(400).send(err);
    }
  });
});


router.get('/expenses/:id', (req, res) => {

  client.query(`SELECT name, value, TO_CHAR(date :: DATE, 'DD Mon, yyyy') AS date, id, category FROM Expenses where user_id = $1`, [req.params.id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }

    res.status(200).send(result.rows);
  });
});

router.delete('/expenses/:id', (req, res) => {
  client.query('DELETE FROM Expenses where id = $1', [req.params.id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.json('ok');
  });
});


module.exports = router;
