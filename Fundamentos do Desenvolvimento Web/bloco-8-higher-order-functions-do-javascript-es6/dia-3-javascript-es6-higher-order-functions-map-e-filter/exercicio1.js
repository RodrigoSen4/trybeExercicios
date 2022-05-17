const exportBooks = require('./books');

/* 🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA */

const nomeGeneroAutor = exportBooks.map((arr) => `${arr.name} - ${arr.genre} - ${arr.author.name}`);

console.log(nomeGeneroAutor);