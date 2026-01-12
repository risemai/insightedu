'use client';

import { Loading } from '@/components/shared';
import { useServices } from '@/hooks/services';
import Link from 'next/link';

export function ServicePageContent() {
  const { data, isLoading } = useServices();

  return (
    <div>
      <section className='bg-slate-900 py-24 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] -translate-y-20 translate-x-20'></div>
          <div className='absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] translate-y-20 -translate-x-20'></div>
        </div>
        <div className='container mx-auto px-4 relative z-10 text-center'>
          <div className='inline-block px-4 py-1.5 bg-blue-600/20 backdrop-blur-md rounded-full text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-500/30'>
            Professional Solutions
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-8 leading-tight'>
            Our Research <span className='text-blue-500'>Services</span>
          </h1>
          <p className='text-slate-400 text-xl max-w-3xl mx-auto font-medium leading-relaxed'>
            From first draft to final publication, we provide the expert support
            needed to excel in high-impact international journals and academic
            environments.
          </p>
        </div>
      </section>

      <section className='py-24 bg-white relative -mt-12 rounded-t-[3rem] z-20 shadow-2xl'>
        {isLoading ? (
          <Loading />
        ) : (
          <div className='container mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {data?.map((service) => (
                <div
                  key={service._id}
                  className='group bg-gray-50 p-10 rounded-[2.5rem] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col h-full'
                >
                  <div className='text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300'>
                    {service.icon}
                  </div>
                  <h3 className='text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-slate-500 font-medium leading-relaxed mb-8 grow'>
                    {service.description}
                  </p>
                  <ul className='space-y-3 mb-10'>
                    {service?.features &&
                      service?.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className='flex items-center text-sm font-bold text-slate-700'
                        >
                          <svg
                            className='w-4 h-4 text-blue-500 mr-2'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='3'
                              d='M5 13l4 4L19 7'
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                  </ul>
                  <Link
                    href='/contact'
                    className='w-full text-center py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all'
                  >
                    Request Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className='py-24 bg-slate-50'>
        <div className='container mx-auto px-4'>
          <div className='bg-white rounded-[3rem] p-6 md:p-16 shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center gap-16'>
            <div className='lg:w-1/2'>
              <div className='grid grid-cols-2 gap-4'>
                {['Q1', 'Q2', 'Q3', 'Q4'].map((tier) => (
                  <div
                    key={tier}
                    className='bg-slate-900 aspect-square rounded-[2rem] flex flex-col items-center justify-center group hover:bg-blue-600 transition-colors cursor-default'
                  >
                    <span className='text-xl md:text-4xl font-black text-white mb-2'>
                      {tier}
                    </span>
                    <span className='text-[10px] font-black text-blue-400 group-hover:text-white uppercase tracking-widest'>
                      Journal Tier
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className='lg:w-1/2'>
              <h2 className='text-4xl font-black text-slate-900 mb-6 leading-tight'>
                Expert Targeting for High Impact Journals
              </h2>
              <p className='text-slate-500 text-lg font-medium mb-8 leading-relaxed'>
                Whether you&apos;re aiming for Q1 top-tier publications or
                looking for specialized niche journals, our editors have the
                domain expertise to refine your work for success. We ensure your
                methodology is robust and your narrative is compelling.
              </p>
              <div className='flex flex-wrap gap-4'>
                <div className='flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm'>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                  98% Acceptance Rate
                </div>
                <div className='flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl font-bold text-sm'>
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  Fast Response
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-blue-600 relative overflow-hidden'>
        <div className='container mx-auto px-4 text-center relative z-10'>
          <h2 className='text-4xl md:text-5xl font-black text-white mb-8'>
            Ready to Elevate Your Publication Game?
          </h2>
          <p className='text-blue-100 text-xl font-medium mb-12 max-w-2xl mx-auto'>
            Get started with our premium academic writing and consultancy
            services. Professional support is just a message away.
          </p>
          <Link
            href='/contact'
            className='bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all'
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
