const showArticles = document.getElementById('show-articles')

// Click event to display philosophy articles
showArticles.addEventListener('click', () =>{
    showArticles.style.display = "none"

    document.getElementById('news').style.display = "flex"
})



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

const title = document.querySelectorAll('#title')
const link = document.querySelectorAll('#link')
// Fetch philosophy articles from the webscraper api and populate cards
function getNews(){
    fetch('https://dailyphilosophyapi.herokuapp.com/news/')
        .then((response) => response.json())
        .then((data) => {
            const newsArr = (data.slice(1,6))

            // Restrict the length of article headlines to 120 char
            const newsArrTrunc = newsArr.map((story) => {
                if(story.title.length >= 120){
                    return story.title.slice(0,120) + '...'
                }else{
                    return story.title 
                }
            })
            // newsArr has original data - newsArrTrunc has shortened titles
            for(let i = 0; i < newsArrTrunc.length;i++){
                title[i].innerText = newsArrTrunc[i]
                link[i].href = newsArr[i].url
                
            }
            
        })

        
        
}

getNews()

