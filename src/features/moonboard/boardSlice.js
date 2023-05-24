import { createSlice } from "@reduxjs/toolkit";

const clickableHolds = new Set(["[2, 2]", "[2, 3]", "[2, 4]", "[2, 5]", "[2, 6]", "[2, 8]", "[2, 9]", "[2, 10]", "[2, 12]",
                            "[3, 5]", "[3, 8]",
                            "[4, 2]", "[4, 3]", "[4, 4]", "[4, 5]", "[4, 6]", "[4, 7]", "[4, 8]", "[4, 9]", "[4, 10]", "[4, 11]", "[4, 12]",
                            "[5, 2]", "[5, 3]", "[5, 4]", "[5, 5]", "[5, 6]", "[5, 7]", "[5, 8]", "[5, 9]", "[5, 10]",
                            "[6, 2]", "[6, 4]", "[6, 5]", "[6, 6]", "[6, 7]", "[6, 8]", "[6, 9]", "[6, 10]", "[6, 11]", "[6, 12]",
                            "[7, 2]", "[7, 3]", "[7, 4]", "[7, 5]", "[7, 6]", "[7, 7]", "[7, 8]", "[7, 9]", "[7, 10]", "[7, 11]", "[7, 12]",
                            "[8, 2]", "[8, 3]", "[8, 4]", "[8, 5]", "[8, 6]", "[8, 7]", "[8, 8]", "[8, 9]", "[8, 10]", "[8, 11]", "[8, 12]",
                            "[9, 2]", "[9, 3]", "[9, 4]", "[9, 5]", "[9, 6]", "[9, 7]", "[9, 8]", "[9, 9]", "[9, 10]", "[9, 11]", "[9, 12]",
                            "[10, 2]", "[10, 3]", "[10, 4]", "[10, 5]", "[10, 6]", "[10, 7]", "[10, 8]", "[10, 9]", "[10, 10]", "[10, 11]", "[10, 12]",
                            "[11, 2]", "[11, 3]", "[11, 4]", "[11, 5]", "[11, 6]", "[11, 7]", "[11, 8]", "[11, 9]", "[11, 10]", "[11, 11]", "[11, 12]",
                            "[12, 3]", "[12, 4]", "[12, 5]", "[12, 6]", "[12, 7]", "[12, 8]", "[12, 9]", "[12, 10]", "[12, 11]", "[12, 12]",
                            "[13, 3]", "[13, 4]", "[13, 5]", "[13, 6]", "[13, 7]", "[13, 8]", "[13, 9]", "[13, 10]", "[13, 11]", "[13, 12]",
                            "[14, 3]", "[14, 4]", "[14, 5]", "[14, 6]", "[14, 7]", "[14, 8]", "[14, 10]", "[14, 11]", "[14, 12]",
                            "[15, 2]", "[15, 4]", "[15, 5]", "[15, 7]", "[15, 9]", "[15, 10]", "[15, 11]", "[15, 12]",
                            "[16, 3]", "[16, 8]", "[16, 10]",
                            "[17, 3]", "[17, 5]",
                            "[18, 8]", "[18, 11]"]);

const initialState = {
  board: [...Array(19 * 12).keys()].map((i) => {
    return {
      imageName:
        "images/moonboard_segments/row-" +
        (Math.floor(i / 12) + 1) +
        "-column-" +
        ((i % 12) + 1) +
        ".jpg",
      active: false,
      row: Math.floor(i / 12) + 1,
      col: (i % 12) + 1,
      clickable: clickableHolds.has(`[${Math.floor(i / 12) + 1}, ${(i % 12) + 1}]`),
    };
  }),
};

console.log(initialState.board)

export const boardSlice = createSlice({
  name: "boardSlice",
  initialState: initialState,
  reducers: {
    flipHold: (state, action) => {
      state.board = state.board.map((hold) => {
        if (hold.row === action.payload.i && hold.col === action.payload.j && hold.clickable) {
          let newHold = hold;
          newHold.active = !newHold.active;
          return newHold;
        } else {
          return hold;
        }
      });
    },
  },
});

export const { flipHold } = boardSlice.actions;

export const selectBoard = (state) => state.board.board;

export const selectBoardForAPI = (state) => {
  const board = state.board.board;

  // Assuming you know the number of rows and columns
  const numRows = 18;

  let rows = Array(numRows)
    .fill()
    .map(() => []);

  // Create the 2D array representation
  for (let i = 0; i < board.length; i++) {
    if (board[i].col > 1 && board[i].row > 1) {
      const value = board[i].active ? 1 : 0;
      rows[board[i].row - 2].push(value);
    }
  }

  // Reverse the rows
  rows = rows.reverse();

  // Flatten the rows back into a 1D array
  let boardForAPI = [].concat(...rows);

  return boardForAPI;
};

export default boardSlice.reducer;
