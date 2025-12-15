import { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import TeamSetupScreen from "./components/TeamSetupScreen";
import GameScreen from "./components/GameScreen";

type Mode = "title" | "setup" | "game";

export default function App() {
  const [mode, setMode] = useState<Mode>("title");

  if (mode === "title") return <TitleScreen onStart={() => setMode("setup")} />;

  if (mode === "setup") return <TeamSetupScreen onDone={() => setMode("game")} />;

  return <GameScreen onBackToTitle={() => setMode("title")} />;
}



