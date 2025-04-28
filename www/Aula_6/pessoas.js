class Pessoa {
    nome;
    idade;

    falar(){
        console.log("Olá, eu sou " + this.nome);
        console.log("Minha idade é " + this.idade);
    }

}
 
//criando objeto
var pessoa1 = new Pessoa();
pessoa1.nome = "Vitor"
pessoa1.idade = 26


//chamar
pessoa1.falar("Vitor", 26);