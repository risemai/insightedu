'use client';

import { useFeaturedCourse } from '@/hooks';
import Link from 'next/link';
import { CourseDetailCardSkeleton } from '@/components/skeletons/course-detail-card-skeleton';
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckSquare,
  ChevronRight,
  Clock,
  FileText,
  Infinity,
  ShieldCheck,
  Smartphone,
  Star,
  Users,
  Video,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Course } from '@/types';
import { AlertModal } from '@/components/shared';
import { CourseEnrollForm } from '@/components/forms';

export function CourseDetailCard() {
  const { data, isLoading, isError } = useFeaturedCourse();
  const [courseValue, setCourseValue] = useState<Course | null>(null);
  const [courseEnrollFormOpen, setCourseEnrollFormOpen] = useState(false);

  if (isLoading) {
    return <CourseDetailCardSkeleton />;
  }

  if (isError) {
    return (
      <section id='featured-course' className='py-20 container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-semibold text-slate-900 mb-4'>
            Our Primary Program
          </h2>
          <div className='h-1.5 w-24 bg-blue-600 mx-auto rounded-full'></div>
        </div>
        <div className='bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/5 border border-gray-100 p-10 text-center'>
          <p className='text-slate-500'>
            No featured course available at the moment.
          </p>
        </div>
      </section>
    );
  }

  return (
    data && (
      <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12'>
            <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4'>
              <span className='w-2 h-2 bg-blue-600 rounded-full animate-pulse'></span>
              Featured Program
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-3'>
              Our Primary Program
            </h2>
            <p className='text-slate-600 max-w-2xl mx-auto'>
              Transform your career with our most comprehensive learning
              experience
            </p>
          </div>

          {/* Main Card */}
          <div className='relative group'>
            {/* Gradient background blur effect */}
            <div className='absolute -inset-1 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500'></div>

            <div className='relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20'>
              <div className='flex flex-col lg:flex-row'>
                {/* Left Side: Image with overlay */}
                <div className='lg:w-1/2 relative h-80 lg:h-auto overflow-hidden'>
                  <Image
                    width={600}
                    height={800}
                    src={data.image}
                    alt={data.title}
                    className='absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-700'
                  />
                  {/* Gradient overlay */}
                  <div className='absolute inset-0 bg-linear-to-tr from-blue-900/90 via-blue-700/50 to-transparent'></div>

                  {/* Floating badge */}
                  <div className='absolute top-6 left-6'>
                    <div className='bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2.5 rounded-2xl font-bold text-sm shadow-lg flex items-center gap-2'>
                      <Star className='w-4 h-4 fill-yellow-400 text-yellow-400' />
                      Featured
                    </div>
                  </div>

                  {/* Bottom stats overlay */}
                  {(data.enrolled || data.rating) && (
                    <div className='absolute bottom-6 left-6 right-6'>
                      <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4'>
                        <div className='flex items-center justify-between text-white'>
                          {data.enrolled && (
                            <div className='flex items-center gap-2'>
                              <Users className='w-5 h-5' />
                              <div>
                                <p className='text-xs opacity-80'>
                                  Students Enrolled
                                </p>
                                <p className='text-2xl font-bold'>
                                  {data.enrolled || 0}+
                                </p>
                              </div>
                            </div>
                          )}
                          {data.rating && (
                            <div className='text-right flex items-center gap-2'>
                              <div>
                                <p className='text-xs opacity-80'>Rating</p>
                                <p className='text-2xl font-bold flex items-center gap-1'>
                                  {data.rating || 0}{' '}
                                  <Star className='w-5 h-5 fill-yellow-400 text-yellow-400' />
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Content */}
                <div className='lg:w-1/2 p-8 lg:p-12'>
                  {/* Title & Instructor */}
                  <div className='mb-8'>
                    <h1 className='text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight'>
                      {data.title}
                    </h1>
                    <div className='flex flex-wrap gap-3'>
                      {Array.isArray(data.instructors) &&
                        data?.instructors.map((instructor, idx) => (
                          <div
                            key={idx}
                            className='flex items-center gap-2 bg-slate-50 rounded-full px-3 py-2 border border-slate-200'
                          >
                            <div className='w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs'>
                              {instructor
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </div>
                            <p className='font-semibold text-slate-800 text-sm'>
                              {instructor}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className='grid grid-cols-3 gap-4 mb-8'>
                    <div className='bg-linear-to-br from-slate-50 to-blue-50 rounded-2xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300'>
                      <BookOpen className='w-6 h-6 text-blue-600 mb-2' />
                      <p className='text-xs text-slate-500 font-medium mb-1'>
                        Modules
                      </p>
                      <p className='text-lg font-bold text-slate-800'>
                        {data.modules.length}
                      </p>
                    </div>
                    <div className='bg-linear-to-br from-slate-50 to-blue-50 rounded-2xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300'>
                      <Clock className='w-6 h-6 text-blue-600 mb-2' />
                      <p className='text-xs text-slate-500 font-medium mb-1'>
                        Duration
                      </p>
                      <p className='text-lg font-bold text-slate-800'>
                        {data.hours}h
                      </p>
                    </div>
                    <div className='bg-linear-to-br from-slate-50 to-blue-50 rounded-2xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300'>
                      <FileText className='w-6 h-6 text-blue-600 mb-2' />
                      <p className='text-xs text-slate-500 font-medium mb-1'>
                        Quizzes
                      </p>
                      <p className='text-lg font-bold text-slate-800'>
                        {data.quizzes}
                      </p>
                    </div>
                    <div className='bg-linear-to-br from-slate-50 to-blue-50 rounded-2xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300'>
                      <CheckSquare className='w-6 h-6 text-blue-600 mb-2' />
                      <p className='text-xs text-slate-500 font-medium mb-1'>
                        Tasks
                      </p>
                      <p className='text-lg font-bold text-slate-800'>
                        {data.assignments}
                      </p>
                    </div>
                    <div className='bg-linear-to-br from-slate-50 to-blue-50 rounded-2xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300'>
                      <Video className='w-6 h-6 text-blue-600 mb-2' />
                      <p className='text-xs text-slate-500 font-medium mb-1'>
                        Live Sessions
                      </p>
                      <p className='text-lg font-bold text-slate-800'>
                        {data.sessions}
                      </p>
                    </div>
                    <div className='bg-linear-to-br from-slate-50 to-blue-50 rounded-2xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300'>
                      <Infinity className='w-6 h-6 text-blue-600 mb-2' />
                      <p className='text-xs text-slate-500 font-medium mb-1'>
                        Access
                      </p>
                      <p className='text-lg font-bold text-slate-800'>
                        Lifetime
                      </p>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className='border-t border-slate-200 pt-8'>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6'>
                      {/* Price */}
                      <div>
                        <div className='flex items-baseline gap-3 mb-2'>
                          <span className='text-4xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                            ৳{data.currentPrice.toLocaleString()}
                          </span>
                          <span className='text-lg text-slate-400 line-through'>
                            ৳{data.originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <div className='inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold'>
                          <span className='text-green-600'>💰</span>
                          Save ৳
                          {(
                            data.originalPrice - data.currentPrice
                          ).toLocaleString()}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
                        <Link href={`/courses/${data.slug}`} scroll>
                          <button className='cursor-pointer group relative px-6 py-3.5 bg-slate-900 text-white rounded-xl font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-slate-900/20'>
                            <span className='relative z-10 flex items-center justify-center gap-2'>
                              Details
                              <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                            </span>
                          </button>
                        </Link>

                        <button
                          className='cursor-pointer group relative px-8 py-3.5 bg-linear-to-r from-blue-600 
                      to-indigo-600 text-white rounded-xl font-bold overflow-hidden transition-all 
                      hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105'
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

                  {/* Bottom features */}
                  <div className='mt-6 flex flex-wrap gap-2'>
                    <div className='flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full'>
                      <Award className='w-3.5 h-3.5 text-green-600' />
                      Certificate
                    </div>
                    <div className='flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full'>
                      <Smartphone className='w-3.5 h-3.5 text-green-600' />
                      Mobile Access
                    </div>
                    <div className='flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full'>
                      <ShieldCheck className='w-3.5 h-3.5 text-green-600' />
                      Money-back Guarantee
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    )
  );
}
