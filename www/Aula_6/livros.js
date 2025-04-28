class Livro {
    titulo;
    autor;

    exibirInfo(){
        console.log("O titulo do livro é " + this.titulo);
        console.log("O autor do livro é " + this.autor);
    }
}

var meuLivro1 = new Livro();
meuLivro1.titulo = "Estilhaça-me"
meuLivro1.autor = "Tahereh Mafi"

meuLivro1.exibirInfo("Estilhaça-me","Tahereh Mafi");

var meuLivro2 = new Livro();
meuLivro2.titulo = "Liberta-me"
meuLivro2.autor = "Tahereh Mafi"

meuLivro2.exibirInfo("Liberta-me","Tahereh Mafi");

var meuLivro3 = new Livro();
meuLivro3.titulo = "Incendeia-me"
meuLivro3.autor = "Tahereh Mafi"

meuLivro3.exibirInfo("Incendeia-me","Tahereh Mafi");
