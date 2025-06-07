// Need to store GameState, if it is won?

export interface GameState {
    board: Board;
    currentPlayer: "X" | "O";
    status: GameStatus;
    winningCombination: number[] | null;
}

export type GameStatus = "InProgress" | "Won" | "Draw";

export interface Players {
    X: {
        wins: number,
        name: string
    },
    O: {
        wins: number,
        name: string
    }
}

// Tuple means it is immutable
export type Board = [
  Tile,
  Tile,
  Tile,
  Tile,
  Tile,
  Tile,
  Tile,
  Tile,
  Tile,
];

export interface Tile {
    choice: "X" | "O" | null,
    id: number
}

// Maybe need a state for the player?