const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("I shot the sheriff");
    res.render('index', { title: 'Poviem ti pribeh .online' });
});

module.exports = router;
