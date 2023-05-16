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

export default boardSlice.reducer;
