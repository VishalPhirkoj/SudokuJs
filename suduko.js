 //Back Tracking Algorithm is used below to solve SUDOKU
 const board = [
    ['.','.','.','2','6','.','7','.','1'],
['6','8','.','.','7','.','.','9','.'],
['1','9','.','.','.','4','5','.','.'],
['8','2','.','1','.','.','.','4','.'],
['.','.','4','6','.','2','9','.','.'],
['.','5','.','.','.','3','.','2','8'],
['.','.','9','3','.','.','.','7','4'],
['.','4','.','.','5','.','.','3','6'],
['7','.','3','.','1','8','.','.','.']
];
//board is the recursive calling function
//recursive calling enables the function to repeat itself 
// executing at  end of each iteration
sudokusolver(board);
console.log(board);
document.write(board);
//checks the validation for each attribute i.e., row and column
function isValid(board, row, col, k) {
for (let i = 0; i < 9; i++) { 
//Math.floor() function returns the largest integer less than or equal to a given input
const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
//here i%3 divides a variable and assigns the remainder to it
const n = 3 * Math.floor(col / 3) + i % 3;
//checking if condition  and specifies a condition and executes the block of code
if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
return false;
}
}
return true;
}

//Visualizing the board data
  function sudokusolver(data) {
      for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          if (data[i][j] == '.') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) { 
    // Iterates loops and checks for each triplet(i,j,k) in a cell
     data[i][j] = `${k}`;
          if (sudokusolver(data)) {
          return true;
         } else {
         data[i][j] = '.';
         }
       }
         }
     return false;
        }
      }
    }

    return true;
  }