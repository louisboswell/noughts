// Need to store GameState, if it is won?

export interface GameState {
    board: Board;
    currentPlayer: "X" | "O";
    status: GameStatus;
}

export type GameStatus = "InProgress" | "Won" | "Draw";

export interface Players {
    X: number,
    O: number
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