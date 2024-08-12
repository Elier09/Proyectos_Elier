const mysql = require("mysql")

const conection = mysql.createConnection({
    host:'localhost',
    user:'osiel',
    password:'osielcama123.',
    database:'crypto'
})

conection.connect( (err) =>{
    if(err) throw err
    console.log('la coneccion funciona')
})

conection.query('SELECT * from login', (err, rows) => {
if(err) throw err
console.log('Los datos de la tabla son: ')
console.log(rows)
})

conection.end()