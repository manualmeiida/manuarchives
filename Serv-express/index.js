const e = require('express');
const express = require('express')

const app = express()

const curso = "Programador Back-End"

//rota principal
app.get('/', (req, res) => {
    res.send('Servidor Express funcionando!');
})

//nova rota: /sobre
app.get('/sobre', (req,res) => {
    res.send('Bem-vindo à página Sobre!');
})

app.get('/usuario', (req,res) => {
    res.send('Emanuele');
})

app.get('/senai', (req,res) => {
    res.send('curso: ' + curso);
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})
