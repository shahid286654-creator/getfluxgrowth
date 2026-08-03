export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "GetFluxGrowth replaced three hours of manual prospecting a day with a system that just works in the background. Our reps now spend all their time talking to people who are actually ready to buy.",
    name: "Marcus Chen",
    role: "VP of Sales",
    company: "Vertex Logistics",
    initials: "MC",
  },
  {
    quote:
      "The audit and outreach automation paid for itself in the first month. What impressed me most was how much the messaging actually sounded like us, not a generic bot.",
    name: "Priya Rao",
    role: "Head of Growth",
    company: "Northwind Analytics",
    initials: "PR",
  },
  {
    quote:
      "We went from missing after-hours inquiries to booking showings automatically overnight. The GetFluxGrowth team clearly understood our business before writing a single workflow.",
    name: "David Alvarez",
    role: "Managing Broker",
    company: "Brightside Realty Group",
    initials: "DA",
  },
  {
    quote:
      "Our CRM had years of duplicate and stale data. Within weeks it was clean, enriched, and finally trustworthy enough for the whole team to rely on.",
    name: "Sophie Turner",
    role: "Operations Director",
    company: "Lumen Dental Group",
    initials: "ST",
  },
];
