import { Board, GameState, GameStatus, Player, Tile } from "@/types/GameTypes";
import { createContext, ReactNode, useContext, useState } from "react";

// CREATING GAME STATE CONTEXT

// Create length 9 array and create 9 new empty tiles
const newBoard: Board = Array.from(Array(9), (_, i) => ({ choice: null, id: i })) as Board;

const playerX: Player = {"team" : "X"};
const playerY: Player = {"team" : "O"};

const newStatus: GameStatus = "InProgress";

const newGameState: GameState = {"board": newBoard, "currentPlayer": playerX, "status": newStatus, "winner": null}

interface GameContextProps {
    state: GameState,
    makeMove: (target: Tile) => void
}

export const gameContext = createContext<GameContextProps>({state: newGameState, makeMove: () => {}});

export const GameContextProvider = ({ children }: {children: ReactNode}) => {
    const [gameState, setGameState] = useState<GameState>(newGameState);

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

    // // Function to check someone has won
    // const checkWin = () => {
    //     return null;
    // }

    // // Function to create new game?
    // const newGame = () => {

    // }


    return (
        <gameContext.Provider value={{state: gameState, makeMove: makeMove}}>
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