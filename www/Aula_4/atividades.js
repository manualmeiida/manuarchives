/*
===========================================
📘 Exercícios de Funções em JavaScript
💡 Nível: Iniciante
🎯 Objetivo:
Praticar a criação e o uso de funções em JavaScript,
utilizando a palavra-chave 'function' e a declaração de variáveis com 'var'.

🚀 Bons estudos!

1 - Converter Celsius para Fahrenheit
Crie uma função converterParaFahrenheit que receba a temperatura em Celsius e retorne o valor em Fahrenheit usando a fórmula:
F = (C × 1.8) + 32

2- Calcular média de 3 notas
Crie uma função mediaNotas que receba três números e retorne a média.

3 - Quadrado de um número
Crie uma função quadrado que receba um número e retorne o número ao quadrado.

4 - Converter minutos em segundos
Crie uma função minutosParaSegundos que receba um número de minutos e retorne quantos segundos tem.
segundos = minutos * 60

5 - Converter horas em minutos
Crie uma função horasParaMinutos que receba um número de horas e retorne o total em minutos.
minutos = horas * 60

6 - Verificar se dois nomes são iguais
Crie uma função nomesIguais que receba dois nomes e exiba "Iguais" se forem iguais, e "Diferentes" caso contrário.


===========================================
*/

//1
function converterParaFahrenheit(Celsius) {
    var resultado = (Celsius * 1.8 + 32)
    return resultado;
}

var valor = converterParaFahrenheit(50);
console.log("O valor da temperatura é " + valor)

//2
function mediaNotas(nota1,nota2,nota3) {
    var resultado = (nota1 + nota2 + nota3) /3
    return resultado;
}

var valor = mediaNotas(1,2,3)
console.log("A média das notas é " + valor)

//3
function quadrado(numero) {
    var resultado = (numero * numero)
    return resultado;
}

var valor = quadrado(5)
console.log("O valor ao quadrado é " + valor)

//4
function minutosParaSegundos(minutos) {
    var segundos = (minutos * 60)
    return segundos;
}

var valor = minutosParaSegundos(24)
console.log(valor + " segundos")

//5
function horasParaMinutos(horas) {
    var minutos = horas * 60
    return minutos
}

var valor = horasParaMinutos(5)
console.log(valor + " minutos")

//6
function nomesIguais(nome1,nome2) {
    if(nome1 == nome2) { 
    console.log("Iguais")
} else {
    console.log("Diferentes")
}
}
 
nomesIguais("manu" ,"ana")