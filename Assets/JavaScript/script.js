//Api Keys
var wordsApiKey = "89404d9e7emshb84fd6cf4678f81p15d0efjsneb0241320851";
const getWord = document.querySelector("#get_word")
var invi = document.querySelector(".invisible")

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

getWord.addEventListener("click", beginGen)
function beginGen(){
  invi.classList.remove("invisible")
}
  

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

