$(document).foundation();

//Api Key
var wordsApiKey = "89404d9e7emshb84fd6cf4678f81p15d0efjsneb0241320851";

// Selects elements from document and assigns to variables
const getWord = document.querySelector("#get_word");
var invi = document.querySelector(".invisible");
var definition = document.querySelector(".definition");
var saveWord = document.querySelector(".save");
var newWord = document.querySelector(".word");
var myWordsTable = document.querySelector(".my-words");
var myWordBtn = document.querySelector(".my-word-btn");

// Variable to be used in saving words to local storage
var words;

//Fetches random word with WordsAPI
function fetchWord () {
  return fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true&hasDetails=definitions&letters=5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": wordsApiKey
	}
})
.then(function (response) {
  return response.json();
})
};

//On click of Get Word button, beginGen function is called
getWord.addEventListener("click", beginGen);

//Returns fetch and displays data to page
function beginGen() {
  fetchWord()
  .then(function (data) {
     console.log(data);
     newWord.textContent = data.word;
     definition.textContent = data.results[0].definition;
     saveWord.classList.remove("invisible");
       words = JSON.parse(localStorage.getItem("words")) || [];
       words.push({"Words": newWord.textContent, "Def": definition.textContent }); 
  });
  invi.classList.remove("invisible");
}

//On click of Save Word button, the current word and definition are saved to localstorage
saveWord.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("words", JSON.stringify(words));
})


// Displays saved words and definitions to modal when My Word button is clicked
function renderMyWords() {
  $(".my-words").empty();
  var words = JSON.parse(localStorage.getItem("words")) || [];  
  for (const element of words) {
      var tableRow = document.createElement("tr");
      var wordSlot = document.createElement("td");
      var defSlot = document.createElement("td");
      myWordsTable.appendChild(tableRow);
      wordSlot.textContent = element.Words;
      defSlot.textContent = element.Def;
      tableRow.appendChild(wordSlot);
      tableRow.appendChild(defSlot);

    }
}

//On click of My Words button, calls renderMyWords function
myWordBtn.addEventListener("click", renderMyWords);


// Spotify player

window.onSpotifyWebPlaybackSDKReady = () => {
  const token =
    "BQBD2AgHF1VndFv108lnU2Gm-DFfguxOWO6N_Cd25YpLl4umcE27kSgO4wHaQoeLIWKWKY3tJ_xTwZplxQk8iRgnU7D4S0Q8ewKFS_fcNXKkFyYiajAwPDDZh0TgvXbKOJzR0HdhndE9bY9Y17-dNipybxCiocU";

  const player = new Spotify.Player({
    name: "Web Playback SDK Quick Start Player",
    getOAuthToken: (cb) => {
      cb(token);
    },
    volume: 0.5,
  });
  // this function is the event listner, when the play is clicked it plays

  document.getElementById("togglePlay").onclick = function () {
    player.togglePlay();
  };

  player.connect();

  // Ready
  player.addListener("ready", ({ device_id }) => {
    console.log("Ready with Device ID", device_id);

    //this api fetches the list of tracks in the playlist

    fetch("https://api.spotify.com/v1/playlists/37i9dQZF1EVHGWrwldPRtj", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(async (resp) => {
      const respData = await resp.json();
      const tracks = respData.tracks.items;

      // api call to initialize the player to play the list of tracks
      fetch(
        `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            uris: tracks.map((item) => item.track.uri),
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    });
  });
};

