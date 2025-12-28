'use client';

import { Button } from '@/components/ui/button';
import { useCoursesBySlug } from '@/hooks';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function CoursesDetailsContent() {
  const { slug } = useParams();
  const { data, isLoading, isError } = useCoursesBySlug(slug as string);

  if (isLoading) {
    return (
      <div className='min-h-screen bg-linear-to-br from-slate-50 to-blue-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-gray-600'>Loading course details...</p>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className='min-h-screen bg-linear-to-br from-slate-50 to-blue-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='text-6xl mb-4'>😔</div>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
            Course Not Found
          </h2>
          <p className='text-gray-600 mb-6'>
            The course you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link href='/courses'>
            <Button>Browse All Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const savePercentage =
    data.originalPrice > 0
      ? Math.round(
          ((data.originalPrice - data.currentPrice) / data.originalPrice) * 100
        )
      : 0;

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 to-blue-50'>
      {/* Hero Section */}
      <section className='relative overflow-hidden bg-linear-to-r from-blue-600 via-purple-600 to-indigo-700 text-white'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='relative container mx-auto px-4 py-16 lg:py-24'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
              <div className='inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium'>
                Featured Course
              </div>
              <h1 className='text-4xl lg:text-6xl font-bold leading-tight'>
                {data.title}
              </h1>
              <p className='text-xl text-blue-100 max-w-lg'>
                {data.description}
              </p>
              <div className='flex items-center gap-4'>
                <div className='text-3xl font-bold'>
                  ৳{data.currentPrice.toLocaleString()}
                </div>
                <div className='text-lg line-through text-blue-200'>
                  ৳{data.originalPrice.toLocaleString()}
                </div>
                <div className='px-2 py-1 bg-green-500 rounded text-sm font-medium'>
                  Save {savePercentage}%
                </div>
              </div>
              <div className='flex items-center gap-2 text-blue-100'>
                <span>By {data.instructor}</span>
              </div>
              <div className='flex gap-4'>
                <Button
                  variant='secondary'
                  size='lg'
                  //   href={`/enroll/${data.slug}`}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute -inset-4 bg-white/10 rounded-2xl blur-xl'></div>
              <img
                src={data.image}
                alt={data.title}
                width={600}
                height={400}
                className='relative rounded-2xl shadow-2xl object-cover w-full h-auto'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
            <div className='text-center p-6 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow'>
              <div className='text-3xl font-bold text-blue-600 mb-2'>
                {data.modules}
              </div>
              <div className='text-sm text-gray-600'>Modules</div>
            </div>
            <div className='text-center p-6 rounded-xl bg-linear-to-br from-rose-50 to-rose-100 hover:shadow-lg transition-shadow'>
              <div className='text-3xl font-bold text-rose-600 mb-2'>
                {data.hours}h
              </div>
              <div className='text-sm text-gray-600'>Total Hours</div>
            </div>
            <div className='text-center p-6 rounded-xl bg-linear-to-br from-lime-50 to-lime-100 hover:shadow-lg transition-shadow'>
              <div className='text-3xl font-bold text-lime-600 mb-2'>
                {data.quizzes}
              </div>
              <div className='text-sm text-gray-600'>Quizzes</div>
            </div>
            <div className='text-center p-6 rounded-xl bg-linear-to-br from-indigo-50 to-indigo-100 hover:shadow-lg transition-shadow'>
              <div className='text-3xl font-bold text-indigo-600 mb-2'>
                {data.assignments}
              </div>
              <div className='text-sm text-gray-600'>Assignments</div>
            </div>
            <div className='text-center p-6 rounded-xl bg-linear-to-br from-yellow-50 to-yellow-100 hover:shadow-lg transition-shadow'>
              <div className='text-3xl font-bold text-yellow-600 mb-2'>
                {data.sessions}
              </div>
              <div className='text-sm text-gray-600'>Sessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Placeholder */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-8'>What You&apos;ll Learn</h2>
          <div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
            <div className='p-6 bg-white rounded-xl shadow-sm'>
              <h3 className='font-semibold mb-2'>Academic Writing</h3>
              <p className='text-gray-600'>
                Master the fundamentals of research paper writing and
                publication.
              </p>
            </div>
            <div className='p-6 bg-white rounded-xl shadow-sm'>
              <h3 className='font-semibold mb-2'>Methodology Design</h3>
              <p className='text-gray-600'>
                Learn to design robust research methodologies for various
                fields.
              </p>
            </div>
            <div className='p-6 bg-white rounded-xl shadow-sm'>
              <h3 className='font-semibold mb-2'>Publication Strategies</h3>
              <p className='text-gray-600'>
                Strategies to get your research published in top journals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
