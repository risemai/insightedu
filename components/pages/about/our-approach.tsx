export function OurApproach() {
  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <div
            className='inline-block px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 font-bold text-xs 
            uppercase tracking-widest mb-6'
          >
            Our Methodology
          </div>
          <h2 className='text-4xl font-black text-slate-900 mb-4'>
            Professional Research Publication Support
          </h2>
          <p className='text-slate-500 max-w-3xl mx-auto font-medium text-lg'>
            From manuscript preparation to journal submission, we provide
            comprehensive research consultancy services to ensure your
            publication success.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20'>
          <div>
            <div className='relative rounded-[3rem] overflow-hidden shadow-2xl'>
              <img
                src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
                alt='Our Approach'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-linear-to-t from-blue-900/30 to-transparent'></div>
            </div>
          </div>

          <div className='space-y-8'>
            {[
              {
                step: '01',
                title: 'Manuscript Evaluation',
                desc: 'We thoroughly review your research paper, assess its quality, and identify areas for improvement to meet journal standards.',
              },
              {
                step: '02',
                title: 'Professional Editing',
                desc: 'Expert editing for language, structure, methodology, and formatting. Statistical analysis support and data visualization assistance.',
              },
              {
                step: '03',
                title: 'Journal Selection',
                desc: 'Strategic identification of suitable journals based on your research scope, target audience, and publication goals.',
              },
              {
                step: '04',
                title: 'Submission & Follow-up',
                desc: 'Complete submission support, responding to reviewer comments, and revision assistance until successful publication.',
              },
            ].map((approach, idx) => (
              <div key={idx} className='flex gap-6'>
                <div className='shrink-0'>
                  <div className='w-16 h-16 rounded-2xl bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg'>
                    <span className='text-white font-black text-lg'>
                      {approach.step}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className='text-2xl font-black text-slate-900 mb-2'>
                    {approach.title}
                  </h3>
                  <p className='text-slate-500 leading-relaxed font-medium'>
                    {approach.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-linear-to-br from-slate-50 to-blue-50 rounded-[3rem] p-12 lg:p-16'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-black text-slate-900 mb-4'>
              Why Our Approach Works
            </h3>
            <p className='text-slate-500 max-w-2xl mx-auto font-medium'>
              Combining deep research expertise with understanding of
              publication standards ensures your success.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: '📊',
                title: 'Expert Team',
                desc: 'Our consultants are published researchers with extensive experience in international journals.',
              },
              {
                icon: '🎯',
                title: 'Publication-Focused',
                desc: 'Every service designed with one goal: getting your research paper accepted and published.',
              },
              {
                icon: '🔄',
                title: 'End-to-End Support',
                desc: 'From first draft to publication, we support you through revisions and reviewer responses.',
              },
            ].map((feature, idx) => (
              <div key={idx} className='text-center'>
                <div className='text-5xl mb-4'>{feature.icon}</div>
                <h4 className='text-xl font-black text-slate-900 mb-3'>
                  {feature.title}
                </h4>
                <p className='text-slate-500 font-medium'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
