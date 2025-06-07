import { useGameContext } from "@/contexts/GameContext"
import { Button } from "../ui/button";

export default function NewGame () {
    const {newGame } = useGameContext();
    
    return (
        <Button variant="outline" onClick={() => newGame()}>
            New Game
        </Button>
    )
}