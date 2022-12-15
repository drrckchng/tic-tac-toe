// Module for game board
const gameBoard = (() => {
  let playerMarks = []; // Tracks player marks
  const squares = () => {
    const arr = document.querySelectorAll(".game-square");
    return arr;
  }
  return { squares };
})();

// Add event listener to squares
gameBoard.squares().forEach(square => {
  square.addEventListener("click", console.log("here"));
});

// for(let i = 0; i < gameBoard.squares().length; i++) {
//   gameBoard.squares()[i].addEventListener("click", console.log("clicked"));
// }

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
