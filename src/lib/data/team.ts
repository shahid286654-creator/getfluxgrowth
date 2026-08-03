export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ariel Novak",
    role: "Founder & CEO",
    bio: "Spent a decade building growth systems for B2B teams before starting GetFluxGrowth to make AI automation accessible to businesses of every size.",
    initials: "AN",
  },
  {
    name: "Jordan Wells",
    role: "Head of AI Engineering",
    bio: "Leads the team that designs and ships every automation system, with a background in applied machine learning and large-scale data pipelines.",
    initials: "JW",
  },
  {
    name: "Maya Devereux",
    role: "Head of Client Success",
    bio: "Makes sure every system we launch keeps delivering — owning onboarding, reporting, and the ongoing optimization roadmap for every client.",
    initials: "MD",
  },
];
