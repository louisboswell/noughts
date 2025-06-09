// import { useGameContext } from "@/contexts/GameContext"
import type { Tile } from "@/types/GameTypes"
import { CircleIcon, XIcon } from "lucide-react"
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { makeMove } from "@/redux/GameSlice";
import { RootState } from "@/redux/store";

interface TileProps {
    tile: Tile,
    winning: boolean
}

export default function Tile ({tile, winning}: TileProps) {
    const { status, currentPlayer } = useSelector((state: RootState) => state.game.gameState)
    const dispatch = useDispatch();

    const disabled = status == "InProgress" ? false : true;

    let rounding = "";
    if (tile.id == 0) rounding = "rounded-tl-lg";
    if (tile.id == 2) rounding = "rounded-tr-lg";
    if (tile.id == 6) rounding = "rounded-bl-lg";
    if (tile.id == 8) rounding = "rounded-br-lg";

    const blink = winning ? "animate-caret-blink text-accent-foreground" : "";

    return (
        <div className={`border-1 ${rounding}`}>
        <Button variant="ghost" disabled={disabled} onClick={() => dispatch(makeMove({
            "choice": currentPlayer,
            "id": tile.id
        }as Tile))} className={`flex w-30 h-30 justify-center items-center ${blink}`}>
            {tile.choice == null ? null : tile.choice == "X" ? <XIcon className="size-36" strokeWidth={3}/> : <CircleIcon className="size-26" strokeWidth={3}/>}
        </Button>
        </div>
    )
}