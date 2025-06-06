import { useGameContext } from "@/contexts/GameContext";
import Tile from "../Tile/Tile";

export default function Gameboard () {

    const { state } = useGameContext();

    return (
        <div className="grid grid-cols-3 grid-rows-3 w-60 h-60">
            {state.board.map((tile) => <Tile key={tile.id} tile={tile} />)}
        </div>
    )
}