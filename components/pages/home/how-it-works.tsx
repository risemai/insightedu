import Link from 'next/link';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description:
        'Tell us about your project, deadlines, and specific needs through our simple form or chat.',
      icon: (
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
            d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
          />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Expert Assignment',
      description:
        'We match you with a subject expert who understands your field and requirements.',
      icon: (
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
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Review & Revise',
      description:
        'Receive your work for review. We offer unlimited revisions until you are satisfied.',
      icon: (
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
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Final Delivery',
      description:
        'Get your polished, publication-ready work delivered on time with all documentation.',
      icon: (
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
            d='M5 13l4 4L19 7'
          />
        </svg>
      ),
    },
  ];

  return (
    <section className='py-24 bg-gray-50 overflow-hidden'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-4'>
            How It Works
          </div>
          <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-6'>
            Simple Process, <span className='text-blue-600'>Outstanding</span>{' '}
            Results
          </h2>
          <p className='text-slate-500 max-w-2xl mx-auto font-medium text-lg'>
            Our streamlined workflow ensures quality, transparency, and timely
            delivery at every step.
          </p>
        </div>

        {/* Steps Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative'>
          {/* Connecting Line (Desktop) */}
          <div className='hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 z-0 -translate-y-16'></div>

          {steps.map((step, idx) => (
            <div key={idx} className='relative z-10 group'>
              <div className='bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-blue-500 transition-all duration-300 h-full flex flex-col'>
                <div className='flex items-center justify-between mb-8'>
                  <div className='w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform'>
                    {step.icon}
                  </div>
                  <span className='text-4xl font-black text-blue-50 opacity-0 group-hover:opacity-100 transition-opacity'>
                    {step.number}
                  </span>
                </div>
                <h3 className='text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors'>
                  {step.title}
                </h3>
                <p className='text-slate-500 font-medium leading-relaxed'>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Turnaround Info Card */}
        <div className='max-w-3xl mx-auto'>
          <div className='bg-slate-900 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-2xl relative overflow-hidden group'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-150 duration-700'></div>

            <div className='flex items-center gap-6 relative z-10'>
              <div className='w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center shrink-0'>
                <svg
                  className='w-8 h-8 text-blue-500'
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
              </div>
              <div>
                <h4 className='text-white font-black text-xl mb-1'>
                  Average turnaround time: 7-14 days
                </h4>
                <p className='text-slate-400 font-medium'>
                  Express delivery available for urgent projects
                </p>
              </div>
            </div>

            <Link
              href='/contact'
              className='bg-blue-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 whitespace-nowrap relative z-10'
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
