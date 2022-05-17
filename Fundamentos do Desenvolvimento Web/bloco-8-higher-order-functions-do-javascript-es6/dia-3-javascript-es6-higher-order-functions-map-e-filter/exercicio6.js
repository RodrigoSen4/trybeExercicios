const exportBooks = require('./books');

/* 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
 */

const livrosMaisQue60 = exportBooks.filter((books) => 2022 - books.releaseYear > 60).sort((b, a) => b.releaseYear - a.releaseYear).map((name) => name.name);

console.log(livrosMaisQue60);