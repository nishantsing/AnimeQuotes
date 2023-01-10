
document.getElementById('submit').addEventListener('click', e => {

    e.preventDefault();
    findCharacter();
})


function findCharacter() {
    const searchCharacter = document.getElementById('search-character').value
    if (searchCharacter) {
        try {
            fetch(`https://animechan.vercel.app/api/quotes/character?name=${searchCharacter}`)
                .then(response => response.json())
                .then(quotes => {
                    console.log(quotes)
                    let str = ''
                    if (document.getElementsByClassName('content')[0]) {
                        document.getElementsByClassName('content')[0].remove()
                    }

                    quotes.forEach(quote => {
                        console.log(quote)

                        str += `<h5>${quote.anime}</h5><p>${quote.quote}</p>`
                        // const h5 = document.createElement('h5');
                        // const node = document.createTextNode(quote.anime);
                        // h5.appendChild(node);
                        // document.body.appendChild(h5);

                        // const p = document.createElement('p');
                        // p.innerText = quote.quote

                        // document.body.appendChild(p);
                    })
                    const div = document.createElement('div');
                    div.classList.add('content')
                    div.innerHTML = str
                    document.body.appendChild(div);

                })


        } catch (err) {
            console.log(err.message)
        }
    }
}
