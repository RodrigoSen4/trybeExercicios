const exportBooks = require('./books');

/* 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
Dica: use as funções map, sort */


function nameAndAge() {
    return exportBooks
      .map((book) => (
        {
          author: book.author.name,
          age: book.releaseYear - book.author.birthYear,
        }
      ))
      .sort((obj1, obj2) => obj1.age - obj2.age);
  };

    console.log(nameAndAge(exportBooks));