'use client';

import { Course } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { client } from '@/sanity/lib/client';

const COURSE_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  instructors,
  currentPrice,
  originalPrice,
  description,
  modules,
  hours,
  quizzes,
  assignments,
  sessions,
  isFeatured,
  faq,
  enrolled,
  rating,
  courseFeatures,
  learningOutcomes,
  totalReviews,
  _createdAt
`;

export function useCourses() {
  return useQuery<Course[]>({
    queryKey: ['courses'],
    queryFn: async () => {
      return client.fetch(`
        *[_type == "course"]
        | order(_createdAt desc) {
          ${COURSE_FIELDS},
          "image": image.asset->url
        }
      `);
    },
  });
}

export function useFeaturedCourse() {
  return useQuery<Course>({
    queryKey: ['featured-course'],
    queryFn: async () => {
      return client.fetch(`
        *[_type == "course" && isFeatured == true]
        | order(_createdAt desc)[0] {
          ${COURSE_FIELDS},
          "image": image.asset->url
        }
      `);
    },
  });
}

export function useCoursesBySlug(slug: string) {
  return useQuery<Course>({
    queryKey: ['course', slug],
    queryFn: async () => {
      return client.fetch(
        `
        *[_type == "course" && slug.current == $slug][0]{
          ${COURSE_FIELDS},
          "image": image.asset->url
        }
      `,
        { slug }
      );
    },
    enabled: !!slug,
  });
}
