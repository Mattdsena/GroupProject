$(document).foundation();

//Api Key
var wordsApiKey = "89404d9e7emshb84fd6cf4678f81p15d0efjsneb0241320851";

const getWord = document.querySelector("#get_word");
var invi = document.querySelector(".invisible");
var definition = document.querySelector(".definition");
var answerForm = document.querySelector(".answer-form");
var userAnswer = document.getElementById("user-input");
var scoreText = document.querySelector(".score-text");
var saveWord = document.querySelector(".save");
var newWord = document.querySelector(".word");
var myWordsTable = document.querySelector(".my-words");
var myWordBtn = document.querySelector(".my-word-btn");
var words;

function fetchWord() {
  return fetch(
    "https://wordsapiv1.p.rapidapi.com/words/?random=true&hasDetails=definitions&letters=5",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": wordsApiKey,
      },
    }
  ).then(function (response) {
    return response.json();
  });
}

getWord.addEventListener("click", beginGen);

function beginGen() {
  fetchWord().then(function (data) {
    console.log(data);
    newWord.textContent = data.word;
    definition.textContent = data.results[0].definition;
    saveWord.classList.remove("invisible");
    //  saveWord.addEventListener("click", function(event) {
    //   event.preventDefault()
    //   console.log("clicked");
    words = JSON.parse(localStorage.getItem("words")) || [];
    words.push({ Words: newWord.textContent, Def: definition.textContent });
    //   localStorage.setItem("words", JSON.stringify(words));
    // })
  });
  invi.classList.remove("invisible");
}

saveWord.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("words", JSON.stringify(words));
});

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

myWordBtn.addEventListener("click", renderMyWords);

// Function to fetch sounds

window.onSpotifyWebPlaybackSDKReady = () => {
  const token =
    "BQAtAjBkIvy1YWhm4EDh_VLTKBRnjkU3Kqy2PKpxSN6-FSw2RZ-BehUEbhfx0EV-NeqSvHGGQurvAy7-JNgremKs4uf7CatS4_LGK--cj3ic30ADluuETJX7fAlHgNGrGEVhUv8Uzv8SAWcmmOBsEGRUtCcw8AE";

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
