import { useState } from "react";
import type { TeamNames } from "../types";
import "./teamSetup.css";
import setupImg from "../assets/setup.png"; // ajusta ruta/nombre

type Props = {
  onDone: (names: TeamNames) => void;
};

export default function TeamSetupScreen({ onDone }: Props) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const canContinue = a.trim().length > 0 && b.trim().length > 0;

  const handleContinue = () => {
    onDone({ A: a.trim(), B: b.trim() });
  };

  return (
    <main className="teamSetup">
      <div className="teamSetup-inner">
        <img src={setupImg} alt="Configuración de equipos" className="teamSetup-image" />

        <h2 className="teamSetup-title">Configurar equipos</h2>

        <div className="teamSetup-field">
          <label className="teamSetup-label" htmlFor="teamA">Equipo A</label>
          <input
            id="teamA"
            className="teamSetup-input"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="Nombre del equipo A"
          />
        </div>

        <div className="teamSetup-field">
          <label className="teamSetup-label" htmlFor="teamB">Equipo B</label>
          <input
            id="teamB"
            className="teamSetup-input"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="Nombre del equipo B"
          />
        </div>

        <p className="teamSetup-intro">
          Cada decisión que tomes afectará la misión y la puntuación de tu equipo.
          ¡Emprende un viaje inolvidable a través de las estrellas!
        </p>

        <div className="teamSetup-actions">
          <button className="teamSetup-btn" onClick={handleContinue} disabled={!canContinue}>
            Continuar
          </button>
        </div>
      </div>
    </main>
  );
}

