import { Skeleton } from '@/components/ui/skeleton';

export function SuccessStoriesSkeleton() {
  return (
    <section className='py-24 bg-gray-50 overflow-hidden'>
      <div className='container mx-auto px-4 text-center mb-16'>
        <div className='inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-4'>
          <Skeleton className='h-3 w-20 inline-block' />
        </div>
        <div className='mx-auto'>
          <Skeleton className='h-10 w-96 mx-auto mb-4' />
          <Skeleton className='h-4 w-1/2 mx-auto' />
        </div>
      </div>

      <div className='relative group'>
        <div className='flex gap-4 animate-pulse'>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className='shrink-0 w-87.5 md:w-112.5 bg-white p-8 rounded-[2rem] border border-gray-100'
            >
              <div className='flex items-center mb-6'>
                <Skeleton className='w-14 h-14 rounded-full border-2 border-blue-500 p-0.5' />
                <div className='ml-4'>
                  <Skeleton className='h-5 w-40 mb-2' />
                  <Skeleton className='h-3 w-24' />
                </div>
              </div>
              <div className='text-slate-600 font-medium italic leading-relaxed'>
                <Skeleton className='h-4 w-full mb-2' />
                <Skeleton className='h-4 w-5/6 mb-2' />
                <Skeleton className='h-4 w-2/3' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
