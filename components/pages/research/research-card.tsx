import { ResearchType } from '@/types';
import Link from 'next/link';

export function ResearchCard({ data }: { data: ResearchType }) {
  const { title, description, image, link } = data;

  return (
    <div className='group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col'>
      <div className='relative h-64 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
        />
      </div>
      <div className='p-10 flex flex-col grow'>
        <h3 className='text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors'>
          {title}
        </h3>
        <p className='text-slate-500 font-medium leading-relaxed mb-8 grow'>
          {description}
        </p>
        <Link
          href={link}
          target='_blank'
          className='flex items-center text-xs font-black uppercase tracking-widest text-blue-600 group/btn self-start'
        >
          View Project Details
          <svg
            className='w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='3'
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
