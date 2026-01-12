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
  title: 'InsightEdu — Learn, Grow, Succeed',
  description:
    'Research institute of sustainable economic, medical & agricultural innovation.',
  keywords: [
    'InsightEdu',
    'online learning',
    'education',
    'research paper',
    'research assistant',
    'thesis paper',
    'thesis consultant',
    'academic writing',
    'research methodology',
    'manuscript editing',
    'journal Q1',
    'journal Q2',
    'journal Q3',
    'journal Q4',
    'Q1 publication support',
    'Scopus indexed journals',
    'ISI web of science',
    'high impact factor research',
    'economic research',
    'medical innovation',
    'agricultural innovation',
    'sustainable development',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    title: 'InsightEdu — Learn, Grow, Succeed',
    description:
      'Research institute of sustainable economic, medical & agricultural innovation.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud',
    images: [
      {
        url: process.env.NEXT_PUBLIC_BASE_URL + '/insight-edu-og.jpg',
        width: 1200,
        height: 630,
        alt: 'InsightEdu — Learn, Grow, Succeed',
      },
    ],
    siteName: 'InsightEdu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InsightEdu — Learn, Grow, Succeed',
    description:
      'Research institute of sustainable economic, medical & agricultural innovation.',
    images: [process.env.NEXT_PUBLIC_BASE_URL + '/insight-edu-og.jpg'],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud'
  ),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'InsightEdu',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud',
  publisher: {
    '@type': 'Organization',
    name: 'InsightEdu',
    logo: {
      '@type': 'ImageObject',
      url: process.env.NEXT_PUBLIC_BASE_URL + '/insight-edu-logo.png',
    },
  },
  sameAs: [
    'https://www.facebook.com/insightedu',
    'https://twitter.com/insightedu',
    'https://www.linkedin.com/company/insightedu',
    'https://github.com/insightedu',
  ],
  hasPart: [
    {
      '@type': 'WebPage',
      url: process.env.NEXT_PUBLIC_BASE_URL + '/courses',
      name: 'Courses',
      position: 1,
    },
    {
      '@type': 'WebPage',
      url: process.env.NEXT_PUBLIC_BASE_URL + '/about',
      name: 'About',
      position: 2,
    },
    {
      '@type': 'WebPage',
      url: process.env.NEXT_PUBLIC_BASE_URL + '/contact',
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
