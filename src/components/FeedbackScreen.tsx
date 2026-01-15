// src/components/FeedbackScreen.tsx
import "./FeedbackScreen.css";

type Props = {
  teamName: string;
  teamTotalPoints: number;
  deltaPoints: number;
  type: "positive" | "negative";
  imageUrl?: string;
  onContinue: () => void;
};

export default function FeedbackScreen({
  teamName,
  teamTotalPoints,
  deltaPoints,
  type,
  imageUrl,
  onContinue
}: Props) {
  const isPositive = type === "positive";

  return (
    <div className="feedback-inner">
      <div className="feedback-header">
        <div className="feedback-teamRow">
          <span className="feedback-team">EQUIPO {teamName}</span>
          <span className="feedback-total">Puntuación: {teamTotalPoints}</span>
        </div>
      </div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Feedback"
          className="feedback-image"
          draggable={false}
        />
      )}

      <h2 className={`feedback-title ${isPositive ? "pos" : "neg"}`}>
        {isPositive ? "¡Excelente decisión, equipo!" : "Decisión arriesgada."}
      </h2>

      <p className={`feedback-sub ${isPositive ? "pos" : "neg"}`}>
        {isPositive
          ? "Ayudas a tu tripulación a alcanzar el objetivo."
          : "El equipo debe corregir el rumbo."}
      </p>

      <p className={`feedback-delta ${isPositive ? "pos" : "neg"}`}>
        {deltaPoints > 0 ? `+${deltaPoints}` : `${deltaPoints}`} puntos
      </p>

      <button className="feedback-btn" onClick={onContinue}>
        Continuar misión
      </button>
    </div>
  );
}


