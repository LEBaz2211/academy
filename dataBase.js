let mysql = require("mysql")


let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'lectures'
})

connection.connect(function (error) { if (error) console.log(error); })

module.exports = connection