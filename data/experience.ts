export type ExperienceItem = {
  period: string;
  location: string;
  role: string;
  org: string;
  summary: string;
  bullets: string[];
};

export const experiences: ExperienceItem[] = [
  {
    period: "2024 - Present",
    location: "Lagos, Nigeria",
    role: "Your Role",
    org: "Your Company",
    summary:
      "Short summary of what you do in this role and the focus of your work.",
    bullets: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
      "Achievement or responsibility 3",
      "Achievement or responsibility 4",
    ],
  },
  {
    period: "2023 - 2024",
    location: "Remote",
    role: "Previous Role",
    org: "Previous Company",
    summary: "Short summary of the role.",
    bullets: ["Bullet 1", "Bullet 2", "Bullet 3"],
  },
];
