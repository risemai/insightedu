export function MissionSection() {
  return (
    <section className='py-24 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-black text-slate-900'>
            Our Mission
          </h2>
          <div className='h-1 w-20 bg-blue-500 mx-auto mt-6 rounded-full'></div>
        </div>

        <div className='bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/5 flex flex-col lg:flex-row items-stretch min-h-125 border border-gray-100'>
          <div className='lg:w-1/2 relative min-h-87.5'>
            <img
              src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
              alt='Mission'
              className='absolute inset-0 w-full h-full object-cover'
            />
          </div>
          <div className='lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-white relative'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100%] z-0'></div>

            <div className='relative z-10'>
              <h3 className='text-3xl font-black text-slate-900 mb-8 leading-tight'>
                Democratizing Research Skills <br className='hidden md:block' />{' '}
                Across Borders.
              </h3>
              <p className='text-slate-500 text-lg leading-relaxed mb-8 font-medium'>
                Our mission is to empower scholars, students, and professionals
                by providing accessible, high-quality research education and
                expert consultancy. We believe that financial constraints or
                location should never be a barrier to academic excellence and
                groundbreaking discoveries.
              </p>
              <ul className='space-y-4 mb-10'>
                {[
                  'Fostering a global community of innovators',
                  'Maintaining the highest ethical research standards',
                  'Bridging academia and industry through practical skills',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className='flex items-center text-slate-700 font-bold'
                  >
                    <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 shrink-0'>
                      <svg
                        className='w-3 h-3 text-blue-600'
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
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className='bg-blue-500 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-200'>
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
