let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];



for(let index = 0; index < array.length; index++) {
    if(array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}

for (let i = 1; i < array.length; i++) {
    if (array[i].length < menorPalavra.length)
        menorPalavra = array[i];
}

console.log(menorPalavra);
console.log(maiorPalavra);