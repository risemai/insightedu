'use client';

import { client } from '@/sanity/lib/client';
import { MentorType } from '@/types';
import { useQuery } from '@tanstack/react-query';

const MENTOR_MENTOR = `
_id,
name,
role,
"image": image.asset->url,
"alt": image.alt,
description,
researchGate,
googleScholar,
 _createdAt
`;

export function useMentors() {
  return useQuery<MentorType[]>({
    queryKey: ['mentors'],
    queryFn: async () => {
      return client.fetch(`
        *[_type == "mentor"]
        | order(_createdAt desc) {
          ${MENTOR_MENTOR},
 
        }
      `);
    },
  });
}
