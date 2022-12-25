import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    board: Array(18).fill().map(() => Array(11).fill(0))
};

export const boardSlice = createSlice({
    name: 'boardSlice',
    initialState: initialState,
    reducers: {
        flipHold: (state, action) => {
            state.board = state.board.map((row, row_number) => {
                if (row_number === action.payload.i) {
                return row.map((hold, col_number) => {
                    if (col_number === action.payload.j) {
                        return hold === 0 ? 1 : 0
                    } else {
                        return hold
                    }
                })
                } else {
                    return row
                }   
            })
        }
    }
});

export const { flipHold } = boardSlice.actions;

export const selectBoard = (state) => state.board.board;

export default boardSlice.reducer;