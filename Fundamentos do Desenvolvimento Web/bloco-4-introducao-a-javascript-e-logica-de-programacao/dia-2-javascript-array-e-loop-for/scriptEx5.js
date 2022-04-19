let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero =0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maiorNumero) {
        maiorNumero =  numbers[i];
    }
}
console.log(maiorNumero)



//Encontrei essa solução no Stackoverflow : https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array//
/* var maior = 0;
for (var i = 0; i < meuArray.length; i++) {
   if ( meuArray[i] > maior ) {
      maior = meuArray[i];
   }
} */