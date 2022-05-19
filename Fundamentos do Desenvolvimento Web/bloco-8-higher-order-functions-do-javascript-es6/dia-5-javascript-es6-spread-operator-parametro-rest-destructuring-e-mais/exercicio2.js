/* 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. */


const numeros = [1, 2, 3, 4, 5, 6];

const soma = (...array) => array.reduce((acc, cur) => acc + cur, 0);

console.log(soma(1, 4, 7, 10));

