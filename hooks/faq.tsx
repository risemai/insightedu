'use client';

import { client } from '@/sanity/lib/client';
import { FaqType } from '@/types/faq.types';
import { useQuery } from '@tanstack/react-query';

const FAQ_FIELDS = `
  _id,
  question,
  answer
`;

export function useFaq() {
  return useQuery<FaqType[]>({
    queryKey: ['faq'],
    queryFn: async () => {
      return client.fetch(`
        *[_type == "faq"]
        | order(_createdAt desc) {
          ${FAQ_FIELDS},
        }
      `);
    },
  });
}
