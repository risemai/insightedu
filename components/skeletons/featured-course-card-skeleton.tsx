import { Skeleton } from '../ui/skeleton';

export function FeaturedCourseCardSkeleton() {
  return (
    <div className='max-w-md w-full bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100'>
      <div className='relative h-64 overflow-hidden'>
        <Skeleton className='w-full h-full' />
        <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full'>
          <Skeleton className='w-16 h-4' />
        </div>
      </div>

      <div className='p-8'>
        <div className='flex items-center space-x-2 mb-4'>
          <Skeleton className='w-6 h-0.5' />
          <Skeleton className='w-20 h-3' />
        </div>

        <Skeleton className='w-full h-8 mb-4' />
        <Skeleton className='w-full h-4 mb-2' />
        <Skeleton className='w-3/4 h-4 mb-8' />

        <div className='mb-8 p-4 bg-blue-50 rounded-2xl flex items-center justify-between'>
          <div>
            <Skeleton className='w-12 h-3 mb-1' />
            <Skeleton className='w-16 h-6' />
          </div>
          <Skeleton className='w-12 h-4' />
        </div>

        <Skeleton className='w-full h-12 rounded-2xl' />
      </div>
    </div>
  );
}
