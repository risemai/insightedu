'use client';

import { useState } from 'react';

export function PublicNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: 'About Us', href: '#' },
    {
      label: 'Courses',
      href: '#',
      submenu: [
        { label: 'Research Methodology', href: '#' },
        { label: 'Academic Writing', href: '#' },
        { label: 'Data Analysis', href: '#' },
      ],
    },
    { label: 'Research', href: '#' },
    { label: 'Publications', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <div className='flex items-center cursor-pointer'>
            <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-blue-200'>
              <span className='text-white font-black text-xl italic'>P</span>
            </div>
            <div className='hidden sm:block'>
              <h1 className='text-xl font-extrabold text-slate-900 tracking-tight leading-none'>
                PATHFINDER
              </h1>
              <p className='text-[10px] text-blue-600 font-bold tracking-widest uppercase'>
                Research Center
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center space-x-8'>
            {menuItems.map((item) => (
              <div
                key={item.label}
                className='relative group'
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className='flex items-center text-slate-600 font-semibold hover:text-blue-600 transition-colors'
                >
                  {item.label}
                  {item.submenu && (
                    <svg
                      className='w-4 h-4 ml-1 group-hover:rotate-180 transition-transform'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      />
                    </svg>
                  )}
                </a>

                {item.submenu && activeDropdown === item.label && (
                  <div className='absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200'>
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className='block px-4 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors'
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className='hidden sm:block'>
            <button className='bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200'>
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className='lg:hidden p-2 text-slate-600'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='lg:hidden bg-white border-t border-gray-100 py-4 animate-in slide-in-from-top duration-300'>
          <div className='container mx-auto px-4 space-y-4'>
            {menuItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className='block text-slate-900 font-bold text-lg mb-2'
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div className='pl-4 space-y-2 border-l-2 border-blue-100 ml-2'>
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className='block text-slate-600'
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
