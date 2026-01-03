import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: '/assets/icon/facebook-icon.svg' },
  { name: 'LinkedIn', href: '#', icon: '/assets/icon/linkedin-icon.svg' },
];

const quickLink = [
  {
    label: 'Courses',
    href: '#',
    subMenu: [
      { label: 'Research Methodology', href: '#' },
      { label: 'Academic Writing', href: '#' },
      { label: 'Data Analysis', href: '#' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Contact Us', href: '/contact' },
];

export function PublicFooter() {
  return (
    <footer className='bg-slate-950 pt-20 pb-10 text-slate-400'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20'>
          {/* Brand */}
          <div className='col-span-1 lg:col-span-1'>
            <Link href='/'>
              <Image
                src='/rise-mai-logo-01.png'
                width={150}
                height={47}
                alt='Risemai Logo'
              />
            </Link>
            <p className='text-slate-500 font-medium mb-8 leading-relaxed'>
              Bangladesh’s Largest Online Learning and Research Skill
              Development Platform. Empowering thousands of researchers
              worldwide.
            </p>
            <div className='flex space-x-4'>
              {socialLinks.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className='w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center bg-white hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all'
                >
                  <span className='sr-only'>{s.name}</span>
                  <Image
                    src={s.icon}
                    width={20}
                    height={20}
                    alt={`${s.name} Icon`}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-white font-black text-lg mb-8 uppercase tracking-widest'>
              Quick Links
            </h4>
            <ul className='space-y-4 font-bold'>
              {quickLink.map((link) => {
                if (link.subMenu) {
                  return (
                    <NavigationMenu key={link.label}>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger
                            className='cursor-pointer hover:text-blue-500 transition-colors p-0 font-bold 
                          text-base  bg-transparent hover:bg-transparent focus:bg-transparent 
                        data-[state=open]:hover:bg-transparent
                        data-[state=open]:text-blue-500
                        data-[state=open]:focus:bg-transparent data-[state=open]:bg-transparent 
                         data-[state=open]:hover:text-blue-500 data-[state=open]:focus:text-blue-500
                         focus:text-blue-500'
                          >
                            {link.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className='min-w-40'>
                            {link.subMenu.map((subItem) => (
                              <NavigationMenuLink key={subItem.href}>
                                <Link href={subItem.href}>{subItem.label}</Link>
                              </NavigationMenuLink>
                            ))}
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  );
                } else {
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className='hover:text-blue-500 transition-colors'
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className='text-white font-black text-lg mb-8 uppercase tracking-widest'>
              Resources
            </h4>
            <ul className='space-y-4 font-bold'>
              <li>
                <Link
                  href='#'
                  className='hover:text-blue-500 transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-blue-500 transition-colors'
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='hover:text-blue-500 transition-colors'
                >
                  Support Center
                </Link>
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
            © {new Date().getFullYear()} Risemai. All rights reserved.
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
