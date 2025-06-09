import { SettingsIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
// import {  useGameContext } from "@/contexts/GameContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { updateNames } from "@/redux/GameSlice";

export default function Settings () {
    const players = useSelector((state: RootState) => state.game.players);
    const dispatch = useDispatch();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon"><SettingsIcon/></Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="gap-2">
                <DropdownMenuLabel>
                    Settings
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>

                <Input id="xname" value={players.X.name} onChange={(event) => dispatch(updateNames({"playerXName": event.target.value, "playerOName": players.O.name}))}/>
                <Input value={players.O.name} onChange={(event) => dispatch(updateNames({"playerXName": players.X.name, "playerOName": event.target.value}))}/>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}