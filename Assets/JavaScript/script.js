//Api Keys
var wordsApiKey = "89404d9e7emshb84fd6cf4678f81p15d0efjsneb0241320851";


// This is just to test the API was working - Hannah
fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": wordsApiKey
	}
})
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);
})


// Select elements from html and assign to variables
// var wordBtn = document.querySelector("");


// Assign variable to  random word api url
//var wordDef = 
//var wordExamples = 
//var wordSyn = 
//var wordEx = 

// Function to fetch word apis and display to page
  // create new elements, assign text content as fetch responses
  // append new elements 




// Function to fetch sounds





// on click wordBtn, call fetch word function

// Matts work

const get_word_btn = document.getElementById('get_word');
const word_container = document.getElementById('word');

get_word_btn.addEventListener('click', () => {
  fetch('link to wordAPI')
    .then(res => res.json())
    .then(res => {
    createWord(res.word[0]);
  });
});
