function cadastro(nome, idade) {
    if(!nome || !idade ) {
        console.log("Erro: Nome e idade são obrigatórios para o cadastro!");
    } else {
    console.log("Usuário cadastrado com sucesso");
    console.log("Nome de usuário: " + nome);
    console.log("Idade: " + idade);
    }
}
module.exports = cadastro;