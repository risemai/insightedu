import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import { Loading } from '@/components/shared';

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Risemai — Learn, Grow, Succeed',
  description:
    'Research institute of sustainable economic, medical & agricultural innovation.',
  keywords: [
    'RiseMai',
    'risemai',
    'online learning',
    'e-learning',
    'courses',
    'education',
    'tech courses',
    'programming',
    'web development',
    'frontend',
    'backend',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: 'Risemai — Learn, Grow, Succeed',
    description:
      'Research institute of sustainable economic, medical & agricultural innovation.',
    url: 'https://insightedu.cloud',
    images: [
      {
        url: 'https://insightedu.cloud/assets/img/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Risemai — Learn, Grow, Succeed',
      },
    ],
    siteName: 'Risemai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Risemai — Learn, Grow, Succeed',
    description:
      'Research institute of sustainable economic, medical & agricultural innovation.',
    images: ['https://insightedu.cloud/assets/img/og.jpg'],
  },
  metadataBase: new URL('https://insightedu.cloud'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Risemai',
  url: 'https://insightedu.cloud',
  publisher: {
    '@type': 'Organization',
    name: 'Risemai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://insightedu.cloud/risemai-logo.svg',
    },
  },
  sameAs: [
    'https://www.facebook.com/insightedu',
    'https://twitter.com/insightedu',
    'https://www.linkedin.com/company/risemai',
    'https://github.com/risemai',
  ],
  hasPart: [
    {
      '@type': 'WebPage',
      url: 'https://insightedu.cloud/courses',
      name: 'Courses',
      position: 1,
    },
    {
      '@type': 'WebPage',
      url: 'https://insightedu.cloud/about',
      name: 'About',
      position: 2,
    },
    {
      '@type': 'WebPage',
      url: 'https://insightedu.cloud/contact',
      name: 'Contact',
      position: 3,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plus_jakarta_sans.className} antialiased min-h-screen bg-gray-50 overflow-x-hidden`}
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
