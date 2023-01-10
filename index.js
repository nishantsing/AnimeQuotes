
const h1 = document.querySelectorAll('h1')[0];

fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => {
        console.log(quote)
        h1.innerText = quote.anime
    })

