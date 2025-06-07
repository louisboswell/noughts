import { SettingsIcon } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Settings () {
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

                <Input id="xname" placeholder="Player X Name"/>
                <Input placeholder="Player O Name"/>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}