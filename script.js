// api that fetches a quote
async function fetchQuote() {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '068e53c32fmsh49505e5411e1a01p16ca76jsnd0a08a30547e',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    }
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result)
      document.getElementById("quote").innerHTML = '<p>' + result.content + '</p>';
      document.getElementById("qAuthor").innerHTML = '<p>- ' + result.originator.name + '</p>';
      if (result.originator.description == "") {
        
      } 
      else {

      }
    } catch (error) {
      console.error(error);
    }
}



//shows a quote and the author of the quote when the website first loads up
fetchQuote();


//getting the buttons
const copyB = document.getElementById('btnC')
const AboutB = document.getElementById('btnA')
const NextB = document.getElementById('btnN')

NextB.addEventListener("click", function() {
    fetchQuote();
})








  