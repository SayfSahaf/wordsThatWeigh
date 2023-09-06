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
      result = await response.json();
      console.log(result)
      document.getElementById("quote").innerHTML = '<p>' + result.content + '</p>';
      document.getElementById("qAuthor").innerHTML = '<p>- ' + result.originator.name + '</p>';
      if (result.originator.description == "") {
        AboutB.classList.remove('canClick');
        AboutB.classList.add('noClick')
      }
      if (result.originator.description == !"") {
        AboutB.classList.remove('noClick')
        AboutB.classList.add('canClick')
        
      }
    } catch (error) {
      console.error(error);
    }
}



//shows a quote and the author of the quote when the website first loads up
fetchQuote();


//getting the buttons

let result;
const copyB = document.getElementById('btnC')
const AboutB = document.getElementById('btnA')
const NextB = document.getElementById('btnN')
const description = document.getElementById('description')
let isToggled = false;

NextB.addEventListener("click", function() {
    fetchQuote();
})

if (AboutB.classList.contains('canClick')) {
    AboutB.addEventListener('click', function() {
        isToggled = !isToggled

        if (isToggled) {
            description.innerHTML = '<p>' + result.originator.description + '</p>'
        }
        if (!isToggled) {
            description.innerHTML = ''
        }
    })
}








  