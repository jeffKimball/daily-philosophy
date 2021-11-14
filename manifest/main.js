// Fetch the quotes from quotes.json file and select one at random
function getQuotes() {
    let url = '/quotes.json'
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            
            let quotes = data.quotes
            let randomIndex = Math.floor(Math.random() * quotes.length) 
            let quote = quotes[randomIndex]

            document.getElementById('quote').innerHTML = quote.quote
            document.getElementById('author').innerHTML = quote.author
        })
}

getQuotes()


// Fetch philosophy articles from the webscraper api and populate cards
function getNews(){
    fetch('https://dailyphilosophyapi.herokuapp.com/news?limit=2')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })

        
        
}

getNews()

const showArticles = document.getElementById('show-articles')

showArticles.addEventListener('click', () =>{
    showArticles.style.display = "none"

    document.getElementById('news').style.display = "flex"
})