'use client';

import { Course } from '@/types';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
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

export function useCoursesPaginated(paramString?: string) {
  const params = new URLSearchParams(paramString || '');

  const search = params.get('search') || '';
  const page = Number(params.get('page')) || 1;
  const limit = Number(params.get('limit')) || 12;
  const skip = (page - 1) * limit;

  return useQuery<{
    courses: Course[];
    totalCount: number;
    page: number;
    totalPages: number;
  }>({
    queryKey: ['courses', page, search, limit],
    queryFn: async () => {
      const totalCount: number = await client.fetch(
        `count(*[_type == "course" && (
          title match "${search}*" ||
          description match "${search}*"
        )])`
      );

      const courses: Course[] = await client.fetch(`
        *[_type == "course" && (
          title match "${search}*" ||
          description match "${search}*"
        )]
        | order(_createdAt desc)
        [${skip}...${skip + limit}]{
          ${COURSE_FIELDS},
          "image": image.asset->url
        }
      `);

      const totalPages = Math.ceil(totalCount / limit);

      return {
        courses,
        totalCount,
        page,
        totalPages,
      };
    },
    placeholderData: keepPreviousData,
  });
}

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
