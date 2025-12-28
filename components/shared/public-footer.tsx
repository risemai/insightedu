export function PublicFooter() {
  return (
    <footer className='bg-slate-950 pt-20 pb-10 text-slate-400'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20'>
          {/* Brand */}
          <div className='col-span-1 lg:col-span-1'>
            <div className='flex items-center mb-6'>
              <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3'>
                <span className='text-white font-black text-xl italic'>P</span>
              </div>
              <h1 className='text-2xl font-extrabold text-white tracking-tight'>
                Insight Edu
              </h1>
            </div>
            <p className='text-slate-500 font-medium mb-8 leading-relaxed'>
              Bangladesh’s Largest Online Learning and Research Skill
              Development Platform. Empowering thousands of researchers
              worldwide.
            </p>
            <div className='flex space-x-4'>
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((s) => (
                <a
                  key={s}
                  href='#'
                  className='w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all'
                >
                  <span className='sr-only'>{s}</span>
                  <div className='w-5 h-5 bg-current opacity-20 rounded-sm'></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-white font-black text-lg mb-8 uppercase tracking-widest'>
              Quick Links
            </h4>
            <ul className='space-y-4 font-bold'>
              <li>
                <a href='#' className='hover:text-blue-500 transition-colors'>
                  Courses
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500 transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500 transition-colors'>
                  Research Solutions
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500 transition-colors'>
                  Expert Mentors
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500 transition-colors'>
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className='text-white font-black text-lg mb-8 uppercase tracking-widest'>
              Resources
            </h4>
            <ul className='space-y-4 font-bold'>
              <li>
                <a href='#' className='hover:text-blue-500 transition-colors'>
                  Documentation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500 transition-colors'>
                  Paper Templates
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500 transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500 transition-colors'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-500 transition-colors'>
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className='text-white font-black text-lg mb-8 uppercase tracking-widest'>
              Join Our Newsletter
            </h4>
            <p className='text-slate-500 font-medium mb-6'>
              Receive research tips and course updates directly in your inbox.
            </p>
            <form className='relative'>
              <input
                type='email'
                placeholder='Email Address'
                className='w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors'
              />
              <button className='absolute right-2 top-2 bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-500 transition-all'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className='pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6'>
          <p className='text-sm font-bold'>
            © {new Date().getFullYear()} Insight Edu. All rights reserved.
          </p>
          <div className='flex space-x-8 text-sm font-bold uppercase tracking-widest'>
            <a href='#' className='hover:text-blue-500'>
              Security
            </a>
            <a href='#' className='hover:text-blue-500'>
              Cookies
            </a>
            <a href='#' className='hover:text-blue-500'>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
