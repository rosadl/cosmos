import type { Story } from "./types";

export const story: Story = {
  start: "N0",
  nodes: {
    N0: {
      id: "N0",
      title: "N0 — Despertar",
      text: "La nave COSMOS despierta.",
      teamTurn: "A",
      choices: [
        { label: "Seguir la señal", target: "N1", points: 2 },
        { label: "Revisar el casco", target: "N2", points: 1 }
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
