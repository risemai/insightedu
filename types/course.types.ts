export interface Course {
  id: string;
  title: string;
  slug: string;
  instructors: string[];
  originalPrice: number;
  currentPrice: number;
  description: string;
  image: string;
  modules: string[];
  hours: number;
  quizzes: number;
  assignments: number;
  sessions: number;
  isFeatured: boolean;
  rating: number;
  enrolled: number;
  learningOutcomes: string[] | null;
  courseFeatures: string[] | null;
  totalReviews: number | null;
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
