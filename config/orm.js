const connection = require('./connection');


const orm = {
    selectall: function(){
        const queryString = `SELECT * FROM burgers`;
        connection.query(queryString, (err, data) => {
            if (err) throw err;
            console.log(data);
        })
    },
    insertOne: function() {
        console.log('insertOne')
    },
    updateOne: function() {
        console.log('updateOne')
    }
}
module.exports = orm;