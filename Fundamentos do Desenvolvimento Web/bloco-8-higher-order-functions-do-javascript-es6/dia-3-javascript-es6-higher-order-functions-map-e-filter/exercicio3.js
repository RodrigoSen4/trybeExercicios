const exportBooks = require('./books');

/* 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
 */

const ficçãoOuFantasia = exportBooks.filter((propridades) => propridades.genre === 'Fantasia' || propridades.genre === 'Ficção Científica');


console.log(ficçãoOuFantasia);

