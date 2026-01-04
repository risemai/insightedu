'use client';

import Link from 'next/link';
import { FeaturedCourseCardSkeleton } from '@/components/skeletons/featured-course-card-skeleton';
import Image from 'next/image';
import { useCoursesPaginated } from '@/hooks/courses';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { debounce, generateQueryString } from '@/lib/utils';

export function CoursesCards() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [params, setParams] = useState({
    search: searchParams.get('search') || '',
    page: searchParams.get('page') || '1',
  });

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || ''
  );

  const queryString = generateQueryString(params);

  const { data, isLoading } = useCoursesPaginated(queryString);

  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        setParams((prev) => ({
          ...prev,
          search: query,
          page: '1',
        }));
      }, 500),
    []
  );

  useEffect(() => {
    router.replace(queryString, { scroll: false });
  }, [queryString, router]);

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-slate-900'>
          Explore Our Featured Course
        </h2>
        <p className='text-slate-500 mt-4 max-w-2xl mx-auto'>
          Discover programs designed to transform your academic journey and
          professional research skills.
        </p>
      </div>
      <div className='max-w-2xl mx-auto mt-10 relative group md:px-0 px-2'>
        <div className='absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500'></div>
        <div className='relative my-20'>
          <div className='absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none'>
            <svg
              className='h-6 w-6 text-slate-400 group-focus-within:text-blue-600 transition-colors'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2.5'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => {
              debouncedSearch(e.target.value);
              setSearchQuery(e.target.value);
            }}
            placeholder='Search courses, research topics, or instructors...'
            className='block w-full pl-14 pr-6 py-5 bg-white border border-gray-100 rounded-2xl shadow-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-semibold text-slate-900 placeholder-slate-400 text-lg'
          />
          {/* <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
            <button className='bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200'>
              Search
            </button>
          </div> */}
        </div>
      </div>
      {isLoading ? (
        <div className='container mx-auto px-4 flex md:flex-row flex-col gap-6 justify-center'>
          <FeaturedCourseCardSkeleton />
          <FeaturedCourseCardSkeleton />
          <FeaturedCourseCardSkeleton />
        </div>
      ) : (
        <div className='container mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
          {data?.courses.map((course) => (
            <div
              key={course.slug}
              className='max-w-md w-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group'
            >
              <div className='relative h-64 overflow-hidden'>
                <Image
                  width={500}
                  height={600}
                  src={course.image}
                  alt={course.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                />
                {(course.totalReviews || 0) > 200 && (
                  <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-blue-600 text-xs font-black uppercase shadow-sm'>
                    Best Seller
                  </div>
                )}
              </div>

              <div className='p-8'>
                <div className='flex items-center space-x-2 mb-4'>
                  <span className='w-6 h-0.5 bg-blue-500'></span>
                  <span className='text-slate-400 text-xs font-bold uppercase tracking-widest'>
                    By {course.instructors.join(', ')}
                  </span>
                </div>

                <h3 className='text-2xl font-black text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors'>
                  {course.title}
                </h3>

                <p className='text-slate-500 font-medium text-sm mb-8 line-clamp-2'>
                  {course.description}
                </p>

                <div className='mb-8 p-4 bg-blue-50 rounded-2xl flex items-center justify-between'>
                  <div>
                    <span className='block text-slate-400 text-[10px] font-bold uppercase line-through leading-none mb-1'>
                      ৳ {course.originalPrice.toLocaleString()}
                    </span>
                    <span className='block text-2xl font-black text-blue-600 leading-none'>
                      ৳ {course.currentPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className='bg-blue-600 text-white text-[10px] px-2 py-1 rounded font-black'>
                    {Math.round(
                      (((course.originalPrice || 0) -
                        (course.currentPrice || 0)) /
                        (course.originalPrice || 0)) *
                        100
                    )}
                    % OFF
                  </div>
                </div>

                <Link href={`/courses/${course.slug}`} scroll>
                  <button className='cursor-pointer w-full bg-slate-900 text-white py-4 rounded-2xl font-bold group-hover:bg-blue-600 transition-all flex items-center justify-center'>
                    View Details
                    <svg
                      className='w-5 h-5 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

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
    </section>
  );
}
