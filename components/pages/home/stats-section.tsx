import Link from 'next/link';

export function StatsSection() {
  return (
    <section className='py-24 bg-slate-950 relative overflow-hidden'>
      {/* Background patterns */}
      <div className='absolute inset-0 opacity-10 pointer-events-none'>
        <div
          className='absolute top-0 left-0 w-full h-full'
          style={{
            backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <div className='lg:w-1/2'>
            <h2 className='text-3xl md:text-5xl font-black text-white leading-tight mb-8'>
              Best Choice For{' '}
              <span className='text-blue-500'>Online Course</span> & Research
              Excellence
            </h2>
            <p className='text-slate-400 text-lg md:text-xl leading-relaxed font-medium mb-10'>
              Welcome To Risemai, Bangladesh’s Largest Online Learning And
              Research Skill Development Platform. We bridge the gap between
              academic theory and practical publication excellence.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Link
                href='/about'
                className='bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 transition-all'
              >
                Learn Our History
              </Link>
            </div>
          </div>

          <div className='lg:w-1/2 w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {[
                { label: 'Active student', value: '50K+', icon: '👨‍🎓' },
                { label: 'Total Course', value: '120+', icon: '📚' },
                { label: 'User Rating', value: '9.5/10', icon: '⭐' },
                { label: 'Expert Mentors', value: '45+', icon: '👨‍🏫' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className='bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-blue-500 transition-colors group'
                >
                  <div className='text-4xl mb-4'>{stat.icon}</div>
                  <div className='text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors'>
                    {stat.value}
                  </div>
                  <div className='text-slate-400 font-bold uppercase tracking-widest text-xs'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
