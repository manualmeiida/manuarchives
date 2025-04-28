//criar classe
class Carro {
    marca;
    modelo;
    ano;

ligar() {
    console.log("O carro está ligado."); 
}
}

//criando objeto (instância)
var carro1 = new Carro()
carro1.marca = "Chevrolet"

console.log(carro1.marca)

//atividade
var carro1 = new Carro()
carro1.marca = "Ford"
carro1.modelo = "Mustang"
carro1.ano = "2015"

console.log(carro1.marca)
console.log(carro1.modelo)
console.log(carro1.ano)

var carro2 = new Carro()
carro2.marca = "RAM"
carro2.modelo = "Rampege RT"
carro2.ano = "2024"

console.log(carro2.marca)
console.log(carro2.modelo)
console.log(carro2.ano)

var carro3 = new Carro()
carro3.marca = "MClaren"
carro3.modelo = "Senna"
carro3.ano = "2018"

console.log(carro3.marca)
console.log(carro3.modelo)
console.log(carro3.ano)

