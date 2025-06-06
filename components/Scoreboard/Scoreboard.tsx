import { useGameContext } from "@/contexts/GameContext"
import { Card, CardContent, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

export default function ScoreBoard () {
    const {players} = useGameContext();


    return (
        <div className="flex flex-col gap-2">
        <Card className="w-40 gap-2 mx-2">
            <CardTitle className="ml-4">
                Player X
            </CardTitle>
            <Separator/>
            <CardContent className="justify-center flex">
                <a className="text-5xl font-semibold">{players.X}</a>
            </CardContent>
        </Card>

        <Card className="w-40 gap-2 mx-2">
            <CardTitle className="ml-4">
                Player O
            </CardTitle>
            <Separator/>
            <CardContent className="justify-center flex">
                <a className="text-5xl font-semibold">{players.O}</a>
            </CardContent>
        </Card>
        </div>
    )
}