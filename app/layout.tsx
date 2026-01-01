import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

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
    url: 'https://insightedu.cloud',
    images: [
      {
        url: 'https://insightedu.cloud/assets/img/og.jpg',
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
    images: ['https://insightedu.cloud/assets/img/og.jpg'],
  },
  metadataBase: new URL('https://insightedu.cloud'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Insight Edu',
  url: 'https://insightedu.cloud',
  publisher: {
    '@type': 'Organization',
    name: 'Insight Edu',
    logo: {
      '@type': 'ImageObject',
      url: 'https://insightedu.cloud/insight-edu-logo.svg',
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
        {children}
      </body>
    </html>
  );
}
