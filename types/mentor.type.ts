export type MentorType = {
  _id: string;
  name: string;
  role: 'mentor' | 'supportMentor';
  image: string;
  alt?: string;
  description?: string | null;
  researchGate?: string | null;
  googleScholar?: string | null;
  _createdAt: string;
};
