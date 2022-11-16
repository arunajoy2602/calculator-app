import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './features/game/gameSlice'
import quoteSlice from './features/quote/quoteSlice'

export const store = configureStore({
    reducer: {
        gameState: gameSlice,
        quoteState: quoteSlice,
    },
})