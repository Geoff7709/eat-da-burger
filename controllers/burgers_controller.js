const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get('/', function(req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject);
    });
})

router.post('/', function(req, res) {
    console.log(req.body)
    burger.make(req.body.burger_name, function(data) {

        res.redirect('/')

    })
})

router.put('/:id', (req, res) => {
    burger.eat(req.params.id, function(data) {
        console.log("post:" + data)
        res.redirect('/')
    })
})

module.exports = router;