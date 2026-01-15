// src/components/GameScreen.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { story } from "../story";
import type { Choice, Team, TeamNames } from "../types";
import "./GameScreen.css";

import FeedbackScreen from "./FeedbackScreen";
import negativeFeedbackImg from "../assets/feedbackNegative.png";

type Props = {
  teamNames: TeamNames;
  onRestartMission: () => void; // vuelve a portada
};

type Score = { A: number; B: number };

function isPlayableTeam(t: Team): t is "A" | "B" {
  return t === "A" || t === "B";
}

// Para que funcione bien en GitHub Pages (Vite) si tu app está en un subpath.
// Si la ruta es absoluta (http/https) la deja tal cual.
// Si es "/audio/.." la prefija con BASE_URL.
function resolveAssetUrl(path?: string) {
  if (!path) return undefined;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;

  const base =
    typeof import.meta !== "undefined" && (import.meta as any).env?.BASE_URL
      ? (import.meta as any).env.BASE_URL
      : "/";

  if (path.startsWith("/")) return `${base}${path.slice(1)}`;
  return `${base}${path}`;
}

type FeedbackState = null | {
  type: "positive" | "negative";
  teamKey: "A" | "B";
  teamName: string;
  deltaPoints: number;
  teamTotalPoints: number;
  nextNodeId: string;
  imageUrl?: string;
};

export default function GameScreen({ teamNames, onRestartMission }: Props) {
  const [nodeId, setNodeId] = useState<string>(story.start);
  const [score, setScore] = useState<Score>({ A: 0, B: 0 });

  // Feedback intermedio (positivo/negativo)
  const [feedback, setFeedback] = useState<FeedbackState>(null);

  // Audio:
  // - audioEnabled: el usuario ha elegido "audio ON" y debe persistir entre nodos
  // - isAudioPlaying: estado visual del botón
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const node = useMemo(() => story.nodes[nodeId], [nodeId]);

  const applyChoice = (choice: Choice) => {
    // Si es 0 puntos (transición / convergencia), NO mostramos feedback
    if (choice.points === 0) {
      setNodeId(choice.target);
      return;
    }

    // Si el nodo actual no es de equipo (SYSTEM), avanzamos sin feedback
    if (!node || !isPlayableTeam(node.teamTurn)) {
      setNodeId(choice.target);
      return;
    }

    const teamKey = node.teamTurn; // "A" | "B"
    const teamName = teamKey === "A" ? teamNames.A : teamNames.B;

    // Total nuevo (para mostrar en feedback)
    const newTotal = score[teamKey] + choice.points;

    // Sumamos puntos al equipo que decide
    setScore((s) => ({ ...s, [teamKey]: s[teamKey] + choice.points }));

    // Imagen feedback:
    // + => imagen del nodo siguiente
    // - => imagen fija importada (NO pasar por resolveAssetUrl)
    const nextNode = story.nodes[choice.target];
    const nextImageUrl = resolveAssetUrl(nextNode?.image);

    const imageUrl = choice.points > 0 ? nextImageUrl : negativeFeedbackImg;

    // Pausar audio del nodo durante feedback (silencio en feedback)
    const el = audioRef.current;
    if (el) {
      el.pause();
      setIsAudioPlaying(false);
    }

    setFeedback({
      type: choice.points > 0 ? "positive" : "negative",
      teamKey,
      teamName,
      deltaPoints: choice.points,
      teamTotalPoints: newTotal,
      nextNodeId: choice.target,
      imageUrl
    });
  };

  // Cargar el audio del nodo y reproducirlo SOLO si el usuario lo activó (audioEnabled).
  // Si audioEnabled es false, se queda pausado aunque cambie de nodo.
  useEffect(() => {
    // Si estamos mostrando feedback, no tocamos audio del nodo
    if (feedback) return;

    const el = audioRef.current;
    if (!el) return;

    const url = resolveAssetUrl(node?.audio);
    if (!url) {
      el.pause();
      el.removeAttribute("src");
      el.load();
      setIsAudioPlaying(false);
      return;
    }

    // Cambia la fuente
    el.pause();
    el.src = url;
    el.load();
    setIsAudioPlaying(false);

    // Persistencia: si el usuario activó audio, intentamos reproducir en cada nodo
    if (audioEnabled) {
      el.play()
        .then(() => setIsAudioPlaying(true))
        .catch(() => setIsAudioPlaying(false));
    }
  }, [nodeId, node?.audio, feedback, audioEnabled]);

  const toggleAudio = async () => {
    const el = audioRef.current;
    if (!el) return;

    // Si el nodo no tiene audio, no hacemos nada
    if (!node?.audio) return;

    try {
      if (el.paused) {
        await el.play();
        setIsAudioPlaying(true);
        setAudioEnabled(true); // a partir de ahora, audio persistente entre nodos
      } else {
        el.pause();
        setIsAudioPlaying(false);
        setAudioEnabled(false); // el usuario quiere silencio
      }
    } catch {
      setIsAudioPlaying(false);
      // Si falla play, no activamos audioEnabled
    }
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

  const nodeImageUrl = resolveAssetUrl(node.image);

  return (
    <main className="game">
      <div className="game-inner">
        {/* TOPBAR SIEMPRE VISIBLE */}
        <div className="game-topbar">
          <button className="game-link" onClick={onRestartMission}>
            Reiniciar misión
          </button>

          {/* Controles de audio (solo si hay audio en el nodo) */}
          {node.audio && (
            <button className="game-link" onClick={toggleAudio}>
              {isAudioPlaying ? "Pausar audio" : "Reproducir audio"}
            </button>
          )}
        </div>

        {/* elemento audio (sin controles visibles) */}
        <audio ref={audioRef} preload="auto" />

        {/* HUD SIEMPRE VISIBLE */}
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

        {/* CONTENIDO CENTRAL: feedback o nodo */}
        {feedback ? (
          <FeedbackScreen
            teamName={feedback.teamName}
            teamTotalPoints={feedback.teamTotalPoints}
            deltaPoints={feedback.deltaPoints}
            type={feedback.type}
            imageUrl={feedback.imageUrl}
            onContinue={() => {
              setNodeId(feedback.nextNodeId);
              setFeedback(null);
            }}
          />
        ) : (
          <div className="game-card">
            {/* Imagen del nodo (PNG transparente) */}
            {nodeImageUrl && (
              <img
                src={nodeImageUrl}
                alt={node.title}
                className="game-nodeImage"
                draggable={false}
              />
            )}

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
        )}
      </div>
    </main>
  );
}



