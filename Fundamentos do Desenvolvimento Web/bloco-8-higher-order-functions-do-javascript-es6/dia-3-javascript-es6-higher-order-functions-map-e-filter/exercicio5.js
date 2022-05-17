const exportBooks = require('./books');

/* 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
 */

const autores = exportBooks.filter((propridades) => propridades.genre === 'Fantasia' || propridades.genre === 'Ficção Científica').map((name) => name.author.name).sort();


console.log(autores);