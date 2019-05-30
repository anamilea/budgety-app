const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


app.get('/api/users', function (req, res, next) {
    client.query('SELECT * FROM Users where id = $1', [1],function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

module.exports = router;