// import { useGameContext } from "@/contexts/GameContext";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function GameCounter () {
    const game = useSelector((state: RootState) => state.game.gameNumber)

    return (
            <Card className={`flex flex-col gap-2 text-center border-2`}>
            <CardDescription>
                Game
            </CardDescription>
            {/* <Separator/> */}
            <CardTitle>
                <a className="text-3xl">
                    {game}
                </a>
            </CardTitle>
        </Card>
    )
}