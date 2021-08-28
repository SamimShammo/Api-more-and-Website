const kanye = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => myKanye(data))
}
kanye();
const myKanye = data =>{
    const quote = document.getElementById('quote')
    quote.innerText = data.quote
}