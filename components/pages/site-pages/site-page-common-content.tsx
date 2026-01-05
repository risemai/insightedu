import { PortableTextComponent } from '@/components/shared';
import { SitePagesType } from '@/types';
import { PortableText } from 'next-sanity';

type SitePageCommonContentProps = {
  data?: SitePagesType;
};

export function SitePageCommonContent({ data }: SitePageCommonContentProps) {
  const { title, description } = data ?? {};

  return (
    <div>
      <section className='bg-slate-900 py-24 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] -translate-y-20 translate-x-20'></div>
          <div className='absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] translate-y-20 -translate-x-20'></div>
        </div>
        <div className='container mx-auto px-4 relative z-10 text-center'>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-8 leading-tight'>
            {title}
          </h1>
        </div>
      </section>
      <section className='py-24 bg-white relative -mt-12 rounded-t-[3rem] z-20 shadow-2xl'>
        <div className='container mx-auto px-4 w-3/6'>
          {description && (
            <PortableText
              value={description}
              components={PortableTextComponent}
            />
          )}
        </div>
      </section>
    </div>
  );
}
