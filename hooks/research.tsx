'use client';

import { client } from '@/sanity/lib/client';
import { ResearchType } from '@/types';
import { useQuery } from '@tanstack/react-query';

const RESEARCH = `
    _id,
    title,
    description,
    "image": image.asset->url,
    "alt": image.alt,
    link,
    _createdAt
`;

export function useRecentProjects() {
  return useQuery<ResearchType[]>({
    queryKey: ['researchProjects'],
    queryFn: async () => {
      return client.fetch(`
        *[_type == "research"]
        | order(_createdAt desc) [0...3] {        
            ${RESEARCH},
        }
        `);
    },
  });
}

export function useResearchProjects() {
  return useQuery<ResearchType[]>({
    queryKey: ['researchProjects'],
    queryFn: async () => {
      return client.fetch(`
        *[_type == "research"]
        | order(_createdAt desc) {        
            ${RESEARCH},
        }
        `);
    },
  });
}

export function useResearchPagination(paramString?: string) {
  const params = new URLSearchParams(paramString || '');

  const page = Number(params.get('page')) || 1;
  const limit = Number(params.get('limit')) || 9;
  const skip = (page - 1) * limit;

  return useQuery<{
    research: ResearchType[];
    totalCount: number;
    page: number;
    totalPages: number;
  }>({
    queryKey: ['researchProjects', page, limit],
    queryFn: async () => {
      const totalCount: number = await client.fetch(
        `count(*[_type == "research"])`
      );

      const researchProjects = await client.fetch(`
        *[_type == "research"]
        | order(_createdAt desc)
        [${skip}...${skip + limit}] {
            ${RESEARCH},
        }
        `);

      const totalPages = Math.ceil(totalCount / limit);

      return {
        research: researchProjects,
        totalCount,
        page,
        totalPages,
      };
    },
  });
}
