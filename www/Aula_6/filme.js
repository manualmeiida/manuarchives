class Filme {
    titulo;
    genero;

    exibirInfo(){
        console.log("O titulo do filme é " + this.titulo);
        console.log("O gênero do filme é " + this.genero);
    }
}

var filme1 = new Filme();
filme1.titulo = "O Rei Leão"
filme1.genero = "Animação, Musical"

var filme2 = new Filme();
filme2.titulo = "Mogli: O Menino Lobo"
filme2.genero = "Drama, Fantasia, Aventura"

var filme3 = new Filme();
filme3.titulo = "O Pequeno príncipe"
filme3.genero = "Animação"

filme1.exibirInfo("O Rei Leão", "Animação, Musical");
filme2.exibirInfo("Mogli: O Menino Lobo", "Drama, Fantasia, Aventura");
filme3.exibirInfo("O Pequeno Príncipe", "Animação");