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
