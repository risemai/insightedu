'use client';

import { useState, useTransition } from 'react';

import { Course } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

import { Button } from '../ui/button';
import { enrollCourse } from '@/server/entroll';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.email({ message: 'Please enter a valid email address.' }),
  phone: z.string().regex(/^((\+8801\d{9})|(01\d{9}))$/, {
    message: 'Phone number must be in +8801XXXXXXXXX or 01XXXXXXXXX format.',
  }),
});

export function CourseEnrollForm({
  setIsOpen,
  course,
}: {
  setIsOpen: (open: boolean) => void;
  course: Course | null;
}) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      ...values,
      courseTitle: course?.title || '',
      coursePrice: course?.currentPrice || 0,
    };

    setSubmitMessage(null);
    const response = enrollCourse(payload);

    startTransition(() => {
      toast.promise(response, {
        loading: 'Submitting your enrollment request...',
        success: () => {
          setIsOpen(false);
          return 'Enrollment request submitted successfully! Our team will contact you soon.';
        },
        error:
          'There was an error submitting your enrollment request. Please try again later.',
      });
    });
  }

  const savePercentage = course
    ? Math.round(
        ((course.originalPrice - course.currentPrice) / course.originalPrice) *
          100
      )
    : 0;

  return (
    <div className='space-y-6 pb-2'>
      {/* Course Details Card */}
      <div className='bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100'>
        <h3 className='text-lg font-bold text-slate-900 mb-4'>
          Course Details
        </h3>
        <div className='space-y-3'>
          <div className='flex justify-between items-start'>
            <span className='text-slate-600'>Course Name:</span>
            <span className='font-semibold text-slate-900 text-right max-w-[60%]'>
              {course?.title}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-slate-600'>Original Price:</span>
            <span className='text-slate-400 line-through'>
              ৳{course?.originalPrice.toLocaleString()}
            </span>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-slate-600'>Discounted Price:</span>
            <span className='text-2xl font-black text-blue-600'>
              ৳{course?.currentPrice.toLocaleString()}
            </span>
          </div>
          {savePercentage > 0 && (
            <div className='flex justify-between items-center pt-2 border-t border-blue-200'>
              <span className='text-slate-600'>You Save:</span>
              <span className='text-green-600 font-bold'>
                {savePercentage}% OFF (৳
                {(
                  (course?.originalPrice || 0) - (course?.currentPrice || 0)
                ).toLocaleString()}
                )
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Info Message */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3'>
        <svg
          className='w-5 h-5 text-blue-600 shrink-0 mt-0.5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <div>
          <p className='text-sm font-semibold text-blue-900 mb-1'>
            Quick Response Guaranteed
          </p>
          <p className='text-sm text-blue-700'>
            Once you submit this form, our admin team will contact you within 24
            hours to complete your enrollment and provide payment instructions.
          </p>
        </div>
      </div>

      <div>
        <h2 className='text-2xl font-bold mb-2'>Your Information</h2>
        <p className='text-sm text-slate-500 mb-6'>
          Please fill out the form below to get started with your enrollment.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your name' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your email' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type='tel'
                    placeholder='Enter your phone number'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {submitMessage && (
            <div
              className={`p-4 rounded-lg ${
                submitMessage.includes('successfully')
                  ? 'bg-green-50 border border-green-200 text-green-800'
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}
            >
              {submitMessage}
            </div>
          )}

          <Button
            type='submit'
            className='w-full bg-blue-600 text-white px-8 py-6 rounded-lg font-bold hover:bg-blue-500 transition-all'
            disabled={isPending}
          >
            {isPending ? 'Submitting...' : 'Submit Enrollment Request'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
