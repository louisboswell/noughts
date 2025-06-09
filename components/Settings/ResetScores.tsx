// import { useGameContext } from "@/contexts/GameContext";
import { Button } from "../ui/button";
import { BombIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import { resetScores } from "@/redux/GameSlice";

export default function ResetScores () {
    const dispatch = useDispatch();

    return (
        <Button variant="destructive" size="icon" onClick={() => dispatch(resetScores())}>
            <BombIcon/>
        </Button>
    )
}