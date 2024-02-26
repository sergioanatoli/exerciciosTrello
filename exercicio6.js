const prompt = require("prompt-sync")();

const array = [];

for(let i = 0; i < 5; i++){
    let pegarNumeros = parseInt(prompt("Escreva um numero: "));
    array.push(pegarNumeros);
    console.log(array);
}

const pares = array.filter(elementos => elementos % 2 == 0);

console.log(pares);