'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { PublicFooter, PublicNavbar } from '../shared';
import { getQueryClient } from '@/lib/react-query';
import { useEffect } from 'react';
import { Toaster } from 'sonner';

const queryClient = getQueryClient();

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <PublicNavbar />
      <main className='mt-16'>{children}</main>
      <PublicFooter />
      <Toaster position='top-center' richColors />
    </QueryClientProvider>
  );
}
