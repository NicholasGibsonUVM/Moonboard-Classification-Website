import { createSlice } from "@reduxjs/toolkit";

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
    };
  }),
};

export const boardSlice = createSlice({
  name: "boardSlice",
  initialState: initialState,
  reducers: {
    flipHold: (state, action) => {
      state.board = state.board.map((hold) => {
        if (hold.row === action.payload.i && hold.col === action.payload.j) {
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
