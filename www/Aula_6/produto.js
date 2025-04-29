class Produto {
    nome;
    preco;
    quantidade;

    exibirDetalhes(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        var calcularTotal = this.preco * this.quantidade;
        console.log("O resultado da soma é " + calcularTotal);

    }

}

var produto1 = new Produto();

produto1.exibirDetalhes("café", 24, 5);
