'use client';

import { Course } from '@/types';
import { useQuery } from '@tanstack/react-query';
import CoursesData from '@/lib/json-files/courses.json';

export function useCourses() {
  return useQuery<Course[]>({
    queryKey: ['courses'],
    queryFn: () => CoursesData,
  });
}

export function useFeaturedCourse() {
  return useQuery<Course>({
    queryKey: ['featured-courses'],
    queryFn: () => {
      const featuredCourse = CoursesData.filter(
        (course: Course) => course.isFeatured
      );
      return featuredCourse[0];
    },
  });
}

export function useCoursesBySlug(slug: string) {
  return useQuery<Course | undefined>({
    queryKey: ['course', slug],
    queryFn: () => CoursesData.find((course: Course) => course.slug === slug),
  });
}
