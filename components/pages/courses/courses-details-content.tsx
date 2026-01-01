'use client';

import { useEffect, useState } from 'react';
import {
  BookOpen,
  Clock,
  FileText,
  CheckSquare,
  Video,
  Infinity,
  Users,
  Star,
  ArrowRight,
  Award,
  Play,
  Check,
  Target,
  TrendingUp,
  Gift,
  Calendar,
} from 'lucide-react';
import { useParams } from 'next/navigation';
import { useCoursesBySlug } from '@/hooks';
import { AlertModal, Loading } from '@/components/shared';
import { Course } from '@/types';

import { CourseEnrollForm } from '@/components/forms';

export function CoursesDetailsContent() {
  const { slug } = useParams();
  const [courseValue, setCourseValue] = useState<Course | null>(null);
  const [courseEnrollFormOpen, setCourseEnrollFormOpen] = useState(false);

  const { data, isLoading, isError } = useCoursesBySlug(slug as string);

  // Scroll to top immediately when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) return <Loading />;

  if (isError || !data) {
    return (
      <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center'>
        <div className='text-center'>
          <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center'>
            <svg
              className='w-8 h-8 text-red-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z'
              />
            </svg>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-2'>
            {isError ? 'Error Loading Course' : 'Course Not Found'}
          </h2>
          <p className='text-slate-600 mb-6'>
            {isError
              ? 'There was an error loading the course details. Please try again later.'
              : "The course you're looking for doesn't exist or has been removed."}
          </p>
          <button
            onClick={() => window.history.back()}
            className='px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors'
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const savePercentage = Math.round(
    (((data?.originalPrice || 0) - (data?.currentPrice || 0)) /
      (data?.originalPrice || 0)) *
      100
  );

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50'>
      {/* Hero Section with Sticky CTA */}
      <section className='relative bg-linear-to-r from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden'>
        {/* Animated background pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className='relative container mx-auto px-4 py-12 lg:py-20'>
          <div className='grid lg:grid-cols-5 gap-8 lg:gap-12'>
            {/* Left Content - 3 columns */}
            <div className='lg:col-span-3 space-y-6'>
              {/* Breadcrumb & Badge */}
              <div className='flex items-center gap-3 flex-wrap'>
                <span className='text-blue-200 text-sm'>Courses</span>
                <span className='text-blue-300'>›</span>
                <span className='text-sm'>Web Development</span>
                {data?.isFeatured && (
                  <div className='flex items-center gap-1.5 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold border border-yellow-500/30'>
                    <Star className='w-3 h-3 fill-yellow-300' />
                    Featured
                  </div>
                )}
              </div>

              {/* Title */}
              <h1 className='text-4xl lg:text-5xl font-bold leading-tight'>
                {data?.title}
              </h1>

              {/* Description */}
              <p className='text-lg text-blue-100 leading-relaxed'>
                {data?.description}
              </p>

              {/* Instructors */}
              <div>
                <p className='text-sm text-blue-200 mb-3'>Expert Instructors</p>
                <div className='flex flex-wrap gap-3'>
                  {data?.instructors.map((instructor, idx) => (
                    <div
                      key={idx}
                      className='flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'
                    >
                      <div className='w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs'>
                        {instructor
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <span className='font-medium text-sm'>{instructor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Row */}
              <div className='flex flex-wrap gap-6 pt-4'>
                <div className='flex items-center gap-2'>
                  <Star className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                  <span className='font-bold'>{data?.rating}</span>
                  {data?.totalReviews && (
                    <span className='text-blue-200 text-sm'>
                      ({data?.totalReviews} reviews)
                    </span>
                  )}
                </div>
                <div className='flex items-center gap-2'>
                  <Users className='w-5 h-5 text-blue-300' />
                  <span className='font-bold'>
                    {data?.enrolled.toLocaleString()}
                  </span>
                  <span className='text-blue-200 text-sm'>students</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Clock className='w-5 h-5 text-blue-300' />
                  <span className='font-bold'>{data?.hours}h</span>
                  <span className='text-blue-200 text-sm'>content</span>
                </div>
              </div>
            </div>

            {/* Right Card - 2 columns - Sticky on scroll */}
            <div className='lg:col-span-2'>
              <div className='bg-white rounded-2xl overflow-hidden shadow-2xl sticky top-4'>
                {/* Course Image */}
                <div className='relative h-48 overflow-hidden group'>
                  <img
                    src={data?.image}
                    alt={data?.title}
                    className='w-full h-full object-cover transform group-hover:scale-105 transition duration-700'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent'></div>
                  <button className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform'>
                      <Play className='w-7 h-7 text-blue-600 ml-1' />
                    </div>
                  </button>
                </div>

                {/* Pricing Card */}
                <div className='p-6 space-y-6'>
                  {/* Price */}
                  <div>
                    <div className='flex items-end gap-3 mb-2'>
                      <span className='text-4xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                        ৳{data?.currentPrice.toLocaleString()}
                      </span>
                      <span className='text-lg text-slate-400 line-through mb-1'>
                        ৳{data?.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className='inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-bold'>
                      <Gift className='w-4 h-4' />
                      {savePercentage}% OFF - Limited Time Offer
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className='space-y-3'>
                    <button
                      className='cursor-pointer w-full group relative px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 
                    text-white rounded-xl font-bold overflow-hidden transition-all 
                    hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02]'
                      onClick={() => {
                        setCourseEnrollFormOpen(true);
                        setCourseValue(data);
                      }}
                    >
                      <div className='absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity'></div>
                      <span className='relative z-10 flex items-center justify-center gap-2'>
                        Enroll Now
                        <ArrowRight className='w-5 h-5' />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className='pt-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold text-slate-900'>Overview</h2>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid lg:grid-cols-3 gap-12'>
            <div className='lg:col-span-2 space-y-12'>
              {data?.learningOutcomes && data.learningOutcomes.length > 0 && (
                <div className='bg-white rounded-2xl p-8 shadow-sm border border-slate-100'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center'>
                      <Target className='w-6 h-6 text-white' />
                    </div>
                    <h2 className='text-2xl font-bold text-slate-900'>
                      What You&apos;ll Learn
                    </h2>
                  </div>
                  <div className='grid md:grid-cols-2 gap-4'>
                    {data?.learningOutcomes.map((outcome, idx) => (
                      <div key={idx} className='flex items-start gap-3'>
                        <div className='w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5'>
                          <Check className='w-3 h-3 text-green-600' />
                        </div>
                        <p className='text-slate-700'>{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Course Curriculum */}
              <div className='bg-white rounded-2xl p-8 shadow-sm border border-slate-100'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-600 flex items-center justify-center'>
                    <BookOpen className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h2 className='text-2xl font-bold text-slate-900'>
                      Course Curriculum
                    </h2>
                    <p className='text-slate-600 text-sm'>
                      {data?.modules.length} modules • {data?.hours} hours total
                    </p>
                  </div>
                </div>
                <div className='space-y-3'>
                  {data?.modules.map((module, idx) => (
                    <div
                      key={idx}
                      className='flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group'
                    >
                      <div className='flex items-center gap-4'>
                        <div className='w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm'>
                          {idx + 1}
                        </div>
                        <span className='font-medium text-slate-800 group-hover:text-blue-600 transition-colors'>
                          {module}
                        </span>
                      </div>
                      {/* <ChevronDown className='w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors' /> */}
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className='bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100'>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>
                  Requirements
                </h3>
                <ul className='space-y-3'>
                  <li className='flex items-start gap-3 text-slate-700'>
                    <Check className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
                    <span>Basic computer skills and internet access</span>
                  </li>
                  <li className='flex items-start gap-3 text-slate-700'>
                    <Check className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
                    <span>No prior programming experience required</span>
                  </li>
                  <li className='flex items-start gap-3 text-slate-700'>
                    <Check className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
                    <span>Willingness to learn and practice regularly</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Sidebar - 1 column */}
            <div className='space-y-6'>
              {/* Course Includes */}
              <div className='bg-white rounded-2xl p-6 shadow-sm border border-slate-100'>
                <h3 className='text-lg font-bold text-slate-900 mb-4'>
                  This Course Includes
                </h3>
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <Video className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
                    <div>
                      <p className='font-medium text-slate-800'>
                        {data?.hours} hours video
                      </p>
                      <p className='text-sm text-slate-600'>
                        On-demand content
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <FileText className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
                    <div>
                      <p className='font-medium text-slate-800'>
                        {data?.assignments} assignments
                      </p>
                      <p className='text-sm text-slate-600'>
                        Hands-on projects
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <CheckSquare className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
                    <div>
                      <p className='font-medium text-slate-800'>
                        {data?.quizzes} quizzes
                      </p>
                      <p className='text-sm text-slate-600'>
                        Test your knowledge
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Calendar className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
                    <div>
                      <p className='font-medium text-slate-800'>
                        {data?.sessions} live sessions
                      </p>
                      <p className='text-sm text-slate-600'>
                        Interactive learning
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Award className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
                    <div>
                      <p className='font-medium text-slate-800'>Certificate</p>
                      <p className='text-sm text-slate-600'>Upon completion</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Infinity className='w-5 h-5 text-blue-600 shrink-0 mt-0.5' />
                    <div>
                      <p className='font-medium text-slate-800'>
                        Lifetime access
                      </p>
                      <p className='text-sm text-slate-600'>
                        Learn at your pace
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              {data?.courseFeatures && data.courseFeatures.length > 0 && (
                <div className='bg-white rounded-2xl p-6 shadow-sm border border-slate-100'>
                  <h3 className='text-lg font-bold text-slate-900 mb-4'>
                    Course Features
                  </h3>
                  <div className='space-y-3'>
                    {data?.courseFeatures.map((feature, idx) => (
                      <div key={idx} className='flex items-start gap-3'>
                        <div className='w-5 h-5 rounded-full bg-indigo-200 flex items-center justify-center shrink-0 mt-0.5'>
                          <Check className='w-3 h-3 text-indigo-700' />
                        </div>
                        <p className='text-slate-700 text-sm'>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trust Badges */}
              <div className='bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center'>
                <TrendingUp className='w-12 h-12 text-green-600 mx-auto mb-3' />
                <p className='font-bold text-slate-900 mb-1'>
                  Top Rated Course
                </p>
                <p className='text-sm text-slate-600'>
                  Join thousands of satisfied students
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AlertModal
        isOpen={courseEnrollFormOpen}
        setIsOpen={setCourseEnrollFormOpen}
        title='Enroll in Course'
        description=' '
      >
        <CourseEnrollForm
          setIsOpen={setCourseEnrollFormOpen}
          course={courseValue}
        />
      </AlertModal>
    </div>
  );
}
