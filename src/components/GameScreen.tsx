import { loadTeamNames } from "../storage";

type Props = {
  onBackToTitle: () => void;
};

export default function GameScreen({ onBackToTitle }: Props) {
  const teamNames = loadTeamNames(); // lectura directa

  return (
    <main style={{ padding: 24 }}>
      <div style={{ marginBottom: 12 }}>
        Equipo A: <b>{teamNames.A}</b> · Equipo B: <b>{teamNames.B}</b>
      </div>

      <button onClick={onBackToTitle} style={{ marginBottom: 16 }}>
        Volver a portada
      </button>

      Aquí irá el motor de nodos.
    </main>
  );
}
