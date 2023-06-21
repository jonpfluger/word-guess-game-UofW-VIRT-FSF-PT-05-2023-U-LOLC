// select dom elements
var startButton = document.querySelector(".start-button")
var resetButton = document.querySelector(".reset-button")
var timerEl = document.querySelector(".timer")
var wordBlanksEl = document.querySelector(".word-blanks")
var winEl = document.querySelector(".win")
var lossesEl = document.querySelector(".lose")

// list of words
var words = ["jellyfish", "pancakes", "callback", "bacon", "porcupine"]
var userGuesses = []
var answer

function startRound() {
  // start timer


  // pick a random word
  var randomIdx = Math.floor(Math.random() * words.length)
  var randomWord = words[randomIdx]

  // set word-blanks innertext to have _'s for each letter in random word
  var blanks = ""
  for (var i = 0; i < randomWord.length; i++) {
    blanks += "_"
  }
  wordBlanksEl.innerText = blanks.split("").join(" ")
}

function onKeydown(event) {
  // check if letter pressed is in the answer string
    // if yes
      // reveal letter in word-blanks
}

function tick() {
  // check if userGuesses has all letters that are in answer string
    // if has guess all letters
      // end round
      // increment wins
      // display "you won!"
    // else
      // is our timer count at 0?
        // if yes
          // diplay "lost round"
          // increment losses
        // else
          // decrement timer count
}

// Event Listeners
  // start - startRound()
  // reset
  // keydown - onKeydown

startButton.addEventListener("click", startRound)