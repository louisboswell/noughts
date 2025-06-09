// import { useGameContext } from "@/contexts/GameContext"
import { Button } from "../ui/button";
import { DicesIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { newGame } from "@/redux/GameSlice";

export default function NewGame () {
    // const {newGame, state} = useGameContext();

    const gameStatus = useSelector((state: RootState) => state.game.gameState.status)
    const dispatch = useDispatch();

    return (
        <Button variant="outline" size="icon" className={gameStatus != "InProgress" ? "inset-ring-2" : ""} onClick={() => dispatch(newGame())}>
            <DicesIcon/>
        </Button>
    )
}