let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = [];



for(let index = 0; index < array.length; index++) {
    if(array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}

console.log(maiorPalavra);