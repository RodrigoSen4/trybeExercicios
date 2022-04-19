const custoProduto = 200;
const Imposto  = (custoProduto / 100) *20
const custoProdutoReal = custoProduto + Imposto
const valorVenda = 250;

let valorLucro = valorVenda - custoProdutoReal;

const vendaDeProdutos = valorLucro * 1000;

if (custoProduto >= 0 && Imposto >= 0 && custoProdutoReal >= 0 && valorVenda >= 0 && valorLucro >= 0 && vendaDeProdutos >= 0){
    console.log(vendaDeProdutos);
} else {
    console.log("Erro valor vazio")
}
