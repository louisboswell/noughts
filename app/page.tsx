"use client";

import Gameboard from "@/components/Gameboard/Gameboard";
import GameCounter from "@/components/Scoreboard/GameCounter";
import ScoreBoard from "@/components/Scoreboard/Scoreboard";
import NewGame from "@/components/Settings/NewGame";
import ResetScores from "@/components/Settings/ResetScores";
import { ModeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { Button } from "@/components/ui/button";
import { GameContextProvider } from "@/contexts/GameContext";
import React from "react";

export default function Home() {
  return (
      <GameContextProvider>
        <div className="flex w-screen h-screen pt-8 flex-col items-center">
          {/* <a className="text-6xl mb-16">noughts</a>   */}
        <h1 className="text-lg font-semibold">noughts</h1>
          
      
        <div className="grid grid-cols-5 grid-rows-3">
          <div className="grid grid-cols-1 grid-rows-3 gap-2 row-span-3 items-center">
            
            <GameCounter/>
            <ScoreBoard player="X"/>
            <ScoreBoard player="O"/>
          </div>
          <div className="col-span-3 row-span-3 px-4">
            <Gameboard/>
          </div>

          <div className="grid row-span-3">
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
              <NewGame/>
              <Button variant="outline">Settings</Button>
              </div>
              <ResetScores/>
            </div>  
          </div>
        </div>
        </div>
        

        <ModeToggle/>
      </GameContextProvider>
  );
}
