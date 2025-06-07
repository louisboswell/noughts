import { useGameContext } from "@/contexts/GameContext";
import { Button } from "../ui/button";
import { RotateCcwIcon } from "lucide-react";

export default function ResetScores () {
    const {resetScores} = useGameContext();

    return (
        <Button variant="destructive" size="icon" onClick={() => resetScores()}>
            <RotateCcwIcon/>
        </Button>
    )
}