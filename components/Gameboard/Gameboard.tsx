import { useGameContext } from "@/contexts/GameContext";
import Tile from "../Tile/Tile";
import { Card } from "../ui/card";

export default function Gameboard () {

    const { state } = useGameContext();

    return (
        <Card className="grid grid-cols-3 grid-rows-3 p-4 gap-0">
            {state.board.map((tile) => <Tile key={tile.id} tile={tile} />)}
            
        </Card>
    )
}