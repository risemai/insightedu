'use client';

import { client } from '@/sanity/lib/client';
import { SitePagesType } from '@/types';
import { useQuery } from '@tanstack/react-query';

const SITE_PAGES_FIELDS = `
  title,
  description,
`;

export function usePrivacyPolicy() {
  return useQuery<SitePagesType>({
    queryKey: ['privacyPolicy'],
    queryFn: async () => {
      return client.fetch(
        `*[_id == "privacyPolicy"][0]` + `{ ${SITE_PAGES_FIELDS} }`
      );
    },
  });
}

export function useTermOfConditions() {
  return useQuery<SitePagesType>({
    queryKey: ['termOfConditions'],
    queryFn: async () => {
      return client.fetch(
        `*[_id == "termsOfConditions"][0]` + `{ ${SITE_PAGES_FIELDS} }`
      );
    },
  });
}

export function useSupportCenter() {
  return useQuery<SitePagesType>({
    queryKey: ['supportCenter'],
    queryFn: async () => {
      return client.fetch(
        `*[_id == "supportCenter"][0]` + `{ ${SITE_PAGES_FIELDS} }`
      );
    },
  });
}
