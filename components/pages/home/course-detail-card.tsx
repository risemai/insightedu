'use client';

import { useFeaturedCourse } from '@/hooks';
import Link from 'next/link';

export function CourseDetailCard() {
  const { data, isLoading, isError } = useFeaturedCourse();

  return (
    <section id='featured-course' className='py-20 container mx-auto px-4'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl md:text-4xl font-semibold text-slate-900 mb-4'>
          Our Primary Program
        </h2>
        <div className='h-1.5 w-24 bg-blue-600 mx-auto rounded-full'></div>
      </div>
      <div
        className={`bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/5 border border-gray-100 flex flex-col lg:flex-row
          `}
      >
        {/* Title Bar (requested layout) */}

        <div className='flex flex-col lg:flex-row w-full'>
          {/* Left Side: Image */}
          <div className={`lg:w-1/2 relative h-75 lg:h-auto`}>
            <img
              src={data?.image}
              alt={data?.title}
              className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent lg:hidden'></div>
            <div className='absolute top-8 left-8 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold'>
              Featured
            </div>
          </div>

          {/* Right Side: Modules & Info */}
          <div className='lg:w-1/2 p-10 lg:p-14'>
            <h1 className='text-4xl font-semibold text-slate-900 mb-6'>
              {data?.title}
            </h1>
            <p className='text-blue-600 font-semibold mb-8 uppercase tracking-widest text-sm flex items-center'>
              <span className='w-8 h-0.5 bg-blue-600 mr-3'></span>
              Instructor: {data?.instructor}
            </p>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mb-10'>
              <div className='space-y-1'>
                <p className='text-slate-400 text-xs font-semibold uppercase tracking-wider'>
                  Modules
                </p>
                <p className='text-xl font-semibold text-slate-800'>
                  {data?.modules} Units
                </p>
              </div>
              <div className='space-y-1'>
                <p className='text-slate-400 text-xs font-semibold uppercase tracking-wider'>
                  Duration
                </p>
                <p className='text-xl font-semibold text-slate-800'>
                  {data?.hours} Hours
                </p>
              </div>
              <div className='space-y-1'>
                <p className='text-slate-400 text-xs font-semibold uppercase tracking-wider'>
                  Quizzes
                </p>
                <p className='text-xl font-semibold text-slate-800'>
                  {data?.quizzes} Sets
                </p>
              </div>
              <div className='space-y-1'>
                <p className='text-slate-400 text-xs font-semibold uppercase tracking-wider'>
                  Assignments
                </p>
                <p className='text-xl font-semibold text-slate-800'>
                  {data?.assignments} Tasks
                </p>
              </div>
              <div className='space-y-1'>
                <p className='text-slate-400 text-xs font-semibold uppercase tracking-wider'>
                  Sessions
                </p>
                <p className='text-xl font-semibold text-slate-800'>
                  {data?.sessions} Live
                </p>
              </div>
              <div className='space-y-1'>
                <p className='text-slate-400 text-xs font-semibold uppercase tracking-wider'>
                  Access
                </p>
                <p className='text-xl font-semibold text-slate-800'>Lifetime</p>
              </div>
            </div>

            <div className='border-t border-gray-100 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6'>
              <div>
                <p className='text-slate-400 text-sm line-through'>
                  ৳ {data?.originalPrice.toLocaleString()}
                </p>
                <p className='text-4xl font-black text-blue-600'>
                  ৳ {data?.currentPrice.toLocaleString()}
                </p>
              </div>
              <Link href={`/courses/${data?.slug}`}>
                <button
                  className='cursor-pointer w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-2xl 
                font-semibold hover:bg-blue-600 transition-all flex items-center justify-center group'
                >
                  Course Details
                  <svg
                    className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
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
              <button
                className='cursor-pointer w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-2xl font-black 
              text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200'
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
