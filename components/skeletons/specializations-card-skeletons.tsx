import React from 'react';
import { Skeleton } from '../ui/skeleton';

export function SpecializationsCardSkeleton() {
  return (
    <section className='py-24 bg-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <Skeleton className='inline-block h-7 w-40 rounded-full mb-4' />
          <Skeleton className='h-12 w-96 mx-auto mb-6' />
          <Skeleton className='h-6 w-150 max-w-2xl mx-auto' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className='relative bg-gray-50 p-10 rounded-[2.5rem] border border-transparent'
            >
              <div className='absolute top-0 right-0 w-24 h-24 bg-gray-100 rounded-bl-[100%] rounded-tr-[2.5rem] z-0'></div>

              <div className='relative z-10'>
                <Skeleton className='h-10 w-10 mb-8 rounded-lg' />

                <Skeleton className='h-8 w-3/4 mb-4' />

                <div className='space-y-2 mb-8'>
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-2/3' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
