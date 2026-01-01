import { Skeleton } from '@/components/ui/skeleton';

export function CourseDetailCardSkeleton() {
  return (
    <section id='featured-course' className='py-20 container mx-auto px-4'>
      <div className='text-center mb-16'>
        <Skeleton className='h-10 w-80 mx-auto mb-4' />
        <Skeleton className='h-1.5 w-24 mx-auto rounded-full' />
      </div>
      <div className='bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/5 border border-gray-100 flex flex-col lg:flex-row'>
        <div className='flex flex-col lg:flex-row w-full'>
          {/* Left Side: Image */}
          <div className='lg:w-1/2 relative h-75 lg:h-auto'>
            <Skeleton className='absolute inset-0 w-full h-full' />
            <div className='absolute top-8 left-8'>
              <Skeleton className='w-20 h-8 rounded-full' />
            </div>
          </div>

          {/* Right Side: Modules & Info */}
          <div className='lg:w-1/2 p-10 lg:p-14'>
            <Skeleton className='h-10 w-3/4 mb-6' />
            <div className='flex items-center mb-8'>
              <Skeleton className='w-8 h-0.5 mr-3' />
              <Skeleton className='h-4 w-32' />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 mb-10'>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className='space-y-1'>
                  <Skeleton className='h-3 w-16' />
                  <Skeleton className='h-6 w-20' />
                </div>
              ))}
            </div>

            <div className='border-t border-gray-100 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6'>
              <div>
                <Skeleton className='h-4 w-16 mb-1' />
                <Skeleton className='h-10 w-24' />
              </div>
              <Skeleton className='w-full sm:w-32 h-12 rounded-2xl' />
              <Skeleton className='w-full sm:w-32 h-14 rounded-2xl' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
