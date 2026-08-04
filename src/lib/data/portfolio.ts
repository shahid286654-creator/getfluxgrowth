export interface PortfolioProject {
  slug: string;
  title: string;
  description: string;
  url: string;
  tech: string[];
  thumbnail: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "orient-flame",
    title: "Orient Flame",
    description: "Modern business website with premium UI/UX.",
    url: "https://orientflame.netlify.app/",
    tech: ["React", "Vite", "Tailwind CSS"],
    thumbnail: "/portfolio/orient-flame.jpg",
  },
  {
    slug: "beyond-gym",
    title: "Beyond Gym",
    description: "High-converting fitness and gym website.",
    url: "https://beyondgym.netlify.app/",
    tech: ["React", "Vite", "Tailwind CSS"],
    thumbnail: "/portfolio/beyond-gym.jpg",
  },
  {
    slug: "the-x-gyms",
    title: "The X Gyms",
    description: "Professional fitness brand website with responsive design.",
    url: "https://thexgyms.netlify.app/",
    tech: ["React", "Vite", "Tailwind CSS"],
    thumbnail: "/portfolio/the-x-gyms.jpg",
  },
  {
    slug: "falah-chicken",
    title: "Falah Chicken",
    description: "Restaurant website with modern layout and online ordering experience.",
    url: "https://falahchicken.netlify.app/",
    tech: ["React", "Vite", "Tailwind CSS"],
    thumbnail: "/portfolio/falah-chicken.jpg",
  },
];
