import { Course } from '@/types';

export function ExploreCourseCard({ course }: { course: Course }) {
  return (
    <div className='max-w-md w-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group'>
      <div className='relative h-64 overflow-hidden'>
        <img
          src={course.image}
          alt={course.title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
        />
        <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-blue-600 text-xs font-black uppercase shadow-sm'>
          Best Seller
        </div>
      </div>

      <div className='p-8'>
        <div className='flex items-center space-x-2 mb-4'>
          <span className='w-6 h-[2px] bg-blue-500'></span>
          <span className='text-slate-400 text-xs font-bold uppercase tracking-widest'>
            By {course.instructor}
          </span>
        </div>

        <h3 className='text-2xl font-black text-slate-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors'>
          {course.title}
        </h3>

        <p className='text-slate-500 font-medium text-sm mb-8 line-clamp-2'>
          {course.description}
        </p>

        <div className='mb-8 p-4 bg-blue-50 rounded-2xl flex items-center justify-between'>
          <div>
            <span className='block text-slate-400 text-[10px] font-bold uppercase line-through leading-none mb-1'>
              ৳ {course.originalPrice.toLocaleString()}
            </span>
            <span className='block text-2xl font-black text-blue-600 leading-none'>
              ৳ {course.currentPrice.toLocaleString()}
            </span>
          </div>
          <div className='bg-blue-600 text-white text-[10px] px-2 py-1 rounded font-black'>
            48% OFF
          </div>
        </div>

        <button className='w-full bg-slate-900 text-white py-4 rounded-2xl font-bold group-hover:bg-blue-600 transition-all flex items-center justify-center'>
          View Details
          <svg
            className='w-5 h-5 ml-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
