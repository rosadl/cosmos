import { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import TeamSetupScreen from "./components/TeamSetupScreen";
import GameScreen from "./components/GameScreen";
import HowToScreen from "./components/HowToScreen";
import type { TeamNames } from "./types";

type Mode = "title" | "howto" | "setup" | "game";

export default function App() {
  const [mode, setMode] = useState<Mode>("title");
  const [teamNames, setTeamNames] = useState<TeamNames>({
    A: "Equipo A",
    B: "Equipo B"
  });

  if (mode === "title") {
    return (
      <TitleScreen
        onStart={() => setMode("setup")}
        onHowTo={() => setMode("howto")}
      />
    );
  }

  if (mode === "howto") {
    return <HowToScreen onBack={() => setMode("title")} />;
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
        // opcional:
        // setTeamNames({ A: "Equipo A", B: "Equipo B" });
      }}
    />
  );
}




