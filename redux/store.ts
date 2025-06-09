import {configureStore} from '@reduxjs/toolkit';
import gameReducer from './GameSlice';


// Create a Redux store, and configure devtools extension
export const store = configureStore({
    reducer: {
        game: gameReducer
    },
})

// Infer RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;