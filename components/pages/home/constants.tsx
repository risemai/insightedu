import { Course, TeamMember, Testimonial } from '@/types';

export const FEATURED_COURSE: Course = {
  id: 'res-001',
  title: 'Research Learning & Professional Development',
  instructor: 'Insight Edu Editor In Research',
  originalPrice: 31600,
  currentPrice: 16500,
  description:
    'Personal Development Skills for Researcher. Master the art of academic writing, methodology design, and publication strategies.',
  image: 'https://picsum.photos/seed/path1/800/500',
  slug: 'research-learning-professional-development',
  modules: 12,
  hours: 45,
  quizzes: 8,
  assignments: 5,
  sessions: 15,
  isFeatured: true,
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ahsan Habib',
    designation: 'University of Dhaka',
    story:
      'The research course helped me publish my first paper in a Q1 journal within 6 months.',
    image: 'https://i.pravatar.cc/150?u=ahsan',
  },
  {
    id: 2,
    name: 'Nusrat Jahan',
    designation: 'Research Fellow',
    story:
      'Incredible mentorship and hands-on modules. The session amount is worth every penny.',
    image: 'https://i.pravatar.cc/150?u=nusrat',
  },
  {
    id: 3,
    name: 'Dr. Rakib Ahmed',
    designation: 'PostDoc Scholar',
    story:
      "Insight Edu's consultancy service is professional and highly insightful for complex data analysis.",
    image: 'https://i.pravatar.cc/150?u=rakib',
  },
  {
    id: 4,
    name: 'Sabina Yasmin',
    designation: 'Masters Student',
    story:
      'Clear instructions and structured learning paths make tough concepts very easy to grasp.',
    image: 'https://i.pravatar.cc/150?u=sabina',
  },
  {
    id: 5,
    name: 'Tanvir Hasan',
    designation: 'Independent Researcher',
    story:
      'The best choice for online research skill development in Bangladesh.',
    image: 'https://i.pravatar.cc/150?u=tanvir',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Ariful Islam',
    role: 'Chief Research Editor',
    org: 'Insight Edu',
    image: 'https://i.pravatar.cc/150?u=ari',
  },
  {
    id: 2,
    name: 'Muna Akhter',
    role: 'Lead Academic Instructor',
    org: 'Insight Edu',
    image: 'https://i.pravatar.cc/150?u=muna',
  },
  {
    id: 3,
    name: 'Faisal Rahman',
    role: 'Data Analysis Expert',
    org: 'Insight Edu',
    image: 'https://i.pravatar.cc/150?u=fai',
  },
  {
    id: 4,
    name: 'Sadiya Sultana',
    role: 'Publication Consultant',
    org: 'Insight Edu',
    image: 'https://i.pravatar.cc/150?u=sad',
  },
];
