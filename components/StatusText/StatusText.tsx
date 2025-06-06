import { useGameContext } from "@/contexts/GameContext"

export default function StatusText () {
    const {state} = useGameContext();

    let message = "";

    if (state.status === "InProgress") {
        message = `${state.currentPlayer} player's turn`
    } else if (state.status === "Draw") {
        message = "The game is a draw"
    } else {
        message = `${state.currentPlayer} wins`
    }


    return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {message}
    </h4>)
}