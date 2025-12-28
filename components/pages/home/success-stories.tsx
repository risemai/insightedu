import Marquee from 'react-fast-marquee';
import { TESTIMONIALS } from './constants';

export function SuccessStories() {
  return (
    <section className='py-24 bg-gray-50 overflow-hidden'>
      <div className='container mx-auto px-4 text-center mb-16'>
        <div className='inline-block px-4 py-1.5 bg-blue-100 rounded-full text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-4'>
          Testimonials
        </div>
        <h2 className='text-4xl md:text-5xl font-black text-slate-900'>
          Success Stories
        </h2>
        <p className='text-slate-500 mt-4 max-w-2xl mx-auto font-medium'>
          Join thousands of successful researchers who have accelerated their
          careers with Pathfinder.
        </p>
      </div>

      <div className='relative group'>
        <Marquee pauseOnHover={true} gradient={false} speed={40}>
          <div className='flex gap-4'>
            {[...TESTIMONIALS, ...TESTIMONIALS].map((story, i) => (
              <div
                key={i}
                className='shrink-0 w-87.5 md:w-112.5 bg-white p-8 rounded-[2rem] border border-gray-100'
              >
                <div className='flex items-center mb-6'>
                  <img
                    src={story.image}
                    alt={story.name}
                    className='w-14 h-14 rounded-full border-2 border-blue-500 p-0.5 object-cover'
                  />
                  <div className='ml-4'>
                    <h4 className='font-black text-slate-900 leading-tight'>
                      {story.name}
                    </h4>
                    <p className='text-blue-600 text-xs font-bold'>
                      {story.designation}
                    </p>
                  </div>
                </div>
                <p className='text-slate-600 font-medium italic leading-relaxed relative'>
                  <span className='absolute -top-4 -left-2 text-6xl text-blue-100 font-serif'>
                    “
                  </span>
                  {story.story}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
