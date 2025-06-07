import { useGameContext } from "@/contexts/GameContext"
import { Button } from "../ui/button";
import { DicesIcon } from "lucide-react";

export default function NewGame () {
    const {newGame, state} = useGameContext();

    return (
        <Button variant="outline" size="icon" className={state.status != "InProgress" ? "inset-ring-2" : ""} onClick={() => newGame()}>
            <DicesIcon/>
        </Button>
    )
}