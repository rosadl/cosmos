import { useMemo, useState } from "react";
import { story } from "../story";
import type { Choice, Team, TeamNames } from "../types";
import "./gameScreen.css";

type Props = {
  teamNames: TeamNames;
  onRestartMission: () => void; // vuelve a portada
};

type Score = { A: number; B: number };

function isPlayableTeam(t: Team): t is "A" | "B" {
  return t === "A" || t === "B";
}

export default function GameScreen({ teamNames, onRestartMission }: Props) {
  const [nodeId, setNodeId] = useState<string>(story.start);
  const [score, setScore] = useState<Score>({ A: 0, B: 0 });

  const node = useMemo(() => story.nodes[nodeId], [nodeId]);

  const applyChoice = (choice: Choice) => {
    if (node && isPlayableTeam(node.teamTurn)) {
      setScore((s) => ({ ...s, [node.teamTurn]: s[node.teamTurn] + choice.points }));
    }
    setNodeId(choice.target);
  };

  if (!node) {
    return (
      <main className="game">
        <div className="game-inner">
          <div className="game-topbar">
            <button className="game-link" onClick={onRestartMission}>
              Reiniciar misión
            </button>
          </div>

          <div className="game-card">
            <h2 className="game-title">Error</h2>
            <p className="game-text">Nodo no encontrado: {nodeId}</p>
          </div>
        </div>
      </main>
    );
  }

  const turnLabel =
    node.teamTurn === "A"
      ? `Turno: ${teamNames.A}`
      : node.teamTurn === "B"
      ? `Turno: ${teamNames.B}`
      : "Turno: Sistema";

  return (
    <main className="game">
      <div className="game-inner">
        <div className="game-topbar">
          <button className="game-link" onClick={onRestartMission}>
            Reiniciar misión
          </button>
        </div>

        <div className="game-hud">
          <div className="game-hudBlock">
            <div className="game-hudLabel">Equipo A</div>
            <div className="game-hudValue">
              {teamNames.A} · {score.A} pts
            </div>
          </div>

          <div className="game-hudBlock game-hudCenter">
            <div className="game-hudLabel">Turno</div>
            <div className="game-hudValue">{turnLabel}</div>
          </div>

          <div className="game-hudBlock game-hudRight">
            <div className="game-hudLabel">Equipo B</div>
            <div className="game-hudValue">
              {teamNames.B} · {score.B} pts
            </div>
          </div>
        </div>

        <div className="game-card">
          <h2 className="game-title">{node.title}</h2>
          <p className="game-text">{node.text}</p>

          <div className="game-actions">
            {node.choices.map((c, idx) => (
              <button key={idx} className="game-btn" onClick={() => applyChoice(c)}>
                {c.label}
              </button>
            ))}
          </div>

          {node.ending && (
            <p className="game-endingNote">
              Fin de la misión. Usa “Reiniciar misión” para comenzar de nuevo.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}


