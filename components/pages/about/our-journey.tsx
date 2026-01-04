export function OurJourney() {
  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <div className='lg:w-1/2'>
            <div className='relative rounded-[3rem] overflow-hidden shadow-2xl'>
              <img
                src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                alt='Our Story'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-blue-500/10'></div>
            </div>
          </div>
          <div className='lg:w-1/2'>
            <div
              className='inline-block px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 font-bold text-xs 
              uppercase tracking-widest mb-6'
            >
              Our Journey
            </div>
            <h2 className='text-4xl font-black text-slate-900 mb-8'>
              How Risemai Started
            </h2>
            <p className='text-slate-500 text-lg leading-relaxed mb-6 font-medium'>
              Founded by a group of passionate researchers and academic editors,
              Risemai was born from a simple observation: there was a
              significant gap between graduation and the skills required for
              high-impact international publication.
            </p>
            <p className='text-slate-500 text-lg leading-relaxed mb-10 font-medium'>
              We started as a small consultancy group helping post-graduate
              students with their data analysis. Today, we have evolved into
              Bangladesh&apos;s largest online research skill development
              platform, having served over 50,000 students and professionals.
            </p>
            <div className='grid grid-cols-2 gap-8'>
              <div>
                <h4 className='text-4xl font-black text-blue-600 mb-2'>2024</h4>
                <p className='text-slate-400 font-bold uppercase text-xs tracking-widest'>
                  Year Established
                </p>
              </div>
              <div>
                <h4 className='text-4xl font-black text-blue-600 mb-2'>50K+</h4>
                <p className='text-slate-400 font-bold uppercase text-xs tracking-widest'>
                  Global Students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
