const express = require('express');
const app = express()

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