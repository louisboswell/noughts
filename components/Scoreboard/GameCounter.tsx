import { useGameContext } from "@/contexts/GameContext";
import { Card, CardDescription, CardTitle } from "../ui/card";

export default function GameCounter () {
    const {game} = useGameContext();

    return (
            <Card className={`flex flex-col gap-2 text-center bg-background border-0`}>
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