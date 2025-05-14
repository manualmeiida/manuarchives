//push() → Adiciona item ao final
//pop() → Remove o último item
//length → Retorna o tamanho do array
//map() → Cria novo array com base nos itens existentes
//filter() → Filtra itens com base em uma condição
//forEach() → Executa uma função para cada item

//adiciona item ao final
let frutas = ['maçã', 'uva', 'laranja'];
console.log(frutas[0]); //exibe: maçã
console.log(frutas[2]); //exibe: laranja

frutas.push('abacate');
console.log(frutas);

//remove último item
frutas.pop();
console.log(frutas);

//tamanho do array
let numeros = [10,20,30,40];
console.log(numeros.lenght); //4

//filtra com base em condição
let nomes = ['Ana','Beatriz','João','Carlos'];
let nomeFiltrado = nomes.filter(nome => nome == "João");
console.log(nomeFiltrado);

let cores = ['azul', 'vermelho', 'verde'];
cores.forEach(cor => {
    console.log('Cor:', cor);
})
//saída:
//cor: azul
//cor: vermelho
//cor: verde