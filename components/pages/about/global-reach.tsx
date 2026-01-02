import Image from 'next/image';

export function GlobalReach() {
  return (
    <section className='py-24 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div>
            <div
              className='inline-block px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 font-bold text-xs 
              uppercase tracking-widest mb-6'
            >
              Our Presence in Bangladesh
            </div>
            <h2 className='text-4xl font-black text-slate-900 mb-8'>
              Serving Researchers Across Bangladesh
            </h2>
            <p className='text-slate-500 text-lg leading-relaxed mb-6 font-medium'>
              From Dhaka to Chittagong, Sylhet to Khulna, we provide
              comprehensive research publication services to academic
              institutions, hospitals, and research centers throughout
              Bangladesh.
            </p>
            <p className='text-slate-500 text-lg leading-relaxed mb-10 font-medium'>
              Our expert consultants work with researchers from all disciplines
              - medical sciences, engineering, social sciences, business, and
              more - helping them publish in renowned international journals.
            </p>

            <div className='space-y-6'>
              {[
                {
                  region: 'Medical Research',
                  students: '800+',
                  highlight: 'Doctors, Medical Students, Clinical Researchers',
                },
                {
                  region: 'Engineering & Technology',
                  students: '450+',
                  highlight: 'University Faculty, PhD Scholars, Researchers',
                },
                {
                  region: 'Social & Business Sciences',
                  students: '380+',
                  highlight: 'Academics, MBA Students, Policy Researchers',
                },
                {
                  region: 'Basic Sciences',
                  students: '370+',
                  highlight: 'Biology, Chemistry, Physics, Mathematics',
                },
              ].map((region, idx) => (
                <div
                  key={idx}
                  className='bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all'
                >
                  <div className='flex justify-between items-center mb-2'>
                    <h3 className='text-xl font-black text-slate-900'>
                      {region.region}
                    </h3>
                    <span className='text-2xl font-black text-blue-600'>
                      {region.students}
                    </span>
                  </div>
                  <p className='text-slate-500 text-sm font-medium'>
                    {region.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='space-y-8'>
            <div className='relative rounded-[3rem] overflow-hidden shadow-2xl'>
              <Image
                width={700}
                height={400}
                src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                alt='Global Reach'
                className='w-full h-100 object-cover'
              />
              <div className='absolute inset-0 bg-linear-to-t from-blue-900/50 to-transparent'></div>
              <div className='absolute bottom-8 left-8 right-8'>
                <h4 className='text-2xl font-black text-white mb-2'>
                  All Across Bangladesh
                </h4>
                <p className='text-blue-100 font-medium'>
                  Supporting researchers nationwide with publication excellence
                </p>
              </div>
            </div>

            <div className='bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100'>
              <h3 className='text-2xl font-black text-slate-900 mb-6'>
                Trusted Partnerships
              </h3>
              <div className='space-y-4'>
                {[
                  {
                    partner: 'Public Universities',
                    count: '12+',
                    icon: '🎓',
                  },
                  {
                    partner: 'Medical Colleges & Hospitals',
                    count: '18+',
                    icon: '🏥',
                  },
                  {
                    partner: 'Research Centers',
                    count: '8+',
                    icon: '🔬',
                  },
                  {
                    partner: 'Private Universities',
                    count: '15+',
                    icon: '🏛️',
                  },
                ].map((partnership, idx) => (
                  <div
                    key={idx}
                    className='flex items-center justify-between py-4 border-b border-gray-100 last:border-0'
                  >
                    <div className='flex items-center gap-4'>
                      <span className='text-3xl'>{partnership.icon}</span>
                      <span className='text-slate-700 font-bold'>
                        {partnership.partner}
                      </span>
                    </div>
                    <span className='text-2xl font-black text-blue-600'>
                      {partnership.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-linear-to-br from-blue-600 to-blue-800 p-10 rounded-[2.5rem] shadow-xl text-white'>
              <div className='text-4xl mb-4'>💼</div>
              <h3 className='text-2xl font-black mb-3'>
                Comprehensive Services
              </h3>
              <p className='text-blue-100 leading-relaxed font-medium mb-6'>
                Full-spectrum research support in both English and Bangla, with
                training courses available for skill development.
              </p>
              <div className='flex flex-wrap gap-2'>
                {[
                  'Manuscript Editing',
                  'Statistical Analysis',
                  'Journal Selection',
                  'Training Courses',
                ].map((lang, idx) => (
                  <span
                    key={idx}
                    className='px-4 py-2 bg-white/20 rounded-full text-sm font-bold backdrop-blur-sm'
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
