import { Board, GameState, GameStatus, Players, Tile } from '@/types/GameTypes';
import {NewGame} from '../lib/NewGames'

import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ReduxGameState {
    gameState: GameState,
    players: Players,
    gameNumber: number,
    lastStarter: "X" | "O"
}

// Create length 9 array and create 9 new empty tiles
const newBoard: Board = Array.from(Array(9), (_, i) => ({ choice: null, id: i })) as Board;


const initialState: ReduxGameState = NewGame()

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        makeMove: (state, action: PayloadAction<Tile>) => {
            if (action.payload.choice != null) return;

            const newBoard = state.gameState.board.map((tile, i) => {
                if (i == action.payload.id) {
                    return {choice: state.gameState.currentPlayer, id: i}
                } else {
                    return tile;
                }
            }) as Board;

            const newGameState: ReduxGameState = {
                "gameState": {
                    "board": newBoard,
                    "currentPlayer": state.gameState.currentPlayer === "X" ? "O" : "X",
                    "status": state.gameState.status,
                    "winningCombination": state.gameState.winningCombination
                },
                "players": state.players,
                "gameNumber": state.gameNumber,
                lastStarter: state.lastStarter
            }

            state = newGameState;
            console.log(state)
        },
        newGame: (state) => {

            const newGameState = {
                "gameNumber": state.gameNumber + 1,
                "gameState": {
                    "board": newBoard,
                    "currentPlayer": state.lastStarter == "X" ? "O" : "X" as "X" | "O",
                    "status": "InProgress" as GameStatus,
                    "winningCombination": null
                },
                "players": state.players,
                "lastStarter": state.lastStarter
            }

            console.log(state)
            state = newGameState;
        },
        resetScores: (state) => {

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            state = NewGame();

        },
        updateNames: (state, action: PayloadAction<{playerXName: string, playerOName: string}>) => {
            const newGameState = {
                "gameNumber": state.gameNumber,
                "gameState": {
                    "board": state.gameState.board,
                    "currentPlayer": state.gameState.currentPlayer,
                    "status": "InProgress" as GameStatus,
                    "winningCombination": null
                },
                "players": {
                    "X": {
                        "name": action.payload.playerXName != null ? action.payload.playerXName : state.players.X.name,
                        "wins": state.players.X.wins
                    },
                    "O": {
                        "name": action.payload.playerOName != null ? action.payload.playerOName : state.players.O.name,
                        "wins": state.players.O.wins
                    }
                } as Players,
                "lastStarter": state.lastStarter
            }

            state = newGameState;
        }
    }
});

export const {makeMove, newGame, resetScores, updateNames} = gameSlice.actions;
export default gameSlice.reducer;