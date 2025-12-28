'use client';

import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import { PrimaryLogo } from './primary-logo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

type PhoneMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

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

export function PublicPhoneMenu({ isOpen, setIsOpen }: PhoneMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side='top' className='py-3'>
        <SheetHeader>
          <SheetTitle>
            <span onClick={() => setIsOpen(false)}>
              <PrimaryLogo />
            </span>
          </SheetTitle>
        </SheetHeader>

        <nav>
          <ul>
            {menuItems.map((item) => {
              if (item.submenu) {
                return (
                  <Accordion
                    key={item.label}
                    type='single'
                    collapsible
                    className='px-4'
                  >
                    <AccordionItem value={item.label}>
                      <AccordionTrigger className='focus:none'>
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className='pb-0'>
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label} className='mb-1'>
                            <SheetClose asChild>
                              <Link
                                href={subItem.href}
                                className='block w-full rounded-xl py-3 text-sm font-medium'
                              >
                                {subItem.label}
                              </Link>
                            </SheetClose>
                          </li>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  //   <li key={item.label} className='mb-1'>
                  //     <SheetClose asChild>
                  //       <Link
                  //         href={item.href}
                  //         className='block w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white/5 transition'
                  //       >
                  //         {item.label}
                  //       </Link>
                  //     </SheetClose>
                  //   </li>
                );
              } else {
                return (
                  <li key={item.label} className='mb-1'>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className='block w-full rounded-xl px-4 py-3 text-sm font-medium'
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                );
              }
            })}
            {/* <li>
              <SheetClose asChild>
                <Link
                  href='/'
                  className='block w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white/5 transition'
                >
                  Home
                </Link>
              </SheetClose>
            </li>

            <li>
              <SheetClose asChild>
                <Link
                  href='/products'
                  className='block w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white/5 transition'
                >
                  Our Products
                </Link>
              </SheetClose>
            </li>

            <li>
              <SheetClose asChild>
                <Link
                  href='/blogs'
                  className='block w-full rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white/5 transition'
                >
                  Blogs
                </Link>
              </SheetClose>
            </li> */}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
