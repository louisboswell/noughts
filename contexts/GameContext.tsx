import { Board, GameState, GameStatus, Players, Tile } from "@/types/GameTypes";
import { createContext, ReactNode, useContext, useState } from "react";

// CREATING GAME STATE CONTEXT

// Create length 9 array and create 9 new empty tiles
const newBoard: Board = Array.from(Array(9), (_, i) => ({ choice: null, id: i })) as Board;

const newPlayers: Players = {
    "X": 0,
    "O": 0
}

const newStatus: GameStatus = "InProgress";

const newGameState: GameState = {"board": newBoard, "currentPlayer": "X", "status": newStatus}

interface GameContextProps {
    state: GameState,
    makeMove: (target: Tile) => void,
    newGame: () => void,
    players: Players,
    resetScores: () => void,
    game: number
}

export const gameContext = createContext<GameContextProps>({state: newGameState, makeMove: () => {}, newGame: () => {}, players: newPlayers, resetScores: () => {}, game: 1});

export const GameContextProvider = ({ children }: {children: ReactNode}) => {
    const [gameState, setGameState] = useState<GameState>(newGameState);
    const [players, setPlayers] = useState<Players>(newPlayers);
    const [lastStarter, setLastStarter] = useState<"X" | "O">("X");

    const [numGames, setNumGames] = useState<number>(1);

    // Function to check someone has won
    const checkWin = () => {
        const testBoard: Board = gameState.board;

        let foundWinner: "X" | "O" | null = null;

        // Your existing checkWin logic
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
     
        for (const combination of winningCombinations) {
            const tileA = testBoard[combination[0]].choice;
            const tileB = testBoard[combination[1]].choice;
            const tileC = testBoard[combination[2]].choice;

            if (tileA == null) continue;

            if (tileA == tileB && tileA == tileC) {
                foundWinner = tileA;
                console.log(foundWinner)
                
                const newStatus: GameState = {
                    "board": gameState.board,
                    "currentPlayer": gameState.currentPlayer == "X" ? "O" : "X",
                    "status": "Won"
                }

                const newPlayers: Players = {
                    "X": foundWinner == "X" ? players.X + 1 : players.X,
                    "O": foundWinner == "O" ? players.O + 1 : players.O
                }

                setPlayers(newPlayers);
                setGameState(newStatus);

                break;
            }
        }

        if (foundWinner != null) {
            return;
        }
        // If no winner found, check for draw
        for (const tile of testBoard) {
            if (tile.choice == null) break;

            if (tile.id == 8) {
                console.log("draw");

                const newStatus: GameState = {
                    "board": gameState.board,
                    "currentPlayer": gameState.currentPlayer == "X" ? "O" : "X",
                    "status": "Draw"
                }

                const newPlayers: Players = {
                    "X": players.X + 0.5,
                    "O": players.O + 0.5
                }

                setPlayers(newPlayers);
                setGameState(newStatus);
            }
        }
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
                return {choice: gameState.currentPlayer, id: i}
            } else {
                return tile;
            }
        }) as Board;

        const newState: GameState = {
            "board": newBoard,
            "currentPlayer": gameState.currentPlayer === "X" ? "O" : "X",
            "status": gameState.status,
        }
        
        setGameState(newState);
    }

    // Function to create new game?
    const newGame = (reset?: boolean) => {
        if (lastStarter == "X") {
            setLastStarter("O");
        } else {
            setLastStarter("X");
        }

        setNumGames(reset ? 1 : numGames + 1);

        setGameState({
            "board": newBoard,
            "currentPlayer": lastStarter == "X" ? "O" : "X",
            "status": "InProgress"
        });
    }

    const resetScores = () => {
        newGame(true);
        setPlayers(newPlayers);
    }


    return (
        <gameContext.Provider value={{state: gameState, makeMove: makeMove, newGame: newGame, players: players, resetScores: resetScores, game: numGames}}>
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