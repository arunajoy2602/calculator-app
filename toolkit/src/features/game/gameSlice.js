
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activePlan: null,
    gameStarted: false
}


export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        buyPlan: (state) => {
            state.activePlan = {
                name: "Red"
            }
            // state.gameStarted = true;
        }
    }
});

export const { buyPlan } = gameSlice.actions

export default gameSlice.reducer