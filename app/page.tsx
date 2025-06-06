"use client";

import Gameboard from "@/components/Gameboard/Gameboard";
import ScoreBoard from "@/components/Scoreboard/Scoreboard";
import NewGame from "@/components/Settings/NewGame";
import ResetScores from "@/components/Settings/ResetScores";
import StatusText from "@/components/StatusText/StatusText";
import { ModeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { GameContextProvider } from "@/contexts/GameContext";
import React from "react";

export default function Home() {
  return (
      <GameContextProvider>
        <div className="flex w-screen h-screen pt-8 flex-col items-center">
          {/* <a className="text-6xl mb-16">noughts</a>   */}
    <h1 className="mb-4 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      noughts
      </h1>
          
      
        <div className="flex flex-row justify-center md:w-screen mb-2 lg:w-1/2">
          <ScoreBoard/>
          <Gameboard/>
        </div>
        <StatusText/>
          <div className="flex flex-row gap-2 mt-4">
            <NewGame/>
            <ResetScores/>
          </div>
        
        </div>
        
        <ModeToggle/>
      </GameContextProvider>
  );
}
