export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  isPro?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Content {
  nav: {
    home: string;
    features: string;
    howItWorks: string;
    pricing: string;
    faq: string;
    download: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustBadge: string;
  };
  features: {
    title: string;
    items: Feature[];
  };
  supportedSites: {
    title: string;
    description: string;
    disclaimer: string;
  };
  howItWorks: {
    title: string;
    steps: Step[];
  };
  screenshots: {
    title: string;
    description: string;
  };
  pricing: {
    title: string;
    plans: PricingPlan[];
    disclaimer: string;
  };
  testimonials: {
    title: string;
    items: { quote: string; author: string }[];
  };
  faq: {
    title: string;
    items: FAQ[];
  };
  footer: {
    cta: string;
    subCta: string;
    disclaimer: string;
  };
}
