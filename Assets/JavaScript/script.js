//Api Key
var wordsApiKey = "89404d9e7emshb84fd6cf4678f81p15d0efjsneb0241320851";

const getWord = document.querySelector("#get_word");
var invi = document.querySelector(".invisible");
var definition = document.querySelector(".definition");
var answerForm = document.querySelector(".answer-form");
var userAnswer = document.getElementById("user-input");
var scoreText = document.querySelector(".score-text");
var score = 0;


// var newWord = document.querySelector(".word");


getWord.addEventListener("click", beginGen);

function beginGen() {
  fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true&hasDetails=definitions&letters=5", {
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
     var correctAnswer = data.word;
     console.log(correctAnswer);
     definition.textContent = data.results[0].definition;
     scoreText.textContent = score;
     answerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      if (userAnswer.value.toLowerCase() === data.word.toLowerCase()) {
        console.log("correct");
        score++;
      } else {
        console.log("incorrect");
      }
      return beginGen();
  
    })
     
  });

  

  invi.classList.remove("invisible");
  
}

// Select elements from html and assign to variables


// Function to fetch word apis and display to page
// create new elements, assign text content as fetch responses
// append new elements

// Function to fetch sounds

<<<<<<< HEAD
// window.onSpotifyWebPlaybackSDKReady = () => {
//   const token =
//     "BQBD2AgHF1VndFv108lnU2Gm-DFfguxOWO6N_Cd25YpLl4umcE27kSgO4wHaQoeLIWKWKY3tJ_xTwZplxQk8iRgnU7D4S0Q8ewKFS_fcNXKkFyYiajAwPDDZh0TgvXbKOJzR0HdhndE9bY9Y17-dNipybxCiocU";

//   const player = new Spotify.Player({
//     name: "Web Playback SDK Quick Start Player",
//     getOAuthToken: (cb) => {
//       cb(token);
//     },
//     volume: 0.5,
//   });
//   // this function is the event listner, when the play is clicked it plays
=======
window.onSpotifyWebPlaybackSDKReady = () => {
  const token =
    "BQDAWU8MOC8rvDQnI4QyLm1F0FutzGEMuc-NqJGwBuVehRbwYeq-pUv7nGD_DcOjpf_x9VgrjsV5g40md3gPdYXGa4Jf7ajFnpD7mqV_ij4qbY5DxSnZ0WQFOIhpl8063DncrGPBfhVeIMhlml6U6M-hyifz7cw";

  const player = new Spotify.Player({
    name: "Web Playback SDK Quick Start Player",
    getOAuthToken: (cb) => {
      cb(token);
    },
    volume: 0.5,
  });
  // this function is the event listener, when the play button is clicked it plays
>>>>>>> 851853f602892744e086e60a1a4c6edefc689c9b

//   document.getElementById("togglePlay").onclick = function () {
//     player.togglePlay();
//   };

//   player.connect();

//   // Ready
//   player.addListener("ready", ({ device_id }) => {
//     console.log("Ready with Device ID", device_id);

//     //this api fetches the list of tracks in the playlist

//     fetch("https://api.spotify.com/v1/playlists/37i9dQZF1EVHGWrwldPRtj", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then(async (resp) => {
//       const respData = await resp.json();
//       const tracks = respData.tracks.items;

//       // api call to initialize the player to play the list of tracks
//       fetch(
//         `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
//         {
//           method: "PUT",
//           body: JSON.stringify({
//             uris: tracks.map((item) => item.track.uri),
//           }),
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//     });
//   });
// };

