export type MentorType = {
  _id: string;
  name: string;
  role: 'mentor' | 'supportMentor';
  image: string;
  alt?: string;
  _createdAt: string;
};
