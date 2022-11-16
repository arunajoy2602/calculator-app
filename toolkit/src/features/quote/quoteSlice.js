import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    quote: {},
    quotes: [],
}


export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        getRandomQuote: (state) => {
            state.quote = state.quotes[Math.floor(Math.random() * state.quotes.length)];
        },
        getFirstQuote: (state) => {
            state.quote = state.quotes[0];
        },
        setQuotes: (state, action) => {
            state.quotes = action.payload;
        }
    }
});

export const { getRandomQuote, getFirstQuote, setQuotes } = quoteSlice.actions

export default quoteSlice.reducer