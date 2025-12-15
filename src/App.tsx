import { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import TeamSetupScreen from "./components/TeamSetupScreen";
import GameScreen from "./components/GameScreen";
import type { TeamNames } from "./types";

type Mode = "title" | "setup" | "game";

export default function App() {
  const [mode, setMode] = useState<Mode>("title");
  const [teamNames, setTeamNames] = useState<TeamNames>({ A: "Equipo A", B: "Equipo B" });

  if (mode === "title") {
    return <TitleScreen onStart={() => setMode("setup")} />;
  }

  if (mode === "setup") {
    return (
      <TeamSetupScreen
        onDone={(names) => {
          setTeamNames(names);
          setMode("game");
        }}
      />
    );
  }

  return (
    <GameScreen
      teamNames={teamNames}
      onRestartMission={() => {
        setMode("title");
        // opcional: si quieres forzar que se reescriban siempre al empezar:
        // setTeamNames({ A: "Equipo A", B: "Equipo B" });
      }}
    />
  );
}



