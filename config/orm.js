const connection = require('./connection');


const orm = {
    selectAll: function(tableName, cb){
        const queryString = "SELECT * FROM " + tableName + ";"
        connection.query(queryString,(err, data) => {
            if (err) throw err;
            console.log("ormData: " + data);
            cb(data);
        });
    },
    insertOne: function(colName, newBurger, cb) {
        console.log("ormData2: " + colName, newBurger)
        const queryString = "INSERT INTO burgers (" + colName + ") VALUES " + "('" + newBurger + "');" 
        connection.query(queryString, (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    },
    updateOne: function(id, cb) {
        const queryString = "UPDATE burgers SET devoured = 1 WHERE id = " + id +";"
        connection.query(queryString, (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    }
}
module.exports = orm;