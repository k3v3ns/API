const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const axios = require('axios')
const app = express()

app.use(cors())

app.get('/inicio', (req, res) => {
    res.send('Hola desde tu primera ruta de la API')
})

const credential = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'veterinaria_estetica'
}

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

app.listen(4000, ()=>console.log('Hola soy el servidor'))

