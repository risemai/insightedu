'use client';

import { MentorSkeleton } from '@/components/skeletons';
import { useMentorPaginated } from '@/hooks/mentor';
import Link from 'next/link';

export function TeamSection() {
  const { data, isLoading } = useMentorPaginated(1, 4);

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'>
          <div className='max-w-xl'>
            <h2 className='text-4xl font-black text-slate-900 mb-4'>
              Meet Our Researchers
            </h2>
            <p className='text-slate-500 font-medium'>
              Learn from global research experts with decades of publication
              experience in world-renowned journals.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <MentorSkeleton key={i} />
              ))
            : data?.map((member) => (
                <div key={member._id} className='group'>
                  <div className='relative rounded-[2rem] overflow-hidden mb-6 aspect-square shadow-lg'>
                    <img
                      src={member.image}
                      alt={member.name}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-colors'></div>

                    <div className='absolute bottom-6 left-0 right-0 flex justify-center space-x-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-500'>
                      {member.researchGate && (
                        <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg hover:bg-blue-500 hover:text-white transition-colors cursor-pointer'>
                          <span className='text-[10px] font-bold uppercase'>
                            RG
                          </span>
                        </div>
                      )}
                      {member.googleScholar && (
                        <Link
                          href={member.googleScholar}
                          className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg hover:bg-blue-500 hover:text-white transition-colors cursor-pointer'
                        >
                          <span className='text-[10px] font-bold uppercase'>
                            GS
                          </span>
                        </Link>
                      )}

                      {/* {['fb', 'ln', 'tw'].map((s) => (
                        <div
                         
                          className='w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg hover:bg-blue-500 hover:text-white transition-colors cursor-pointer'
                        >
                          <span className='text-[10px] font-bold uppercase'>
                            {s}
                          </span>
                        </div>
                      ))} */}
                    </div>
                  </div>
                  <div className='text-center'>
                    <h3 className='text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors'>
                      {member.name}
                    </h3>
                    <p className='text-blue-600 text-xs font-bold uppercase tracking-widest mt-1 mb-2'>
                      {member.role}
                    </p>
                    <p className='text-slate-400 text-sm font-medium'>
                      RISEMAI
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
