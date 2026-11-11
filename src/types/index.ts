export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface LiftCategory {
  name: string;
  tagline: string;
  image: string;
  href: string;
}

export interface LiftModel {
  name: string;
  price: string;
  image: string;
  featured?: boolean;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

export interface Project {
  name: string;
  category: string;
  image: string;
}

export interface BlogPost {
  title: string;
  date: string;
  image: string;
  href: string;
}

export interface Certification {
  name: string;
  icon: string;
}
