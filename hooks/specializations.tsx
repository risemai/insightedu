'use client';

import { client } from '@/sanity/lib/client';
import { SpecializationType } from '@/types';
import { useQuery } from '@tanstack/react-query';

const SPECIALIZATIONS = `
    _id,
    title,
    description,
    icon,
    color,
    _createdAt
`;

export function useSpecializations() {
  return useQuery<SpecializationType[]>({
    queryKey: ['specializations'],
    queryFn: async () => {
      return client.fetch(`
        *[_type == "specializations"]
        | order(_createdAt desc){        
            ${SPECIALIZATIONS},
        }
        `);
    },
  });
}
