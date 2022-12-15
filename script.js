// Module for game board
const gameBoard = (() => {
  const squares = () => document.querySelectorAll(".game-square");
  return { squares };
})();

// Player factory function
const Player = (marker) => {
  return { marker };
}

// Temp Player objects
const player1 = Player("x");
const player2 = Player("o");
