const e = require('express');
const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('Bem-vindo ao servidor express')
 })

 app.get('/sobre', (req,res) => {
    res.send('Este é um projeto de exemplos com rotas.')
 })

 app.get('/contato', (req,res) =>{
    res.send('Entre em contato pelo email: seuemail@email.com')
 })

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})