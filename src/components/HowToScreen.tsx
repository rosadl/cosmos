import "./HowTo.css";
import howToImg from "../assets/howto.png";

type Props = {
  onBack: () => void;
};

export default function HowToScreen({ onBack }: Props) {
  return (
    <main className="howto">
      <div className="howto-inner">
        <img src={howToImg} alt="Instrucciones COSMOS" className="howto-image" />

        <h2 className="howto-title">Cómo se juega</h2>

        <div className="howto-text">
          <p>
            COSMOS es una aventura narrativa interactiva para <b>dos equipos</b>. 
            Formáis parte de la tripulación de la nave <b>COSMOS I</b>, enviada a explorar
            regiones del espacio en busca de <b>planetas que puedan albergar condiciones
            aptas para la vida</b>.
          </p>

          <p>
            A lo largo de la misión, la nave analiza sistemas estelares, observa planetas
            desconocidos y evalúa posibles formas de exploración. El objetivo es <b>comprender y decidir cómo avanzar</b>.
          </p>

          <ul className="howto-list">
            <li>
              En cada momento, el juego indica <b>qué equipo debe tomar la decisión</b>.
            </li>
            <li>
              Las decisiones pueden <b>sumar o restar puntos</b> al equipo que decide,
              según cómo afecten al desarrollo de la misión.
            </li>
            <li>
              Algunas decisiones tienen consecuencias inmediatas, mientras que otras
              solo revelan su impacto más adelante.
            </li>
            <li>
              En ciertos momentos, distintas rutas de exploración pueden
              <b> converger en una misma situación</b>. En estos puntos no hay decisiones
              que tomar ni se suman puntos: la misión continúa de forma automática.
              Aunque se llegue al mismo lugar, la puntuación acumulada influirá en
              lo que ocurra después.
            </li>
            <li>
              La misión finaliza en uno de varios desenlaces posibles, determinados por
              el conjunto de decisiones tomadas durante la exploración.
            </li>
          </ul>

          <p className="howto-note">
            Consejo: en la exploración del espacio, la decisión más evidente no siempre es la más acertada.
          </p>
        </div>

        <div className="howto-actions">
          <button className="howto-btn" onClick={onBack}>
            Volver
          </button>
        </div>
      </div>
    </main>
  );
}

