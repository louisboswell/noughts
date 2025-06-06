import { Board, GameState, GameStatus, Player, Tile } from "@/types/GameTypes";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// CREATING GAME STATE CONTEXT

// Create length 9 array and create 9 new empty tiles
const newBoard: Board = Array.from(Array(9), (_, i) => ({ choice: null, id: i })) as Board;

const playerX: Player = {"team" : "X"};
const playerY: Player = {"team" : "O"};

const newStatus: GameStatus = "InProgress";

const newGameState: GameState = {"board": newBoard, "currentPlayer": playerX, "status": newStatus, "winner": null}

interface GameContextProps {
    state: GameState,
    makeMove: (target: Tile) => void,
    newGame: () => void
}

export const gameContext = createContext<GameContextProps>({state: newGameState, makeMove: () => {}, newGame: () => {}});

export const GameContextProvider = ({ children }: {children: ReactNode}) => {
    const [gameState, setGameState] = useState<GameState>(newGameState);

    // Function to check someone has won
    const checkWin = () => {
        const testBoard: Board = gameState.board;

        // Your existing checkWin logic
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
        
        winningCombinations.map((combination) => {
            if (testBoard[combination[0]].choice == null) return;

            if (testBoard[combination[0]].choice == testBoard[combination[1]].choice && testBoard[combination[0]].choice == testBoard[combination[2]].choice) {
                console.log("Winner");
            } 
        })
    }

    // Call this every update
    if (gameState.status === "InProgress"){
        checkWin()
    };

    // Function for making a move
    const makeMove = (target: Tile) => {
        if (target.choice != null)  return;

        const newBoard = gameState.board.map((tile, i) => {
            if (i == target.id) {
                return {choice: gameState.currentPlayer.team, id: i}
            } else {
                return tile;
            }
        }) as Board;

        const newState: GameState = {
            "board": newBoard,
            "currentPlayer": gameState.currentPlayer === playerX ? playerY : playerX,
            "status": gameState.status,
            "winner": null
        }
        
        setGameState(newState);
    }

    // Function to create new game?
    const newGame = () => {
        setGameState(newGameState);
    }


    return (
        <gameContext.Provider value={{state: gameState, makeMove: makeMove, newGame: newGame}}>
            {children}
        </gameContext.Provider>
    )
}

export const useGameContext = () => {
    const context = useContext(gameContext);

    if (!context) {
        throw new Error ('useGameContext must be used within a GameContextProvider');
    }

    return context;
}