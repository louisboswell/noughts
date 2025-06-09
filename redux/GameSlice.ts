import { Board, GameState, GameStatus, Players, Tile } from '@/types/GameTypes';
import {NewGame} from '../lib/NewGames'

import {createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import checkWin from '@/lib/CheckWinner';

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
            // Find the tile in the draft state
            const tile = state.gameState.board[action.payload.id];

            // 1. Perform the move by directly mutating the draft
            if (tile.choice !== null) {
                return; // Invalid move, do nothing. Just exit.
            }
            tile.choice = state.gameState.currentPlayer;

            // 2. Check for a winner using the mutated draft board
            const { combination, foundWinner } = checkWin(state.gameState.board);

            // 3. Update status, wins, etc., by mutating the draft
            if (foundWinner) {
                // Winner
                state.gameState.status = "Won";
                state.gameState.winningCombination = combination;
                state.players[foundWinner].wins += 1;
            } else if (state.gameState.board.every((t) => t.choice !== null)) {
                // Draw (I've included the corrected draw logic here)
                state.gameState.status = "Draw";
                state.players.X.wins += 0.5;
                state.players.O.wins += 0.5;
            }

            // 4. Finally, switch the player
            state.gameState.currentPlayer =
                state.gameState.currentPlayer === "X" ? "O" : "X";

            // NO return statement is needed at the end!
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
            return newGameState;
        },
        resetScores: () => {

            return NewGame();

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

            return newGameState;
        }
    }
});

export const {makeMove, newGame, resetScores, updateNames} = gameSlice.actions;
export default gameSlice.reducer;