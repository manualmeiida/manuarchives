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


//plano assinatura
app.post('/plano_assinatura', (req,res) => {
    const {nome, duracao_meses ,preco ,descricao} = req.body

    if (!nome || typeof nome  != 'string' || nome.trim() == '') {
        return res.status(400).send('Nome é obrigatório!');
    }

    if (!duracao_meses || typeof duracao_meses  != 'string' || duracao_meses.trim() == '') {
        return res.status(400).send('Os meses são obrigatórios!');
    }

    if (!preco || typeof preco  != 'number' ) {
        return res.status(400).send('Preço é obrigatório!');
    }

    agendamento.query(
        'INSERT INTO plano_assinatura (nome, duracao_meses, preco, descricao) VALUES (?,?,?,?)',
        [
            nome,
            duracao_meses,
            preco,
            descricao,
        ],
        () => {
            res.status(201).send('Plano de assinatura cadastrada com sucesso!!')
        }
    )
})


app.get('/plano_assinatura', (req,res) => {
    agendamento.query('SELECT * FROM plano_assinatura', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscar planos')
        }

        res.status(200).send(results)
    })
})

app.delete('/plano_assinatura/:id', (req,res)=>{
    const {id}= req.params;
    agendamento.query('DELETE FROM plano_assinatura WHERE id = ?', [id],(err, results)=>{
        if(err){
            return res.status(500).send('Erro ao deletar');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Plano nao encontrado');
        } 

        res.status(200).send('Plano deletado com sucesso');
    });
});

app.put('/plano_assinatura/:id', (req,res) => {
    const { id } = req.params;
    const {nome, duracao_meses, preco, descricao} = req.body;

    const query = 'UPDATE plano_assinatura SET nome = ?, duracao_meses = ?, preco = ?, descricao = ? where id = ?';
    agendamento.query(query, [nome, duracao_meses, preco, descricao, id], (err, results) => {
        if(err) {
            return res.status(500).send('Erro ao atualizar');
        } 

        if (results.affectedRows === 0) {
            return res.status(404).send('plano não encontrado');
        }

        res.send('plano atualizado com sucesso');
    });
});


//sessoes
app.delete('/sessoes/:id', (req,res)=>{
    const {id}= req.params;
    agendamento.query('DELETE FROM sessoes WHERE id = ?', [id],(err, results)=>{
        if(err){
            return res.status(500).send('Erro ao deletar');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Sessao nao encontrada');
        } 

        res.status(200).send('Sessao deletada com sucesso');
    });
});

app.put('/sessoes/:id', (req,res) => {
    const { id } = req.params;
    const {aluno, personal, tipo_treino, data, horario, observacoes } = req.body;

    const query = 'UPDATE sessoes SET aluno = ?, personal = ?, tipo_treino = ?, data = ?, horario = ?, observacoes = ? where id = ?';
    agendamento.query(query, [aluno, personal, tipo_treino, data, horario, observacoes, id], (err, results) => {
        if(err) {
            return res.status(500).send('Erro ao atualizar');
        } 

        if (results.affectedRows === 0) {
            return res.status(404).send('Sessao não encontrada');
        }

        res.send('Sessao atualizada com sucesso');
    });
});

app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
})