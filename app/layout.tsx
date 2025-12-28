import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { DefaultLayout } from '@/components/layouts';

const plus_jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Insight Edu — Learn, Grow, Succeed',
  description:
    'Insight Edu provides high-quality online courses, hands-on projects, and resources to help learners and educators succeed.',
  keywords: [
    'Insight-Edu',
    'insight edu',
    'insight-edu',
    'Insight Edu',
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
    title: 'Insight Edu — Learn, Grow, Succeed',
    description:
      'Insight Edu provides high-quality online courses, hands-on projects, and resources to help learners and educators succeed.',
    url: 'https://insight-edu.com',
    images: [
      {
        url: 'https://insight-edu.com/assets/img/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Insight Edu — Learn, Grow, Succeed',
      },
    ],
    siteName: 'Insight Edu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insight Edu — Learn, Grow, Succeed',
    description:
      'Insight Edu provides high-quality online courses, hands-on projects, and resources to help learners and educators succeed.',
    images: ['https://insight-edu.com/assets/img/og.jpg'],
  },
  metadataBase: new URL('https://insight-edu.com'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Insight Edu',
  url: 'https://insight-edu.com',
  publisher: {
    '@type': 'Organization',
    name: 'Insight Edu',
    logo: {
      '@type': 'ImageObject',
      url: 'https://insight-edu.com/assets/img/logo.png',
    },
  },
  sameAs: [
    'https://www.facebook.com/insightedu',
    'https://twitter.com/insightedu',
    'https://www.linkedin.com/company/insight-edu',
    'https://github.com/insight-edu',
  ],
  hasPart: [
    {
      '@type': 'WebPage',
      url: 'https://insight-edu.com/courses',
      name: 'Courses',
      position: 1,
    },
    {
      '@type': 'WebPage',
      url: 'https://insight-edu.com/about',
      name: 'About',
      position: 2,
    },
    {
      '@type': 'WebPage',
      url: 'https://insight-edu.com/contact',
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
      <body className={`${plus_jakarta.className} antialiased`}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
