'use client';

import { useResearchPagination } from '@/hooks/research';
import { generateQueryString } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ResearchCard } from './research-card';
import { AuthorshipPosition } from './authorship-position';
import { ResearchCardSkeleton } from '@/components/skeletons';

export function ResearchPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [params, setParams] = useState({
    search: searchParams.get('search') || '',
    page: searchParams.get('page') || '1',
  });

  const queryString = generateQueryString(params);

  const { data, isLoading } = useResearchPagination(queryString);

  useEffect(() => {
    router.replace(queryString, { scroll: false });
  }, [queryString, router]);

  return (
    <div>
      {/* Hero Section */}
      <section className='bg-slate-900 py-24 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute top-0 right-0 w-full h-full'
            style={{
              backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          ></div>
        </div>
        <div className='container mx-auto px-4 relative z-10 text-center'>
          <div className='inline-block px-4 py-1.5 bg-blue-600/20 backdrop-blur-md rounded-full text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-6 border border-blue-500/30'>
            Advanced Studies & Publications
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-8 leading-tight'>
            Research & <span className='text-blue-500'>Innovation</span>
          </h1>
          <p className='text-slate-400 text-xl max-w-3xl mx-auto font-medium leading-relaxed'>
            Leading high-impact academic and industrial research across global
            frontiers.
          </p>
        </div>
      </section>

      <section className='py-24 bg-white relative -mt-12 rounded-t-[3rem] z-20 shadow-2xl'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center mb-20'>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 mb-6'>
              Expert Writing & Publication Support
            </h2>
            <p className='text-slate-500 text-lg font-medium leading-relaxed'>
              We specialize in academic and industrial writing services. Our
              team provides end-to-end support for
              <span className='text-blue-600 font-bold'>
                Journal papers (Q1, Q2, Q3, Q4)
              </span>
              ,<span className='text-slate-900 font-bold'> Thesis papers</span>,
              and
              <span className='text-slate-900 font-bold'>
                Conference papers
              </span>
              . Our suite of services includes professional proofreading,
              editing, and comprehensive publication help.
            </p>
          </div>

          <div className='text-center mb-16'>
            <h2 className='text-4xl font-black text-slate-900 mb-4'>
              Featured Research Projects
            </h2>
            <div className='h-1.5 w-24 bg-blue-600 mx-auto rounded-full'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {!isLoading
              ? data?.research.map((project) => (
                  <ResearchCard data={project} key={project._id} />
                ))
              : Array.from({ length: 6 }).map((_, index) => (
                  <ResearchCardSkeleton key={index} />
                ))}
          </div>

          {(data?.totalPages || 0) > 1 && (
            <div className='flex justify-center gap-5 mt-10 md:mt-14'>
              <button
                disabled={data?.page === 1}
                onClick={() =>
                  setParams((prev) => ({
                    ...prev,
                    page: String(Number(prev.page) - 1),
                  }))
                }
                className='cursor-pointer bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all'
              >
                Previous
              </button>
              <button
                disabled={data?.page === data?.totalPages}
                onClick={() =>
                  setParams((prev) => ({
                    ...prev,
                    page: String(Number(prev.page) + 1),
                  }))
                }
                className='cursor-pointer bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all'
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <AuthorshipPosition />
    </div>
  );
}
