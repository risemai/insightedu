'use client';

import { client } from '@/sanity/lib/client';
import { successStoriesType } from '@/types';
import { useQuery } from '@tanstack/react-query';

const SUCCESS_STORY_FIELDS = `
    _id,
    name,
    designation,
    description,
    _createdAt
`;

export function useSuccessStories() {
  return useQuery<successStoriesType[]>({
    queryKey: ['success-stories'],
    queryFn: async () => {
      return client.fetch(`
        *[_type == "successStory"]
        | order(_createdAt desc) {
          ${SUCCESS_STORY_FIELDS},
          "image": image.asset->url
        }
      `);
    },
  });
}
