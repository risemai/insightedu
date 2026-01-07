'use client';

import { useSpecializations } from '@/hooks';
import * as Icons from 'lucide-react';
import { SpecializationsCardSkeleton } from '@/components/skeletons';

// Tailwind color mapping
const colorMap: Record<string, { main: string; light: string }> = {
  blue: { main: '#3b82f6', light: '#eff6ff' },
  red: { main: '#ef4444', light: '#fef2f2' },
  green: { main: '#22c55e', light: '#f0fdf4' },
  yellow: { main: '#eab308', light: '#fefce8' },
  purple: { main: '#a855f7', light: '#faf5ff' },
  pink: { main: '#ec4899', light: '#fdf2f8' },
  indigo: { main: '#6366f1', light: '#eef2ff' },
  orange: { main: '#f97316', light: '#fff7ed' },
  teal: { main: '#14b8a6', light: '#f0fdfa' },
  cyan: { main: '#06b6d4', light: '#ecfeff' },
};

export function ResearchAreas() {
  const { data, isLoading } = useSpecializations();

  if (isLoading) {
    return <SpecializationsCardSkeleton />;
  }

  return (
    <section className='py-24 bg-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-4'>
            Research Domains
          </div>
          <h2 className='text-4xl md:text-5xl font-black text-slate-900 mb-6'>
            Explore Our <span className='text-blue-600'>Specializations</span>
          </h2>
          <p className='text-slate-500 max-w-2xl mx-auto font-medium text-lg'>
            We offer expert-led research solutions and consultancy across a wide
            array of high-impact academic and industrial fields.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data?.map((area) => {
            const iconKey = area.icon?.trim();
            const colors = colorMap[area.color?.toLowerCase()] || colorMap.blue;

            const LucideIcon = ((iconKey &&
              Icons[iconKey as keyof typeof Icons]) ??
              Icons.HelpCircle) as React.ElementType;

            return (
              <div
                key={area._id}
                className='group relative bg-gray-50 p-10 rounded-[2.5rem] border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500'
              >
                {/* Background Accent */}
                <div
                  className='absolute top-0 right-0 w-24 h-24 rounded-bl-[100%] rounded-tr-[2.5rem] z-0 transition-all duration-300'
                  style={{
                    backgroundColor: colors.light,
                  }}
                ></div>

                <div className='relative z-10'>
                  <div className='text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-300 inline-block'>
                    <LucideIcon size={40} style={{ color: colors.main }} />
                  </div>
                  <h3 className='text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors'>
                    {area.title}
                  </h3>
                  <p className='text-slate-500 font-medium leading-relaxed mb-8'>
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
