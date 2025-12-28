import { PublicFooter, PublicNavbar } from '../shared';

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-screen bg-gray-50 overflow-x-hidden'>
      <PublicNavbar />
      <main className='mt-20'>{children}</main>
      <PublicFooter />
    </div>
  );
}
