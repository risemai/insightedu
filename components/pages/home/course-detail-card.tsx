import { Course } from '@/types';

export function CourseDetailCard({
  course,
  isFullView,
}: {
  course: Course;

  isFullView?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/5 border border-gray-100 flex flex-col ${
        isFullView ? '' : 'lg:flex-row'
      }`}
    >
      {/* Title Bar (requested layout) */}

      <div className='flex flex-col lg:flex-row w-full'>
        {/* Left Side: Image */}
        <div className={`lg:w-1/2 relative h-75 lg:h-auto`}>
          <img
            src={course.image}
            alt={course.title}
            className='absolute inset-0 w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent lg:hidden'></div>
          {isFullView && (
            <div className='absolute top-8 left-8 bg-blue-600 text-white px-6 py-2 rounded-full font-bold'>
              Featured
            </div>
          )}
        </div>

        {/* Right Side: Modules & Info */}
        <div className='lg:w-1/2 p-10 lg:p-14'>
          {isFullView && (
            <h1 className='text-4xl font-black text-slate-900 mb-6'>
              {course.title}
            </h1>
          )}
          <p className='text-blue-600 font-bold mb-8 uppercase tracking-widest text-sm flex items-center'>
            <span className='w-8 h-0.5 bg-blue-600 mr-3'></span>
            Instructor: {course.instructor}
          </p>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mb-10'>
            <div className='space-y-1'>
              <p className='text-slate-400 text-xs font-bold uppercase tracking-wider'>
                Modules
              </p>
              <p className='text-xl font-extrabold text-slate-800'>
                {course.modules} Units
              </p>
            </div>
            <div className='space-y-1'>
              <p className='text-slate-400 text-xs font-bold uppercase tracking-wider'>
                Duration
              </p>
              <p className='text-xl font-extrabold text-slate-800'>
                {course.hours} Hours
              </p>
            </div>
            <div className='space-y-1'>
              <p className='text-slate-400 text-xs font-bold uppercase tracking-wider'>
                Quizzes
              </p>
              <p className='text-xl font-extrabold text-slate-800'>
                {course.quizzes} Sets
              </p>
            </div>
            <div className='space-y-1'>
              <p className='text-slate-400 text-xs font-bold uppercase tracking-wider'>
                Assignments
              </p>
              <p className='text-xl font-extrabold text-slate-800'>
                {course.assignments} Tasks
              </p>
            </div>
            <div className='space-y-1'>
              <p className='text-slate-400 text-xs font-bold uppercase tracking-wider'>
                Sessions
              </p>
              <p className='text-xl font-extrabold text-slate-800'>
                {course.sessions} Live
              </p>
            </div>
            <div className='space-y-1'>
              <p className='text-slate-400 text-xs font-bold uppercase tracking-wider'>
                Access
              </p>
              <p className='text-xl font-extrabold text-slate-800'>Lifetime</p>
            </div>
          </div>

          <div className='border-t border-gray-100 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6'>
            <div>
              <p className='text-slate-400 text-sm line-through'>
                ৳ {course.originalPrice.toLocaleString()}
              </p>
              <p className='text-4xl font-black text-blue-600'>
                ৳ {course.currentPrice.toLocaleString()}
              </p>
            </div>
            {!isFullView && (
              <button className='w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center group'>
                Course Details
                <svg
                  className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform'
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
            )}
            {isFullView && (
              <button className='w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200'>
                Enroll Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
