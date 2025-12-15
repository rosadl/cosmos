export type Team = "A" | "B" | "SYSTEM";

export type TeamNames = { A: string; B: string };

export type Choice = {
  label: string;
  target: string;
  points: number; // puntuación única por elección
};

export type StoryNode = {
  id: string;
  title: string;
  text: string;
  teamTurn: Team;
  choices: Choice[];
  ending?: boolean;
};

export type Story = {
  start: string;
  nodes: Record<string, StoryNode>;
};

