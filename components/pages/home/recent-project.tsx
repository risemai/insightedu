'use client';

import { useRecentProjects } from '@/hooks/research';
import { ResearchCard } from '../research';
import { ResearchCardSkeleton } from '@/components/skeletons';
import Link from 'next/link';

export function RecentProject() {
  const { data, isLoading } = useRecentProjects();
  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-4'>
            Research Portfolio
          </div>
          <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-6'>
            Recent <span className='text-blue-600'>Research</span> Projects
          </h2>
          <p className='text-slate-500 max-w-2xl mx-auto font-medium text-lg'>
            Explore the diverse range of research topics our experts are
            currently working on.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {!isLoading
            ? data?.map((project) => (
                <ResearchCard data={project} key={project._id} />
              ))
            : Array.from({ length: 6 }).map((_, index) => (
                <ResearchCardSkeleton key={index} />
              ))}
        </div>
        <div className='mt-16 flex justify-center'>
          <Link
            href='/research'
            className='bg-blue-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 whitespace-nowrap relative z-10'
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
}
