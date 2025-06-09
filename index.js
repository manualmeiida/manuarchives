const express = require('express');
const app = express();
const tarefasRoutes = require('./routes/tarefas');

app.use(express.json());
app.use('/tarefas', tarefasRoutes);

app.listen(3000, () => {
    console.log("Servidor backend rodando em https://localhost:3000")
})