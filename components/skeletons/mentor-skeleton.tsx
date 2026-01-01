import { Skeleton } from '@/components/ui/skeleton';

export function MentorSkeleton() {
  return (
    <div className='bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center shadow animate-pulse'>
      <Skeleton className='w-20 h-20 rounded-full mb-4' />
      <Skeleton className='h-5 w-32 mb-2' />
      <Skeleton className='h-4 w-24 mb-4' />
      <Skeleton className='h-3 w-48 mb-1' />
      <Skeleton className='h-3 w-40 mb-1' />
      <Skeleton className='h-3 w-36' />
    </div>
  );
}
