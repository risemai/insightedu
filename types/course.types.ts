export interface Course {
  id: string;
  title: string;
  slug: string;
  instructor: string;
  originalPrice: number;
  currentPrice: number;
  description: string;
  image: string;
  modules: number;
  hours: number;
  quizzes: number;
  assignments: number;
  sessions: number;
  isFeatured: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  story: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  org: string;
  image: string;
}
