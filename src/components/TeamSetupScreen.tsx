import { useEffect, useState } from "react";
import { loadTeamNames, saveTeamNames } from "../storage";

type Props = {
  onDone: () => void; // solo cambia de pantalla
};

export default function TeamSetupScreen({ onDone }: Props) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  useEffect(() => {
    const stored = loadTeamNames();
    setA(stored.A);
    setB(stored.B);
  }, []);

  const canContinue = a.trim().length > 0 && b.trim().length > 0;

  const handleContinue = () => {
    saveTeamNames({ A: a.trim(), B: b.trim() }); // sobrescribe siempre
    onDone();
  };

  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
        padding: 24
      }}
    >
      <div style={{ width: "100%", maxWidth: 520 }}>
        <h2 style={{ marginTop: 0 }}>Configurar equipos</h2>

        <label style={{ display: "block", marginBottom: 12 }}>
          Equipo A
          <input
            value={a}
            onChange={(e) => setA(e.target.value)}
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </label>

        <label style={{ display: "block", marginBottom: 18 }}>
          Equipo B
          <input
            value={b}
            onChange={(e) => setB(e.target.value)}
            style={{ width: "100%", padding: 10, marginTop: 6 }}
          />
        </label>

        <button
          onClick={handleContinue}
          disabled={!canContinue}
          style={{ padding: "10px 14px", cursor: canContinue ? "pointer" : "not-allowed" }}
        >
          Continuar
        </button>
      </div>
    </main>
  );
}
