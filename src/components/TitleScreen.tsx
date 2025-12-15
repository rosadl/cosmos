import coverImg from "../assets/cover.png";
type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
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
        <p className="cover-subtitle">Embarcate en una emocionante aventura espacial!</p>
        <button className="cover-btn" onClick={onStart}>
          Unete a la mision
        </button>
      </div>
    </main>
  );
}
