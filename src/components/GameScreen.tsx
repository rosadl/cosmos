import { useEffect, useMemo, useRef, useState } from "react";
import { story } from "../story";
import type { Choice, Team, TeamNames } from "../types";
import "./GameScreen.css";

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

  // path tipo "/audio/N0.mp3" -> base + "audio/N0.mp3"
  if (path.startsWith("/")) return `${base}${path.slice(1)}`;
  // path tipo "audio/N0.mp3" -> base + "audio/N0.mp3"
  return `${base}${path}`;
}

export default function GameScreen({ teamNames, onRestartMission }: Props) {
  const [nodeId, setNodeId] = useState<string>(story.start);
  const [score, setScore] = useState<Score>({ A: 0, B: 0 });

  // Para cumplir política de autoplay: solo intentamos reproducir tras interacción.
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const node = useMemo(() => story.nodes[nodeId], [nodeId]);

  const applyChoice = (choice: Choice) => {
    setHasUserInteracted(true);

    if (node && isPlayableTeam(node.teamTurn)) {
      setScore((s) => ({ ...s, [node.teamTurn]: s[node.teamTurn] + choice.points }));
    }
    setNodeId(choice.target);
  };

  // Cargar y (si ya hubo interacción) intentar reproducir el audio del nodo
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const url = resolveAssetUrl(node?.audio);
    if (!url) {
      // Si no hay audio para este nodo, paramos
      el.pause();
      el.removeAttribute("src");
      el.load();
      setIsAudioPlaying(false);
      return;
    }

    // Cambia la fuente del audio
    el.pause();
    el.src = url;
    el.load();
    setIsAudioPlaying(false);

    // Autoplay solo tras interacción
    if (hasUserInteracted) {
      el.play()
        .then(() => setIsAudioPlaying(true))
        .catch(() => {
          // Si el navegador bloquea o falla, no hacemos nada: el usuario puede dar Play manual
          setIsAudioPlaying(false);
        });
    }
  }, [nodeId, node?.audio, hasUserInteracted]);

  const toggleAudio = async () => {
    const el = audioRef.current;
    if (!el) return;

    // Si el nodo no tiene audio, no hacemos nada
    if (!node?.audio) return;

    try {
      setHasUserInteracted(true);
      if (el.paused) {
        await el.play();
        setIsAudioPlaying(true);
      } else {
        el.pause();
        setIsAudioPlaying(false);
      }
    } catch {
      setIsAudioPlaying(false);
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

  const imageUrl = resolveAssetUrl(node.image);

  return (
    <main className="game">
      <div className="game-inner">
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
          {/* Imagen del nodo (PNG transparente) */}
          {imageUrl && (
            <img
              src={imageUrl}
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
      </div>
    </main>
  );
}



