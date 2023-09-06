// asynchronous function that uses an api to fetch an object containing the quote and other details
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
      isToggled = false;
      description.innerHTML = ''
      document.getElementById("quote").innerHTML = '<p>' + result.content + '</p>';
      document.getElementById("qAuthor").innerHTML = '<p>- ' + result.originator.name + '</p>';
      if (result.originator.description == "") {
        AboutB.classList.remove('canClick');
        AboutB.classList.add('noClick')
      }
      else if (result.originator.description != "") {
        AboutB.classList.remove('noClick')
        AboutB.classList.add('canClick')
      }
    } catch (error) {
      console.error(error);
    }
}



//shows a quote and the author of the quote when the website first loads up
fetchQuote();


//getting the buttons and elements & initializing variables
let result;
const CopyB = document.getElementById('btnC')
const AboutB = document.getElementById('btnA')
const NextB = document.getElementById('btnN')
const description = document.getElementById('description')
let isToggled = false;

//event listener to fetch a new quote
NextB.addEventListener("click", function() {
    fetchQuote();
})

//event listener to toggle the appearance of the description of the author of the quote being displayed
AboutB.addEventListener('click', function() {
    isToggled = !isToggled
    if (isToggled) {
        description.innerHTML = '<p>' + result.originator.description + '</p>'
    }
    else {
        description.innerHTML = ''
    }
})


//adding code that will allow user to copy the quote as text

CopyB.addEventListener("click", function(){
    navigator.clipboard.writeText(`"${result.content}." - ${result.originator.name}`)
        .then(() => {
            alert('Copied')
        })  
        .catch((err) => {
            console.log("Couldn't copy", err)
        })
})







  