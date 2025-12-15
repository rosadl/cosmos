import { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import "./styles/cover.css";

export default function App() {
  const [mode, setMode] = useState<"title" | "game">("title");

  if (mode === "title") return <TitleScreen onStart={() => setMode("game")} />;

  return <div style={{ padding: 24 }}>Aquí irá el motor de nodos.</div>;
}

