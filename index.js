const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const axios = require('axios')
const app = express()

app.use(cors())

app.get('https://servicio-estetica22.herokuapp.com', (req, res) => {
    res.send('Hola desde tu primera ruta de la API')
})

const credential = {
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b65f8b2aefe726',
    password: '11af13b9',
    database: 'heroku_b0651ecedbcc6b1'
}
//mysql://b65f8b2aefe726:11af13b9@us-cdbr-east-05.cleardb.net/heroku_b0651ecedbcc6b1?reconnect=true

app.get('/usuarios', (req, res) =>{
    var connection = mysql.createConnection(credential)
    connection.query('SELECT * FROM cliente', (error, result) => {
        if(error){
            res.status(500).send(error)
        }else{
            res.status(200).send(result)
        }
    })
    connection.end()
})

//app.listen(4000, ()=>console.log('Hola soy el servidor'))

