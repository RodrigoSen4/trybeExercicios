const divParagrafo = document.getElementById('ConteudoDoTexto');
console.log(divParagrafo);
divParagrafo.style.border = '2px solid green';



const btn = document.querySelector('#btn');
btn.addEventListener('click', function(){
    const cor1 = document.querySelector('#Cor').value;
    let resultado = cor1;
    document.querySelector('#resultado').innerHTML = resultado;
    document.body.style.backgroundColor = resultado;
});

const btnText = document.querySelector('#btnTxt');
btnText.addEventListener('click', function(){
    const corDoTexto = document.querySelector('#corDoTexto').value;
    let corUsuario = corDoTexto;
    document.querySelector('#cordef').innerHTML = corUsuario;
    divParagrafo.style.color = corUsuario;
})