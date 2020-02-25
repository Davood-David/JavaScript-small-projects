const quotes = [
    {
        name: 'author number 1',
        quote: 'quote number 1'
    },
    {
        name: 'author number 2',
        quote: 'quote number 2'
    },
    {
        name: 'author number 3',
        quote: 'quote number 3'
    },
    {
        name: 'author number 4',
        quote: 'quote number 4'
    },
    {
        name: 'author number 5',
        quote: 'quote number 5'
    }
]


const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuther = document.querySelector('#quoteAuther');
const quote = document.querySelector('#quote');
quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuther.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}