import { useGameContext } from "@/contexts/GameContext"
import { Card, CardDescription, CardTitle } from "../ui/card";

interface ScoreBoardProps {
    player: "X" | "O"
}

export default function ScoreBoard ({player}: ScoreBoardProps) {
    const {players, state} = useGameContext();

    const currentPlayerGlow = state.currentPlayer == player ? state.status == "Won" ? "inset-ring-4": "inset-ring-2" : "";

    return (
        <Card className={`flex flex-col gap-2 border-2 text-center ${currentPlayerGlow}`}>
            <CardDescription>
                {`Player ${player}`}
            </CardDescription>
            {/* <Separator/> */}
            <CardTitle>
                <a className="text-3xl">
                    {player == "X" ? players.X : players.O}
                </a>
            </CardTitle>
        </Card>
    )
}