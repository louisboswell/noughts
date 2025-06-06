// Need to store GameState, if it is won?

export interface GameState {
    board: Board;
    currentPlayer: Player;
    status: GameStatus;
    winner: Player | null
}

export type GameStatus = "InProgress" | "Won" | "Draw";

export interface Player {
    team: "X" | "O";
    wins?: number;
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