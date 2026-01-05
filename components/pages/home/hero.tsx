export function HeroContent() {
  return (
    <section className='pt-12 lg:pt-24 pb-6 lg:pb-10 px-4 bg-gray-50'>
      <div className='container mx-auto'>
        <div className='relative rounded-[2.5rem] overflow-hidden bg-slate-900 min-h-125 flex items-center justify-center p-8 md:p-16'>
          <div
            className='absolute inset-0 z-0 opacity-50 mix-blend-overlay'
            style={{
              backgroundImage: `url('/assets/img/insight-edu-img-01.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          <div className='relative z-10 text-center max-w-4xl mx-auto'>
            <div className='inline-block px-4 py-1.5 bg-blue-500/20 backdrop-blur-md rounded-full text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-500/30'>
              Bangladesh&apos;s Largest Research Hub
            </div>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8'>
              Discover, Create, Share Your Academic{' '}
              <span className='text-blue-500'>Home</span> At INSIGHTEDU
            </h1>
            <p className='text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium'>
              Empowering the next generation of researchers with world-class
              mentorship, professional tools, and a global academic community.
            </p>
            <button className='bg-blue-500 text-white px-10 py-5 rounded-full font-extrabold text-lg hover:bg-blue-500 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/30'>
              Explore More
            </button>
          </div>

          {/* Abstract Shapes */}
          <div className='absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl'></div>
          <div className='absolute -top-16 -right-16 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl'></div>
        </div>
      </div>
    </section>
  );
}
