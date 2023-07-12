const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

async function getQuote() {
    try {
    btnEl.innerText = "Loading...";
    btnEl.displayed = true;
    quoteEl.innerText = "Updating ...";
    authorEl.innerText = "Updating ...";

    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()

    quoteEl.innerText = quote.content;
    authorEl.innerText = `~ ${quote.author}`;

    btnEl.innerText = "Get a quote";
    btnEl.displayed = false;
    } catch (error) {
        console.log(error);
        quoteEl.innerText = " An error happened, try again later ";
        authorEl.innerText = " An error happened ";
        btnEl.innerText = "Get a quote";
        btnEl.displayed = false;
    }
    
  }

  getQuote();

btnEl.addEventListener("click", getQuote);