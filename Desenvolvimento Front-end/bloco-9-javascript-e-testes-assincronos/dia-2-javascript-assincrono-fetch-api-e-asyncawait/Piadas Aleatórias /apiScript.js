// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const append = (obj) => {
    const h2 = document.getElementById('jokeContainer');
    h2.innerText = obj.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
        const result = data
        append(result);
    });
};

window.onload = () => fetchJoke();