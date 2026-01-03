'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import Link from 'next/link';
import { PublicPhoneMenu } from './public-phone-menu';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

export function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'About Us', href: '/about' },
    {
      label: 'Courses',
      href: '#',
      submenu: [
        { label: 'Research Methodology', href: '#' },
        { label: 'Academic Writing', href: '#' },
        { label: 'Data Analysis', href: '#' },
      ],
    },
    { label: 'Research', href: '/research' },
    { label: 'Publications', href: '/publications' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100'>
      <div className='container mx-auto py-2 flex items-center justify-between md:px-0 px-3'>
        <Link href='/'>
          <Image
            src='/rise-mai-logo-01.png'
            width={150}
            height={47}
            alt='Risemai Logo'
          />
        </Link>
        <div className='hidden md:block'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className='flex gap-4'>
                {menuItems.map((item) => {
                  if (item.submenu) {
                    return (
                      <div key={item.label}>
                        <NavigationMenuTrigger className='font-medium'>
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className='min-w-50'>
                          {item.submenu.map((subItem) => (
                            <NavigationMenuLink
                              key={subItem.label}
                              className='font-medium'
                              asChild
                            >
                              <Link href={subItem.href}>{subItem.label}</Link>
                            </NavigationMenuLink>
                          ))}
                        </NavigationMenuContent>
                      </div>
                    );
                  } else {
                    return (
                      <NavigationMenuLink
                        key={item.label}
                        className='font-medium'
                        asChild
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </NavigationMenuLink>
                    );
                  }
                })}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <span className='md:hidden block'>
          <Button variant='outline' size='icon' onClick={() => setIsOpen(true)}>
            <Menu />
          </Button>
        </span>
      </div>
      <PublicPhoneMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
