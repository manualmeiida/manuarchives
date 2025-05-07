//mensagem
require('./mensagem')

//saudação
const ola = require('./saudacao');

ola("Manu");

//soma
const soma = require('./soma');

var resultado = soma(5,4)
console.log("Resultado: " + resultado)

//idade
const verificarIdade= require('./idade');

verificarIdade(18)

//calculadora
const calc = require('./calculadora')

calc.somar(9,9)
calc.multiplicar(7,7)

//horas
const mostrarHora = require('./modulo/horas');

mostrarHora();
