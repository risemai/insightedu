'use client';

import { client } from '@/sanity/lib/client';
import { ServiceType } from '@/types';
import { useQuery } from '@tanstack/react-query';

const SERVICES = `
    _id,
    title,
    description,
    icon,
    features,
    _createdAt
`;

export function useServices() {
  return useQuery<ServiceType[]>({
    queryKey: ['researchProjects'],
    queryFn: async () => {
      return client.fetch(`
        *[_type == "service"]
        | order(_createdAt desc) [0...3] {        
            ${SERVICES},
        }
        `);
    },
  });
}
