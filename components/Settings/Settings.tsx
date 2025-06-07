import { SettingsIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import {  useGameContext } from "@/contexts/GameContext";

export default function Settings () {
    const {players, updateNames} = useGameContext();

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

                <Input id="xname" value={players.X.name} onChange={(event) => updateNames(event.target.value, players.O.name)}/>
                <Input value={players.O.name} onChange={(event) => updateNames(players.X.name, event.target.value)}/>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}