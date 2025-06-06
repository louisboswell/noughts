import { useGameContext } from "@/contexts/GameContext"
import type { Tile } from "@/types/GameTypes"
import { CircleIcon, XIcon } from "lucide-react"

interface TileProps {
    tile: Tile
}

export default function Tile ({tile}: TileProps) {
    const {makeMove} = useGameContext();

    return (
        <button onClick={() => makeMove(tile)} className="flex w-20 h-20 border-2 rounded-full justify-center items-center">
            {tile.choice == null ? null : tile.choice == "X" ? <XIcon size={40} strokeWidth={4}/> : <CircleIcon size={40} strokeWidth={4}/>}
        </button>
    )
}