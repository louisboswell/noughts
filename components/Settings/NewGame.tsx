import { useGameContext } from "@/contexts/GameContext"
import { Button } from "../ui/button";
import { DicesIcon } from "lucide-react";

export default function NewGame () {
    const {newGame } = useGameContext();
    
    return (
        <Button variant="outline" size="icon" onClick={() => newGame()}>
            <DicesIcon/>
        </Button>
    )
}