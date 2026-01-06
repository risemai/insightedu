export function ResearchCardSkeleton() {
  return (
    <div className='group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl flex flex-col animate-pulse'>
      <div className='relative h-64 overflow-hidden bg-gray-200'>
        <div className='w-full h-full object-cover bg-gray-300' />
      </div>
      <div className='p-10 flex flex-col grow'>
        <div className='h-8 w-2/3 bg-gray-200 rounded mb-4' />
        <div className='h-4 w-full bg-gray-100 rounded mb-2' />
        <div className='h-4 w-5/6 bg-gray-100 rounded mb-2' />
        <div className='h-4 w-4/6 bg-gray-100 rounded mb-8' />
        <div className='flex items-center'>
          <div className='h-6 w-32 bg-gray-200 rounded mr-2' />
          <div className='h-5 w-5 bg-gray-200 rounded' />
        </div>
      </div>
    </div>
  );
}
