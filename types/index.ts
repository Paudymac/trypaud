// Global type definitions for the portfolio project

export interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

export interface PartnerLogo {
  name: string;
  image: string;
  url?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
  description?: string;
}

// Component prop types
export interface ScrollToProps {
  targetId: string;
}

export interface ScrollToHook {
  scrollToTarget: () => void;
}

// API Response types
export interface EmailResponse {
  success: boolean;
  message: string;
}
