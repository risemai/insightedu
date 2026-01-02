export function CoreValues() {
  return (
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
  );
}
