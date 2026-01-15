import coverImg from "../assets/cover.png";
import "../styles/cover.css";

type Props = {
  onStart: () => void;
  onHowTo: () => void;
};

export default function TitleScreen({ onStart, onHowTo }: Props) {
  return (
    <main className="cover">
      <div className="cover-inner">
        <img
          src={coverImg}
          alt="COSMOS cover"
          style={{
            width: "100%",
            maxHeight: "70vh",
            objectFit: "contain",
            display: "block",
            margin: "0 auto 16px"
          }}
        />

        <h1 className="cover-title">COSMOS</h1>

        <p className="cover-subtitle">
          Embárcate en una emocionante aventura espacial!
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="cover-btn" onClick={onStart}>
            Únete a la mision
          </button>

          {/* Botón secundario */}
          <button className="cover-btn" onClick={onHowTo}>
            Cómo se juega
          </button>
        </div>
      </div>
    </main>
  );
}

