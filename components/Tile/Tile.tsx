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

    return (
        <Button variant="ghost" disabled={disabled} onClick={() => makeMove(tile)} className="flex w-20 h-20 justify-center rounded-full items-center p-0">
            {tile.choice == null ? null : tile.choice == "X" ? <XIcon size={40} strokeWidth={4}/> : <CircleIcon size={40} strokeWidth={4}/>}
        </Button>
    )
}