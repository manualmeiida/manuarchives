//subtrair parametros
function subtrair (x , y) {
    var resultado = x - y;
    console.log("O resultado será " + resultado);
}

subtrair(4,2);
subtrair(3,7);
subtrair(9,6);

//idade parametro
function VerificarIdade(idade) {
    if(idade >= 18) {
        console.log("Você é maior de idade");
    } else {
        console.log("Você é menor de idade");
    }
}

VerificarIdade("12")