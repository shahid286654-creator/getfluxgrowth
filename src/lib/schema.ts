import { siteConfig } from "@/lib/site";
import { founder } from "@/lib/data/founder";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon-512`,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: Object.values(siteConfig.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en",
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#service`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/icon-512`,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: Object.values(siteConfig.social),
    areaServed: "Worldwide",
    priceRange: "$1,500+",
    serviceType: [
      "AI Automation",
      "Website Development",
      "SEO",
      "Digital Marketing",
      "AI Chatbot Development",
      "Workflow Automation",
    ],
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/about/#person`,
    name: founder.name,
    jobTitle: founder.role,
    description: founder.bio,
    url: `${siteConfig.url}/about`,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/shahid-anwar.jpg`,
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
