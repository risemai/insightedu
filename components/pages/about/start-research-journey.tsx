import Link from 'next/link';

export function StartResearchJourney() {
  return (
    <section className='py-24 bg-blue-600 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
        <svg
          className='w-full h-full'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
        >
          <path d='M0 100 C 20 0 50 0 100 100' fill='white' />
        </svg>
      </div>
      <div className='container mx-auto px-4 text-center relative z-10'>
        <h2 className='text-4xl md:text-5xl font-black text-white mb-8'>
          Ready to Start Your Research Journey?
        </h2>
        <p className='text-blue-100 text-xl font-medium mb-12 max-w-2xl mx-auto'>
          Join thousands of researchers and students today. Get access to
          premium courses and expert consultancy.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Link
            href='/contact'
            className='bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all'
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
