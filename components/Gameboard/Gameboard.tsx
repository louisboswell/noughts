// import { useGameContext } from "@/contexts/GameContext";
import Tile from "../Tile/Tile";
import { Card } from "../ui/card";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Gameboard () {

    const { board, winningCombination } = useSelector((state: RootState) => state.game.gameState);

    return (
        <Card className="grid grid-cols-3 grid-rows-3 p-0 gap-0">
            {board.map((tile) => (
                <Tile
                    key={tile.id}
                    tile={tile}
                    winning={!!winningCombination?.includes(tile.id)}
                />
            ))}
        </Card>
    )
}