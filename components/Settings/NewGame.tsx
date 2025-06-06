import { useGameContext } from "@/contexts/GameContext"
import { Button } from "../ui/button";

export default function NewGame () {
    const {newGame } = useGameContext();
    
    return (
        <Button onClick={() => newGame()}>
            New Game
        </Button>
    )
}