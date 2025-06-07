"use client";

import Gameboard from "@/components/Gameboard/Gameboard";
import GameCounter from "@/components/Scoreboard/GameCounter";
import ScoreBoard from "@/components/Scoreboard/Scoreboard";
import NewGame from "@/components/Settings/NewGame";
import ResetScores from "@/components/Settings/ResetScores";
import Settings from "@/components/Settings/Settings";
import { ModeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { GameContextProvider } from "@/contexts/GameContext";
import React from "react";

export default function Home() {
  return (
      <GameContextProvider>
        <div className="flex w-screen h-screen pt-8 flex-col items-center">
          {/* <a className="text-6xl mb-16">noughts</a>   */}
        <h1 className="text-lg font-semibold">noughts</h1>
        <a className="text-xs">by louis</a>
          
      
        <div className="grid grid-cols-5 grid-rows-3 mt-8">
          <div className="grid grid-cols-1 grid-rows-3 gap-2 row-span-3 items-center">
            
            <ScoreBoard player="X"/>
            <ScoreBoard player="O"/>
          </div>
          <div className="col-span-3 row-span-3 px-4">
            <Gameboard/>
          </div>

          <div className="grid grid-cols-1 grid-rows-3 gap-2 row-span-3 items-center">
            <GameCounter/>
          </div>

          <div className="grid col-start-2 col-span-3">
            <div className="flex flex-row justify-center gap-4 mt-4">
              <NewGame/>
              <Settings/>
              <ModeToggle/>
              <ResetScores/>
            </div>  
          </div>
        </div>
        </div>
        

      </GameContextProvider>
  );
}
