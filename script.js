// Module for game board
const gameBoard = (() => {
  let player1;
  let player2;
  let marks = Array(9);
  let _playerMarks = []; // Tracker for player moves
  // Check next valid mark 
  const _checkMark = () => {
    if(_playerMarks.length === 0) {
      return gameBoard.player1.marker;
    } else if(_playerMarks[_playerMarks.length - 1] === 'x') { 
      return 'o';
    } else if(_playerMarks[_playerMarks.length - 1] === 'o') {
      return 'x';
    }
  }
  // Check if valid playable square
  const _checkValidMark = (index) => {
    if(marks[index] === undefined) {
      return true;
    } else {
      return false;
    }
  }
  // Check for game over
  const _checkGameOver = () => {
    const winningCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    winningCombo.forEach(indices => {
      // if marks[indices[x]] all equal same
      if(_checkComboIndices(indices)) {
        console.log("Game Over!");
      }
    });
  }
  // Check if the elements in the rows are all x's or o's
  const _checkComboIndices = (indices) => {
    if((marks[indices[0]] === "x" &&
      marks[indices[1]] === "x" &&
      marks[indices[2]] === "x") ||
      (marks[indices[0]] === "o" &&
      marks[indices[1]] === "o" &&
      marks[indices[2]] === "o" )) {
      return true;
    } else {
      return false;
    }
  }
  // Add mark to square
  const addMark = (event) => {
    const index = event.target.getAttribute('data-index');
    if(_checkValidMark(index)) {
      const mark = _checkMark()
      marks[index] = mark;
      _playerMarks.push(mark);
      display.updateGrids();
    } else {
      console.log("Please choose an empty square");
    }
  }
  // Reset game
  const resetGame = () => {
    // Reset arrays
    _playerMarks.splice(0,_playerMarks.length);
    marks.splice(0,marks.length);
    marks.length = 9;

    // Update display
    display.updateGrids();
  }
  return { player1, player2, marks, addMark, resetGame, _checkGameOver };
})();

// Module for display controller
const display = (() => {
  // Select all game board square divs
  const _squares = () => {
    const divs = document.querySelectorAll(".game-square");
    return divs;
  }
  // Add event listeners to all gameboard squares
  const _addEventListeners = () => {
    _squares().forEach(div => {
      div.addEventListener('click', gameBoard.addMark);
    });
  }
  // Update grids with player marks
  const updateGrids = (marks) => {
    for(let i = 0; i < _squares().length; i++) {
      _squares()[i].textContent = gameBoard.marks[i];
    }
  }
  // Add click event listeners to each game square div
  _addEventListeners(); 
  return { updateGrids };
})();

// Player factory function
const Player = (name, marker) => {
  return { name, marker };
}

// Module for form
const form = (() => {
  // Prevent default action of submit form
  // And runs form validity checker
  const formInput = (event) => {
    const name1 = document.getElementById("player-one-name").value;
    const name2 = document.getElementById("player-two-name").value;
    const xMarker = document.getElementById("x-marker").checked;
    const oMarker = document.getElementById("o-marker").checked;
    if(checkForm(name1, name2, xMarker, oMarker)) {
      // Check if player 1 mark is x or o
      if(xMarker) {
        gameBoard.player1 = Player(name1, "x");
        gameBoard.player2 = Player(name2, "o");
      } else {
        gameBoard.player1 = Player(name1, "o");
        gameBoard.player2 = Player(name2, "x");
      }
    }
    event.preventDefault(); // prevent default action
  }
  // Check if form is valid
  const checkForm = (name1, name2, xMarker, oMarker) => {
    if(name1 !== ""
      && name2 !== ""
      && ((xMarker === true && oMarker === false) || (xMarker === false && oMarker === true))
    ) {
      return true;
    } else {
      return false;
    }
  }
  // Grab submit button and add click event listener
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", formInput);
})();

