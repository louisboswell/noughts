import { useGameContext } from "@/contexts/GameContext";
import { Button } from "../ui/button";

export default function ResetScores () {
    const {resetScores} = useGameContext();

    return (
        <Button variant="destructive" onClick={() => resetScores()}>
            Reset Scores
        </Button>
    )
}