import { ReduxGameState } from "@/redux/GameSlice";
import { Board, GameState, GameStatus, Players } from "@/types/GameTypes";

export function NewGame(): ReduxGameState {
    // Create length 9 array and create 9 new empty tiles
    const newBoard: Board = Array.from(Array(9), (_, i) => ({ choice: null, id: i })) as Board;
    
    const newPlayers: Players = {
        "X": {
            "wins": 0,
            "name": "Player X"
        },
        "O": {
            "wins": 0,
            "name": "Player O"
        }
    }
    
    const newStatus: GameStatus = "InProgress";
    
    const newGameState: GameState = {"board": newBoard, "currentPlayer": "X", "status": newStatus, winningCombination: null}
    
    const newReduxState: ReduxGameState = {
        "gameState": newGameState,
        "players": newPlayers,
        "gameNumber": 1,
        "lastStarter": "X"
    };
    return newReduxState;

}