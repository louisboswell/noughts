import { Board } from "@/types/GameTypes";

// Function to check someone has won
export default function checkWin (testBoard: Board): { combination: number[]; foundWinner: "X" | "O" | null; } {

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
                
                return {combination, foundWinner}

            }
        }

        // If no winner found, check for draw
        for (const tile of testBoard) {
            if (tile.choice == null) break;

            if (tile.id == 8) {
                return {combination: [0.5], foundWinner: null}
            }
        }

        return {combination: [-1], foundWinner: null}
    }