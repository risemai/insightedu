'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { PublicFooter, PublicNavbar } from '../shared';
import { getQueryClient } from '@/lib/react-query';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const queryClient = getQueryClient();

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <PublicNavbar />
      <main className='mt-16'>{children}</main>
      <PublicFooter />
    </QueryClientProvider>
  );
}
