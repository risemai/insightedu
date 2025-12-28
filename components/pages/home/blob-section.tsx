export function BlobSection() {
  const cards = [
    {
      title: '24hr Expert Support',
      description:
        'Get real-time answers to your research roadblocks from our global experts.',
      icon: (
        <svg
          className='w-8 h-8 text-blue-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Skill Development',
      description:
        'Industry-standard modules tailored for high-impact publication success.',
      icon: (
        <svg
          className='w-8 h-8 text-purple-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 10V3L4 14h7v7l9-11h-7z'
          />
        </svg>
      ),
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Research Resources',
      description:
        'Exclusive access to paper templates, datasets, and citation libraries.',
      icon: (
        <svg
          className='w-8 h-8 text-emerald-600'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
          />
        </svg>
      ),
      bgColor: 'bg-emerald-50',
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className='bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-all duration-300'
        >
          <div
            className={`${card.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
          >
            {card.icon}
          </div>
          <h3 className='text-xl font-bold text-slate-900 mb-3'>
            {card.title}
          </h3>
          <p className='text-slate-500 leading-relaxed font-medium'>
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
