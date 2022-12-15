// Module for game board
const gameBoard = (() => {
  let playerMarks = []; // Tracks player marks
  const squares = () => {
    const arr = document.querySelectorAll(".game-square");
    return arr;
  }
  return { squares };
})();

// Module for display controller
const display = (() => {
})();

// Player factory function
const Player = (name, marker) => {
  return { name, marker };
}

// Temp Player objects
const player1 = Player("jim", "x");
const player2 = Player("bob", "o");

// Grab submit button and add click event listener
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", userInput);

function userInput(event) {
  const name1 = document.getElementById("player-one-name").value;
  const name2 = document.getElementById("player-two-name").value;
  const xMarker = document.getElementById("x-marker").checked;
  const oMarker = document.getElementById("o-marker").checked;
  if(checkForm(name1, name2, xMarker, oMarker)) {
    alert("run function here");
  }
  event.preventDefault();
}

function checkForm(name1, name2, xMarker, oMarker) {
  if(name1 !== ""
    && name2 !== ""
    && ((xMarker === true && oMarker === false) || (xMarker === false && oMarker === true))
  ) {
    return true;
  } else {
    return false;
  }
}

