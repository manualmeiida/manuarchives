const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());

const agendamento = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'centro_treinamento'
})

app.post('/sessoes', (req,res) => {
    const sessoes = {
        aluno: req.body.aluno,
        personal: req.body.personal,
        tipo_treino: req.body.tipo_treino,
        data: req.body.data,
        horario: req.body.horario,
        observacoes: req.body.observacoes,
    }

    if (!sessoes.aluno || typeof sessoes.aluno  != 'string' || sessoes.aluno.trim() == '') {
        return res.status(400).send('Nome do aluno é obrigatório!');
    }

    if (!sessoes.personal || typeof sessoes.personal  != 'string' || sessoes.personal.trim() == '') {
        return res.status(400).send('Nome do personal é obrigatório!');
    }

    if (!sessoes.tipo_treino || typeof sessoes.tipo_treino  != 'string' || sessoes.tipo_treino.trim() == '') {
        return res.status(400).send('Tipo de treino é obrigatório!');
    }

    if (!sessoes.data || typeof sessoes.data  != 'string' || sessoes.data.trim() == '') {
        return res.status(400).send('A data é obrigatória!');
    }

    if (!sessoes.horario || typeof sessoes.horario  != 'string' || sessoes.horario.trim() == '') {
        return res.status(400).send('O horário é obrigatório!');
    }

    agendamento.query(
        'INSERT INTO sessoes (aluno, personal, tipo_treino, data, horario, observacoes) VALUES (?, ?, ?, ?, ?, ?)',
        [sessoes.aluno, sessoes.personal, sessoes.tipo_treino, sessoes.data, sessoes.horario, sessoes.observacoes],
        () => {
            res.status(201).send('Sessao cadastrada com sucesso!!')
        }
    );
})

app.get('/', (req,res) => {
    res.send("Servidor Express funcionando!")
})

app.get('/sessoes', (req,res) => {
    agendamento.query('SELECT * FROM sessoes', (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao buscar sessoes')
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
})