export type TeamNames = { A: string; B: string };

const KEY = "cosmos.teamNames";

export function loadTeamNames(): TeamNames {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { A: "Equipo A", B: "Equipo B" };
    const parsed = JSON.parse(raw) as Partial<TeamNames>;
    return {
      A: typeof parsed.A === "string" && parsed.A.trim() ? parsed.A : "Equipo A",
      B: typeof parsed.B === "string" && parsed.B.trim() ? parsed.B : "Equipo B"
    };
  } catch {
    return { A: "Equipo A", B: "Equipo B" };
  }
}

export function saveTeamNames(names: TeamNames): void {
  localStorage.setItem(KEY, JSON.stringify(names));
}
