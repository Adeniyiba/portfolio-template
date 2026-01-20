export type PortfolioType = "thread" | "article";
export type Category =
  | "All"
  | "Yield"
  | "Security"
  | "Infrastructure"
  | "Tokenomics"
  | "Markets"
  | "Analytics";

export type PortfolioItem = {
  type: PortfolioType;
  category: Exclude<Category, "All">;
  title: string;
  date: string;
  description: string;
  tags: string[];
  url: string;
};

export const categories: Category[] = [
  "All",
  "Yield",
  "Security",
  "Infrastructure",
  "Tokenomics",
  "Markets",
  "Analytics",
];

export const items: PortfolioItem[] = [
  {
    type: "article",
    category: "Security",
    title: "Example Article Title",
    date: "Jan 6, 2026",
    description:
      "Short description of what this article is about and why it matters.",
    tags: ["Due Diligence", "Risk", "Legal"],
    url: "https://x.com",
  },
  {
    type: "thread",
    category: "Yield",
    title: "Example Thread Title",
    date: "Jan 5, 2026",
    description: "Short description of this thread.",
    tags: ["Yield", "DeFi", "Strategy"],
    url: "https://x.com",
  },
];
