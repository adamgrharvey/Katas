const generateBoard = function(whiteQueen, blackQueen) {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;

};

const queenThreat = function(board) {
  let selector = 0;
  let blackQueen = [];
  let whiteQueen = [];
  // find queens
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        if (selector === 0) {
          whiteQueen = [i,j];
          selector++;
          continue;
        } else {
          blackQueen = [i,j];
          break;
        }
      }
    }
  }

  // find threat
  if (blackQueen[0] === whiteQueen[0] || blackQueen[1] === whiteQueen[1]) {
    return true;
  }
  if (Math.abs((blackQueen[0] - blackQueen[1])) === Math.abs(whiteQueen[0] - whiteQueen[1])) {
    return true;
  } else {
    return false;
  }
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));