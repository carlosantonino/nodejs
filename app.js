const express = require('express');
const app = express()

const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'meubanco'
})



// parou no minuto 25:32 
// https://www.youtube.com/watch?v=5JnPd_YckQw&list=PLmY5AEiqDWwBHJ3i_8MDSszXXRTcFdkSu&index=7

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html")
})

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/src/contato.html")
})

app.get("/sobre", function(req, res){
    res.send("Sobre empresa")
})

app.get("/blog", function(req, res){
    res.send("Meu Blog")
})

app.listen(8080)