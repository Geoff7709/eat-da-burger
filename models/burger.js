const orm = require('../config/orm');

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        })
    },

    make: function(newBurger, cb) {
        console.log(newBurger + 'nB')
        orm.insertOne("burger_name", newBurger, function(res) {
            cb(res)
        })
    },

    eat: function(id, cb) {
        orm.updateOne(id, function(res) {
            cb(res)
        })
    }
}

module.exports = burger;