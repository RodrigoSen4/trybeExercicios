const exportBooks = require('./books');

/* 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
 */

const livrosMaisQue60 = exportBooks.filter((books) => 2022 - books.releaseYear > 60).sort((b, a) => b.releaseYear - a.releaseYear);

console.log(livrosMaisQue60);