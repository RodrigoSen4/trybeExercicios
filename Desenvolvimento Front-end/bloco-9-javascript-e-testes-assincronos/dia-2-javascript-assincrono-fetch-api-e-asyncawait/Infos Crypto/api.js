const fetchCryptos = async () => {
    const url = 'https://api.coincap.io/v2/assets';

    const dados = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.data)
      .catch((error) => error.toString());
      return dados
}


const append = async () => {
    const dados = await fetchCryptos();
    const ol = document.getElementById('Lista-Moedas');


    dados.filter((element) => {
        if (element.rank <= 10){
            const li = document.createElement('li')
            li.innerText = `${element.name} (${element.symbol}): ${element.priceUsd}`;
            ol.appendChild(li);
        }
    })
/*     dados.forEach(dados => {
        const li = document.createElement('li')
        li.innerText = `${dados.name} (${dados.symbol}): ${dados.priceUsd}`;
        ol.appendChild(li);
    }); */
}



window.onload = append();


