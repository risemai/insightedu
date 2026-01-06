'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { authorShipRequest } from '@/server/authorship-request';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters.',
  }),
  email: z.email({
    message: 'Please enter a valid email address.',
  }),
  phone: z
    .string()
    .refine((val) => val?.trim() !== '', {
      message: 'Phone number is required',
    })
    .regex(/^((\+8801\d{9})|(01\d{9}))$/, {
      message: 'Phone number must be in +8801XXXXXXXXX or 01XXXXXXXXX format.',
    }),
});

export function AuthorshipPosition() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const response = authorShipRequest(values);
    startTransition(() => {
      toast.promise(response, {
        loading: 'Sending your message...',
        success: () => {
          form.reset();
          return 'Message sent successfully!';
        },
        error: 'Failed to send message. Please try again later.',
      });
    });
  }

  return (
    <section className='py-24 bg-blue-50 overflow-hidden relative'>
      <div className='container mx-auto px-4'>
        <div className='bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-blue-100 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2'></div>

          <div className='lg:w-1/2 relative z-10'>
            <div className='inline-block px-4 py-1.5 bg-green-100 rounded-full text-green-700 font-black text-[10px] uppercase tracking-widest mb-6'>
              Now Open
            </div>
            <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight'>
              Authorship Positions Available
            </h2>
            <p className='text-slate-500 text-lg font-medium leading-relaxed mb-10'>
              Join our elite circle of contributing authors. We offer unique
              opportunities for researchers to gain authorship positions on
              high-impact collaborative projects currently in development.
            </p>
            <div className='flex flex-wrap gap-4'>
              <div className='bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 text-slate-800 font-bold flex items-center gap-3'>
                <span className='w-2 h-2 bg-blue-600 rounded-full animate-pulse'></span>
                Q1 Tier Projects
              </div>
              <div className='bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 text-slate-800 font-bold flex items-center gap-3'>
                <span className='w-2 h-2 bg-blue-600 rounded-full animate-pulse'></span>
                Collaborative Impact
              </div>
            </div>
          </div>

          <div className='lg:w-1/2 w-full relative z-10'>
            <div className='bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl shadow-blue-900/20'>
              <h3 className='text-2xl font-black mb-6'>
                Register Your Interest
              </h3>
              <p className='text-slate-400 mb-8 font-medium'>
                Be the first to know about new authorship openings in your
                domain.
              </p>
              <Form {...form}>
                <form
                  className='space-y-4'
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  {' '}
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            type='text'
                            placeholder='Full Name'
                            className='w-full bg-slate-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none'
                            {...field}
                          />
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
                        <FormControl>
                          <input
                            type='email'
                            placeholder='Email Address'
                            className='w-full bg-slate-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none'
                            {...field}
                          />
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
                        <FormControl>
                          <input
                            type='tel'
                            placeholder='Phone Number'
                            className='w-full bg-slate-800 border-none rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-blue-600 outline-none'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    type='submit'
                    disabled={isPending}
                    className='cursor-pointer w-full bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-black py-5 rounded-2xl hover:bg-blue-500 transition-all'
                  >
                    Apply for Authorship
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
