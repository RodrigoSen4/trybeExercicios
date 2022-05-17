const exportBooks = require('./books');

/* 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
 */

const iniciais = exportBooks.filter((inicial) => inicial.author.name[1] === '.' && inicial.author.name[4] === '.' && inicial.author.name[7] === '.').map((name) => name.name);

console.log(iniciais);
