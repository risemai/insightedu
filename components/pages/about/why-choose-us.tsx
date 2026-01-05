export function WhyChooseUs() {
  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-black text-slate-900 mb-4'>
            Why Choose InsightEdu?
          </h2>
          <p className='text-slate-500 max-w-2xl mx-auto font-medium text-lg'>
            Bangladesh&apos;s premier research consultancy with proven track
            record in publication success.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            {
              title: 'Expert Consultants',
              desc: 'Work with seasoned researchers having 100+ publications in Scopus and Web of Science indexed journals.',
              icon: '👨‍🔬',
              color: 'from-blue-500 to-blue-700',
            },
            {
              title: 'High Success Rate',
              desc: '92% of manuscripts we support get successfully published in their target journals.',
              icon: '📈',
              color: 'from-green-500 to-green-700',
            },
            {
              title: 'Complete Support',
              desc: 'From data analysis to final submission, we handle every aspect of the publication process.',
              icon: '🎯',
              color: 'from-purple-500 to-purple-700',
            },
            {
              title: 'Fast Turnaround',
              desc: 'Quick and efficient service without compromising quality - most manuscripts ready within 2-3 weeks.',
              icon: '⚡',
              color: 'from-orange-500 to-orange-700',
            },
            {
              title: 'Skill Development Courses',
              desc: 'Access training courses to learn research methodology, statistical tools, and academic writing.',
              icon: '📚',
              color: 'from-pink-500 to-pink-700',
            },
            {
              title: 'Affordable Pricing',
              desc: 'Competitive rates designed for Bangladesh researchers with flexible payment options.',
              icon: '💰',
              color: 'from-indigo-500 to-indigo-700',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className='group bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300'
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className='text-2xl font-black text-slate-900 mb-4'>
                {feature.title}
              </h3>
              <p className='text-slate-500 leading-relaxed font-medium'>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className='mt-20 bg-linear-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 lg:p-16 text-white relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'></div>

          <div className='relative z-10 max-w-4xl mx-auto text-center'>
            <h3 className='text-3xl lg:text-4xl font-black mb-6'>
              Ready to Publish Your Research?
            </h3>
            <p className='text-slate-300 text-lg mb-10 font-medium'>
              Whether you need full publication support or want to enhance your
              research skills through our courses, we&apos;re here to help you
              succeed.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-lg hover:bg-blue-50 transition-colors shadow-xl'>
                Get Publication Support
              </button>
              <button className='px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-colors'>
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
