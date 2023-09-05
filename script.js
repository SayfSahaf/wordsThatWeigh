// api that fetches a quote

async function fetchData() {
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '068e53c32fmsh49505e5411e1a01p16ca76jsnd0a08a30547e',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      document.getElementById("quote").innerText = result.content;
    } catch (error) {
      console.error(error);
    }
}

// shows a quote and the author of the quote when the website first loads up
//fetchData();

document.getElementById("quote").innerText = 'This is random text for testing purposes. This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes. This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes.This is random text for testing purposes.'
document.getElementById("qAuthor").innerText = '- Neil Alexander Armstrong'
  