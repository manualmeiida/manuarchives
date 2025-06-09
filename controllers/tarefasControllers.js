const conexao = require('../db/conexao');

exports.criarTarefas = (req,res) => {
    const { titulo, descricao } = req.body
        if (!titulo || typeof titulo != 'string' || titulo.trim() == '') {
        return res.status(400).send('Titulo é obrigatório!');
    }  

    conexao.query(
        'INSERT INTO tarefas (titulo, descricao) VALUES (?,?)',
        [
            titulo,
            descricao,
        ],
        (err) => {

        if (err) return res.status(500).send('Erro ao cadastrar tarefa');
            res.status(201).send('Tarefa cadastrada com sucesso!')
        }
    );
};


exports.listarTarefas = (req,res) => {
    conexao.query('SELECT * FROM tarefas', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscar Tarefas')
        }

        res.status(200).send(results)
    });
};
exports.filtrarTarefas = (req,res) => {
    const { status } = req.query
   
    conexao.query('SELECT * FROM tarefas where status = ?',[status], (err, results) => {
        if (err) {
            res.status(500).send('Erro ao buscar Tarefas')
        }

        res.status(200).send(results)
    });
};

exports.atualizarTarefas = (req,res) => {
    const { id } = req.params;
    const { titulo, descricao, status } = req.body;

    const query = 'UPDATE tarefas SET titulo = ?, descricao = ?, status = ? WHERE id = ?';
    conexao.query(query, [titulo, descricao, status, id], (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao atualizar');
        }

        if (results.affectedRows === 0) {
            return res.status(404).send('Tarefa não encontrada');
        }
        res.send('Tarefa atualizada com sucesso');
    });
};

exports.deletarTarefas = (req,res) => {
    const { id } = req.params;

    conexao.query('DELETE FROM tarefas WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao deletar');
        
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Tarefa não encontrada');

        }

        res.status(200).send('Tarefa deletada com sucesso');
    });
};
