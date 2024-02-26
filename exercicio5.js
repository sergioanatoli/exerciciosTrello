const prompt = require("prompt-sync")();

const numeros = [];

for(let i = 0; i < 5; i++){
    let pegarNumeros = parseInt(prompt("Escreva um numero: "));
    numeros.push(pegarNumeros);
    console.log(numeros);
}

numeros.sort((a,b) => a-b);

console.log("Numeros ordenados: ", numeros);