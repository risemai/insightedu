import Link from 'next/link';

export function AboutContent() {
  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='bg-gray-50 py-24 relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 transform translate-x-20'></div>
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
              Insight Edu Research and Consultancy Center is more than an
              educational platform. We are a catalyst for academic excellence
              and evidence-based innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
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
                <div className='absolute inset-0 bg-blue-600/10'></div>
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
                How Insight Edu Started
              </h2>
              <p className='text-slate-500 text-lg leading-relaxed mb-6 font-medium'>
                Founded by a group of passionate researchers and academic
                editors, Insight Edu was born from a simple observation: there
                was a significant gap between graduation and the skills required
                for high-impact international publication.
              </p>
              <p className='text-slate-500 text-lg leading-relaxed mb-10 font-medium'>
                We started as a small consultancy group helping post-graduate
                students with their data analysis. Today, we have evolved into
                Bangladesh&apos;s largest online research skill development
                platform, having served over 50,000 students and professionals.
              </p>
              <div className='grid grid-cols-2 gap-8'>
                <div>
                  <h4 className='text-4xl font-black text-blue-600 mb-2'>
                    2024
                  </h4>
                  <p className='text-slate-400 font-bold uppercase text-xs tracking-widest'>
                    Year Established
                  </p>
                </div>
                <div>
                  <h4 className='text-4xl font-black text-blue-600 mb-2'>
                    50K+
                  </h4>
                  <p className='text-slate-400 font-bold uppercase text-xs tracking-widest'>
                    Global Students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='py-24 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-black text-slate-900 mb-4'>
              Our Core Values
            </h2>
            <p className='text-slate-500 max-w-2xl mx-auto font-medium'>
              The principles that guide every course we design and every
              consultancy we undertake.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Academic Integrity',
                desc: 'We uphold the highest ethical standards in research and academic writing.',
                icon: '⚖️',
              },
              {
                title: 'Innovation First',
                desc: 'Constantly updating our curriculum with the latest research tools and methodologies.',
                icon: '🚀',
              },
              {
                title: 'Student Centric',
                desc: 'Your success in publication is our ultimate measure of performance.',
                icon: '🎯',
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className='bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-100 hover:-translate-y-2 transition-transform'
              >
                <div className='text-5xl mb-6'>{value.icon}</div>
                <h3 className='text-2xl font-black text-slate-900 mb-4'>
                  {value.title}
                </h3>
                <p className='text-slate-500 leading-relaxed font-medium'>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Team */}
      <section className='py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-black text-slate-900 mb-4'>
              The Leadership Team
            </h2>
            <p className='text-slate-500 font-medium max-w-2xl mx-auto'>
              Expert minds dedicated to transforming the research landscape of
              the nation.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* {TEAM_MEMBERS.slice(0, 2).map((member) => (
              <div
                key={member.id}
                className='flex flex-col sm:flex-row bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 p-8 gap-8 items-center sm:items-stretch'
              >
                <div className='w-48 h-48 sm:w-56 sm:h-auto shrink-0'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover rounded-[2rem] shadow-lg'
                  />
                </div>
                <div className='flex flex-col justify-center text-center sm:text-left'>
                  <h3 className='text-2xl font-black text-slate-900 mb-2'>
                    {member.name}
                  </h3>
                  <p className='text-blue-600 font-bold uppercase text-xs tracking-widest mb-4'>
                    {member.role}
                  </p>
                  <p className='text-slate-500 font-medium leading-relaxed mb-6'>
                    A visionary academic with over 15 years of experience in
                    high-impact publishing and research strategy at {member.org}
                    .
                  </p>
                  <div className='flex justify-center sm:justify-start space-x-4'>
                    <span className='w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-slate-900 transition-colors'>
                      in
                    </span>
                    <span className='w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-blue-600 hover:text-white transition-colors'>
                      tw
                    </span>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <button className='bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl transition-all'>
              Browse Courses
            </button>
            <button className='bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all'>
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
