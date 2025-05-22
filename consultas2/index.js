const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'consultorio'
})

app.post('/consultas', (req,res) => {
    const consultas = {
        paciente: req.body.paciente,
        medico: req.body.medico,
        especialidade: req.body.especialidade,
        data: req.body.data,
        horario: req.body.horario,
    }

    conexao.query(
        'INSERT INTO consultas (paciente, medico, especialidade, data, horario) VALUES (?, ?, ?, ?, ?)',
        [consultas.paciente, consultas.medico, consultas.especialidade, consultas.data, consultas.horario],
        () => {
            res.status(201).send('Consultas cadastradas com sucesso')
        }
    );
})

app.get('/', (req,res) => {
    res.send("Servidor Express funcionando!!")
})
app.get('/consultas', (req,res) => {
    conexao.query('SELECT * FROM consultas', (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao buscar consultas')
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
})