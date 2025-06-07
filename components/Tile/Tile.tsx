import { useGameContext } from "@/contexts/GameContext"
import type { Tile } from "@/types/GameTypes"
import { CircleIcon, XIcon } from "lucide-react"
import { Button } from "../ui/button";

interface TileProps {
    tile: Tile
}

export default function Tile ({tile}: TileProps) {
    const {makeMove, state} = useGameContext();

    const disabled = state.status == "InProgress" ? false : true;

    let rounding = "";
    if (tile.id == 0) rounding = "rounded-tl-lg";
    if (tile.id == 2) rounding = "rounded-tr-lg";
    if (tile.id == 6) rounding = "rounded-bl-lg";
    if (tile.id == 8) rounding = "rounded-br-lg";

    return (
        <div className={`border-1 ${rounding}`}>
        <Button variant="ghost" disabled={disabled} onClick={() => makeMove(tile)} className="flex w-30 h-30 justify-center items-center">
            {tile.choice == null ? null : tile.choice == "X" ? <XIcon className="size-36" strokeWidth={3}/> : <CircleIcon className="size-26" strokeWidth={3}/>}
        </Button>
        </div>
    )
}