const RESEARCH_AREAS = [
  {
    id: 1,
    title: 'Medical & Healthcare',
    description:
      'Support for clinical trials, epidemiology, genomics, and advanced healthcare data systems.',
    icon: '🩺',
    color: 'blue',
  },
  {
    id: 2,
    title: 'Agricultural Sciences',
    description:
      'Sustainable farming solutions, crop protection research, and soil quality analysis.',
    icon: '🌱',
    color: 'emerald',
  },
  {
    id: 3,
    title: 'Artificial Intelligence',
    description:
      'Machine learning, neural networks, and AI implementation in academic frameworks.',
    icon: '🤖',
    color: 'purple',
  },
];

export function ResearchAreas() {
  return (
    <section className='py-24 bg-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-4'>
            Research Domains
          </div>
          <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-6'>
            Explore Our <span className='text-blue-600'>Specializations</span>
          </h2>
          <p className='text-slate-500 max-w-2xl mx-auto font-medium text-lg'>
            We offer expert-led research solutions and consultancy across a wide
            array of high-impact academic and industrial fields.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {RESEARCH_AREAS.map((area) => (
            <div
              key={area.id}
              className='group relative bg-gray-50 p-10 rounded-[2.5rem] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500'
            >
              {/* Background Accent */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-${area.color}-500/5 rounded-bl-[100%] z-0 group-hover:bg-${area.color}-500/10 transition-colors`}
              ></div>

              <div className='relative z-10'>
                <div className='text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300 inline-block'>
                  {area.icon}
                </div>
                <h3 className='text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors'>
                  {area.title}
                </h3>
                <p className='text-slate-500 font-medium leading-relaxed mb-8'>
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
