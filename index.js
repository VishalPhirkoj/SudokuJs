var board = [
  [0, 0, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

function sudoku(board) {
  var nonPossible = {},
    impossibleNumbers,
    emptySpaces = 81;
  while (emptySpaces > 0) {
    emptySpaces = 0;
    for (var varticle = 0; varticle < board.length; varticle++) {
      for (var horizontal = 0; horizontal < board.length; horizontal++) {
        //console.log(board[varticle][horizontal]);
        if (board[varticle][horizontal] === 0) {
          var nonPossible = {};
          for (var i = 0; i < 9; i++) {
            if (board[varticle][i] > 0) {
              nonPossible[board[varticle][i]] = true;
            }
            if (board[i][horizontal] > 0) {
              nonPossible[board[i][horizontal]] = true;
            }
          }
          //this is for 3x3 verticle box
          for (
            var verticleBox = Math.floor(varticle / 3) * 3;
            verticleBox < Math.floor(varticle / 3) * 3 + 3;
            verticleBox++
          ) {
            for (
              var horizontalBox = Math.floor(horizontal / 3) * 3;
              horizontalBox < Math.floor(horizontal / 3) * 3 + 3;
              horizontalBox++
            ) {
              if (board[verticleBox][horizontalBox]) {
                nonPossible[board[verticleBox][horizontalBox]] = true;
              }
            }
          }
          //this is taking an object
          impossibleNumbers = Object.keys(nonPossible);
          if (impossibleNumbers.length === 8) {
            for (var i = 1; i < 10; i++) {
              if (impossibleNumbers.indexOf(i.toString()) < 0) {
                board[varticle][horizontal] = i;
              }
            }
          } else {
            emptySpaces++;
          }
        }
      }
    }
  }
  return board;
}

console.log(board);
console.log("\n After solving SUDOKU \n");
console.log(sudoku(board));
