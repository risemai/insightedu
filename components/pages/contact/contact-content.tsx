'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactEmail } from '@/server/contact';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.email({
    message: 'Please enter a valid email address.',
  }),
  subject: z.string().min(5, {
    message: 'Subject must be at least 5 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export function ContactContent() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const response = contactEmail(values);

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
    <div>
      {/* Header */}
      <section className='bg-slate-900 py-24 relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>
        <div className='container mx-auto px-4 relative z-10 text-center'>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-6'>
            Contact <span className='text-blue-500'>Us</span>
          </h1>
          <p className='text-slate-400 text-xl max-w-2xl mx-auto font-medium'>
            Have questions about our courses or research services? We&apos;re
            here to help you navigate your academic path.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className='py-14 md:py-24 bg-white relative -mt-12 rounded-t-2xl md:rounded-t-[3rem] z-20 shadow-2xl'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-16'>
            {/* Info Panel */}
            <div className='lg:col-span-5 space-y-12'>
              <div>
                <h2 className='text-3xl font-black text-slate-900 mb-6'>
                  Get in Touch
                </h2>
                <p className='text-slate-500 font-medium text-lg leading-relaxed'>
                  Our dedicated support team is available to assist you with any
                  inquiries regarding our programs, publication support, or data
                  analysis services.
                </p>
              </div>

              <div className='space-y-8'>
                {/* Email */}
                <div className='flex items-start gap-6 group'>
                  <div
                    className='w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 
                  group-hover:bg-blue-600 group-hover:text-white transition-colors'
                  >
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-slate-900 font-black text-lg'>
                      Email Address
                    </h4>
                    <p className='text-slate-500 font-medium mb-1'>
                      Send us a message anytime.
                    </p>
                    <Link
                      href='mailto:info.insightedu.bd@gmail.com'
                      className='text-blue-600 font-bold hover:underline'
                    >
                      info.insightedu.bd@gmail.com
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className='flex items-start gap-6 group'>
                  <div
                    className='w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 
                  group-hover:bg-emerald-600 group-hover:text-white transition-colors'
                  >
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-slate-900 font-black text-lg'>
                      Phone Number
                    </h4>
                    <p className='text-slate-500 font-medium mb-1'>
                      Call us Mon-Fri (9am - 6pm).
                    </p>
                    <Link
                      href='tel:+880123456789'
                      className='text-blue-600 font-bold hover:underline'
                    >
                      +8801635282882
                    </Link>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className='flex items-start gap-6 group'>
                  <div
                    className='w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shrink-0 
                  group-hover:bg-green-600 group-hover:text-white transition-colors'
                  >
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-slate-900 font-black text-lg'>
                      WhatsApp
                    </h4>
                    <p className='text-slate-500 font-medium mb-1'>
                      Chat directly for quick queries.
                    </p>
                    <Link
                      href='https://wa.me/+8801635282882?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 font-bold hover:underline'
                    >
                      Message us on WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className='lg:col-span-7'>
              <div className='bg-gray-50 rounded-3xl md:rounded-[3rem] p-5 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50'>
                <h3 className='text-2xl md:text-3xl font-black text-slate-900 mb-8'>
                  Send a Message
                </h3>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                  >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                      <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className='text-sm font-bold text-slate-700 uppercase tracking-widest ml-1'>
                              Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder='Mr. / Ms. / Dr.'
                                className='w-full h-12 bg-white border border-gray-200 rounded-2xl px-6 py-4 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium'
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
                            <FormLabel className='text-sm font-bold text-slate-700 uppercase tracking-widest ml-1'>
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder='your@email.com'
                                className='w-full h-12 bg-white border border-gray-200 rounded-2xl px-6 py-4 
                                focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium'
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name='subject'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-sm font-bold text-slate-700 uppercase tracking-widest ml-1'>
                            Subject
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder='What is this regarding?'
                              className='w-full h-12 bg-white border border-gray-200 rounded-2xl px-6 py-4 
                              focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium'
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='message'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className='text-sm font-bold text-slate-700 uppercase tracking-widest ml-1'>
                            Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='Tell us how we can help you...'
                              className='w-full h-40 bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2
                               focus:ring-blue-500 transition-all font-medium resize-none'
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type='submit'
                      disabled={isPending}
                      className='w-full h-14 bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 
                    transition-all shadow-xl shadow-blue-200 flex items-center justify-center group'
                    >
                      Send Message
                      <svg
                        className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='3'
                          d='M14 5l7 7m0 0l-7 7m7-7H3'
                        />
                      </svg>
                    </Button>
                  </form>
                </Form>
                {/* <form className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label className='text-sm font-bold text-slate-700 uppercase tracking-widest ml-1'>
                        Title
                      </label>
                      <input
                        type='text'
                        required
                        placeholder='Mr. / Ms. / Dr.'
                        className='w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium'
                      />
                    </div>
                    <div className='space-y-2'>
                      <label className='text-sm font-bold text-slate-700 uppercase tracking-widest ml-1'>
                        Email Address
                      </label>
                      <input
                        type='email'
                        required
                        placeholder='your@email.com'
                        className='w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium'
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <label className='text-sm font-bold text-slate-700 uppercase tracking-widest ml-1'>
                      Subject
                    </label>
                    <input
                      type='text'
                      required
                      placeholder='What is this regarding?'
                      className='w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium'
                    />
                  </div>

                  <div className='space-y-2'>
                    <label className='text-sm font-bold text-slate-700 uppercase tracking-widest ml-1'>
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      placeholder='Tell us how we can help you...'
                      className='w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium resize-none'
                    ></textarea>
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-blue-700 
                    transition-all shadow-xl shadow-blue-200 flex items-center justify-center group'
                  >
                    Send Message
                    <svg
                      className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='3'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
