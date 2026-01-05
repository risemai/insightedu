import Link from 'next/link';

export function AboutUsHero() {
  return (
    <section className='bg-gray-50 py-24 relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 -skew-x-12 transform translate-x-20'></div>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-3xl'>
          <nav className='flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-blue-600 mb-8'>
            <Link href='/'>
              <button className='hover:underline cursor-pointer'>Home</button>
            </Link>
            <span>/</span>
            <span className='text-slate-400'>About Us</span>
          </nav>
          <h1 className='text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight'>
            Pioneering the Future of{' '}
            <span className='text-blue-600'>Research</span> in Bangladesh.
          </h1>
          <p className='text-slate-500 text-xl md:text-2xl leading-relaxed font-medium'>
            InsightEdu Research and Consultancy Center is more than an
            educational platform. We are a catalyst for academic excellence and
            evidence-based innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
