"use client";

import Gameboard from "@/components/Gameboard/Gameboard";
import { GameContextProvider } from "@/contexts/GameContext";
import React from "react";

export default function Home() {
  return (
      <GameContextProvider>
        <div>
          <Gameboard/>
        </div>
      </GameContextProvider>
  );
}
