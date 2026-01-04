'use client';

import { MentorSkeleton } from '@/components/skeletons';
import { useMentors } from '@/hooks';
import Link from 'next/link';

export function LeadershipTeam() {
  const { data, isLoading } = useMentors();

  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-black text-slate-900 mb-4'>
            The Leadership Team
          </h2>
          <p className='text-slate-500 font-medium max-w-2xl mx-auto'>
            Expert minds dedicated to transforming the research landscape of the
            nation.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <MentorSkeleton key={i} />
              ))
            : data?.map((member) => (
                <div
                  key={member._id}
                  className='flex flex-col sm:flex-row bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 p-8 gap-8 items-center sm:items-stretch'
                >
                  <div className='w-48 h-48 sm:w-56 sm:h-auto shrink-0'>
                    <img
                      src={member.image}
                      alt={member.name}
                      className='w-full h-full object-cover rounded-[2rem] shadow-lg'
                    />
                  </div>
                  <div className='flex flex-col justify-center text-center sm:text-left'>
                    <h3 className='text-2xl font-black text-slate-900 mb-2'>
                      {member.name}
                    </h3>
                    <p className='text-blue-600 font-bold uppercase text-xs tracking-widest mb-4'>
                      {member.role === 'supportMentor'
                        ? 'Support Mentor'
                        : 'Mentor'}
                    </p>
                    {member.description && (
                      <p className='text-slate-500 font-medium leading-relaxed mb-6'>
                        {member.description}.
                      </p>
                    )}
                    <div className='flex justify-center sm:justify-start space-x-4'>
                      {member.researchGate && (
                        <Link
                          href={member.researchGate}
                          className='w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-slate-900 transition-colors'
                        >
                          RG
                        </Link>
                      )}
                      {member.googleScholar && (
                        <Link
                          href={member.googleScholar}
                          className='w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-blue-500 hover:text-white transition-colors'
                        >
                          GS
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
