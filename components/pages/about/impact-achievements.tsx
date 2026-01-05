export function ImpactAchievements() {
  return (
    <section className='py-24 bg-linear-to-br from-blue-600 to-blue-800'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-black text-white mb-4'>
            Our Impact & Achievements
          </h2>
          <p className='text-blue-100 max-w-2xl mx-auto font-medium text-lg'>
            Leading Bangladesh&apos;s research landscape with professional
            publication support and consultancy services.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          {[
            {
              number: '1200+',
              label: 'Research Papers Published',
              icon: '📄',
            },
            {
              number: '700+',
              label: 'Researchers Assisted',
              icon: '👨‍🔬',
            },
            {
              number: '92%',
              label: 'Publication Success Rate',
              icon: '✨',
            },
            {
              number: '150+',
              label: 'Journals Covered',
              icon: '📚',
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className='bg-white/10 backdrop-blur-sm p-8 rounded-3xl text-center hover:bg-white/20 transition-all border border-white/20'
            >
              <div className='text-5xl mb-4'>{stat.icon}</div>
              <div className='text-5xl font-black text-white mb-2'>
                {stat.number}
              </div>
              <div className='text-blue-100 font-bold uppercase text-sm tracking-wider'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {[
            {
              title: 'Top-Tier Publications',
              desc: 'Helping researchers publish in Scopus, Web of Science, PubMed indexed journals and Q1/Q2 ranked publications.',
              icon: '🏆',
            },
            {
              title: 'Expert Consultancy',
              desc: 'Professional manuscript editing, statistical analysis, and complete publication support from experienced researchers.',
              icon: '🎯',
            },
            {
              title: 'Bangladesh Leader',
              desc: 'The most trusted research consultancy in Bangladesh, partnering with major universities and research institutions.',
              icon: '🤝',
            },
          ].map((achievement, idx) => (
            <div
              key={idx}
              className='bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all'
            >
              <div className='text-4xl mb-4'>{achievement.icon}</div>
              <h3 className='text-2xl font-black text-white mb-3'>
                {achievement.title}
              </h3>
              <p className='text-blue-100 leading-relaxed font-medium'>
                {achievement.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
