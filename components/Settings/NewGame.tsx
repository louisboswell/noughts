import { useGameContext } from "@/contexts/GameContext"

export default function NewGame () {
    const {newGame } = useGameContext();
    
    return (
        <button onClick={() => newGame()}>
            New Game
        </button>
    )
}