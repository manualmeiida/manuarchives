class Aluno {
    nome;
    idade;
    curso;

    falar(){
        console.log("O nome do aluno é " + this.nome);
        console.log("A idade do aluno é " + this.idade);
        console.log("O curso do aluno é " + this.curso);
    }
}

var aluno1 = new Aluno();
aluno1.nome = "João"
aluno1.idade = 23
aluno1.curso = "Artes Visuais"

aluno1.falar("João", 23, "Artes Visuais");

var aluno2 = new Aluno();
aluno2.nome = "Pedro"
aluno2.idade = 22
aluno2.curso = "Educação Física"

aluno2.falar("Pedro", 22, "Educação Física");

var aluno3 = new Aluno();
aluno3.nome = "Marcos"
aluno3.idade = 19
aluno3.curso = "Fisioterapia"

aluno3.falar("Marcos", 19, "Fisioterapia");


