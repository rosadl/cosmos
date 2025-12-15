import type { Story } from "./types";

export const story: Story = {
  start: "N0",
  nodes: {
    
    N0: {
      id: "N0",
      title: "Despertar en órbita",
      text: "La nave COSMOS I se activa tras un largo viaje a través del espacio. Han pasado más de doce años desde que dejó la Tierra, y ahora se encuentra cerca de una estrella lejana, rodeada de varios planetas desconocidos.\n\nLos sensores comienzan a enviar información básica: tamaños, trayectorias y señales procedentes de esos mundos. Uno de los planetas destaca. Su distancia a la estrella sugiere que podría tener condiciones compatibles con agua líquida.\n\nLa misión ha comenzado. Antes de avanzar, el equipo debe decidir cómo explorar este nuevo sistema estelar.",
      teamTurn: "A",
      image: "/img/N0.png",
      audio: "/audio/N0.mp3",
      choices: [
        {
          label: "Escanear el sistema",
          target: "N1",
          points: 2
        },
        {
          label: "Aproximarse al planeta",
          target: "N2",
          points: -1
        }
      ]
    },

    N1: {
      id: "N1",
      title: "N1 — Señal",
      text: "La señal tiene estructura matemática.",
      teamTurn: "B",
      choices: [{ label: "Continuar", target: "N3", points: 0 }]
    },

    N2: {
      id: "N2",
      title: "N2 — Casco",
      text: "Microfracturas en el casco.",
      teamTurn: "B",
      choices: [{ label: "Continuar", target: "N3", points: 0 }]
    },

    N3: {
      id: "N3",
      title: "N3 — Convergencia",
      text: "Llegada al planeta.",
      teamTurn: "B",
      choices: [
        { label: "Descender", target: "N4", points: 2 },
        { label: "Orbitar", target: "N5", points: 1 }
      ]
    },

    N4: { id: "N4", title: "Final 1", text: "Final.", teamTurn: "SYSTEM", ending: true, choices: [] },
    N5: { id: "N5", title: "Final 2", text: "Final.", teamTurn: "SYSTEM", ending: true, choices: [] }
  }
};
