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

//#region expenses
router.post('/expenses/:id', (req, res) => {
  let str = "";
  req.body.people.forEach(p => {
    str += p;
    str += ", ";
  });
  str = str.substring(0, str.length-2);

  client.query('INSERT INTO Expenses( value, user_id, date, name, category, people)  VALUES ( $1, $2, $3, $4, $5, $6) RETURNING id, user_id, value, date, name, people, category;', 
  [req.body.price, req.params.id, req.body.date, req.body.name, req.body.category, str], 
  function (err, result) {
    if (result.rowCount> 0) {
      res.json(result.rows);
    } else {
      console.log(err);
      res.status(400).send(err);
    }
  });
});


router.put('/expenses/:id', (req, res) => {

  client.query('UPDATE Expenses SET value = $1, name = $2 WHERE id= $3;', [req.body.value, req.body.name, req.params.id], function (err, result) {
    if (result.rowCount> 0) {
      res.json('ok');
    } else {
      console.log(err);
      res.status(400).send(err);
    }
  });
});


router.get('/expenses/:id', (req, res) => {

  client.query(`SELECT name, value, TO_CHAR(date :: DATE, 'DD Mon, yyyy') AS date, id, category, people FROM Expenses where user_id = $1`, [req.params.id], function (err, result) {
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
//#endregion

//#region economies
router.post('/economies/:id', (req, res) => {
  client.query('INSERT INTO Economies( value, user_id, name)  VALUES ( $1, $2, $3) RETURNING id, user_id, value, name;', 
  [req.body.price, req.params.id, req.body.name], 
  function (err, result) {

    if (result.rowCount> 0) {
      res.json(result.rows);
    } else {
      console.log(err);
      res.status(400).send(err);
    }
  });
});


router.put('/economies/:id', (req, res) => {

  client.query('UPDATE Economies SET value = $1, name = $2 WHERE id= $3;', [req.body.value, req.body.name, req.params.id], function (err, result) {
    if (result.rowCount > 0) {
      res.json('ok');
    } else {
      console.log(err);
      res.status(400).send(err);
    }
  });
});


router.get('/economies/:id', (req, res) => {

  client.query(`SELECT name, value, id FROM Economies where user_id = $1`, [req.params.id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }

    res.status(200).send(result.rows);
  });
});

router.delete('/economies/:id', (req, res) => {
  client.query('DELETE FROM Economies where id = $1', [req.params.id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.json('ok');
  });
});
//#endregion

//#region income
router.post('/income/:id', (req, res) => {
  client.query('INSERT INTO Incomes ( value, user_id, name)  VALUES ( $1, $2, $3) RETURNING id, user_id, value, name;', 
  [req.body.price, req.params.id, req.body.name], 
  function (err, result) {
   
    if (result.rowCount > 0) {
      res.json(result.rows);
    } else {
      console.log(err);
      res.status(400).send(err);
    }
  });
});


router.put('/income/:id', (req, res) => {

  client.query('UPDATE Incomes SET value = $1, name = $2 WHERE id= $3;', [req.body.value, req.body.name, req.params.id], function (err, result) {
  
    if (result.rowCount> 0) {
      res.json('ok');
    } else {
      console.log(err);
      res.status(400).send(err);
    }
  });
});


router.get('/income/:id', (req, res) => {

  client.query(`SELECT name, value, id FROM Incomes where user_id = $1`, [req.params.id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }

    res.status(200).send(result.rows);
  });
});

router.delete('/income/:id', (req, res) => {
  client.query('DELETE FROM Incomes where id = $1', [req.params.id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.json('ok');
  });
});
//#endregion

//#region invoice
router.post('/invoice/:id', (req, res) => {
  client.query('INSERT INTO Invoices ( value, user_id, name, reccurence)  VALUES ( $1, $2, $3, $4) RETURNING id, user_id, value, name, reccurence;', 
  [req.body.price, req.params.id, req.body.name, req.body.reccurence], 
  function (err, result) {
   
    if (result.rowCount > 0) {
      res.json(result.rows);
    } else {
      console.log(err);
      res.status(400).send(err);
    }
  });
});


router.put('/invoice/:id', (req, res) => {

  client.query('UPDATE Invoices SET value = $1, name = $2 WHERE id= $3;', [req.body.value, req.body.name, req.params.id], function (err, result) {
  
    if (result.rowCount> 0) {
      res.json('ok');
    } else {
      console.log(err);
      res.status(400).send(err);
    }
  });
});


router.get('/invoice/:id', (req, res) => {

  client.query(`SELECT name, value, id, reccurence FROM Invoices where user_id = $1`, [req.params.id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }

    res.status(200).send(result.rows);
  });
});

router.delete('/invoice/:id', (req, res) => {
  client.query('DELETE FROM Invoices where id = $1', [req.params.id], function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.json('ok');
  });
});
//#endregion

module.exports = router;
