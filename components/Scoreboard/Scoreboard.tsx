// import { useGameContext } from "@/contexts/GameContext"
import { Card, CardDescription, CardTitle } from "../ui/card";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface ScoreBoardProps {
    player: "X" | "O"
}

export default function ScoreBoard ({player}: ScoreBoardProps) {
    const {players} = useSelector((state: RootState) => state.game)

    // const currentPlayerGlow = state.currentPlayer == player ? state.status == "Won" ? "inset-ring-4": "inset-ring-2" : "";
// ${currentPlayerGlow}
    return (
        <Card className={`flex flex-col gap-2 border-2 text-center`}>
            <CardDescription>
                {players[player].name}
            </CardDescription>
            <CardTitle>
                <a className="text-3xl">
                    {player == "X" ? players.X.wins : players.O.wins}
                </a>
            </CardTitle>
        </Card>
    )
}