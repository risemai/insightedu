'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { PublicFooter, PublicNavbar } from '../shared';
import { getQueryClient } from '@/lib/react-query';

const queryClient = getQueryClient();

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <PublicNavbar />
      <main className='mt-16'>{children}</main>
      <PublicFooter />
    </QueryClientProvider>
  );
}
