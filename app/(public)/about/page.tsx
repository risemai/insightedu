import type { Metadata } from 'next';
import { AboutContent } from '@/components/pages/about';

export const metadata: Metadata = {
  title: 'About Us | Risemai',
  description:
    'Learn about Risemai, a research institute dedicated to sustainable economic, medical, and agricultural innovation.',
  openGraph: {
    title: 'About Us | Risemai',
    description:
      'Learn about Risemai, a research institute dedicated to sustainable economic, medical, and agricultural innovation.',
    url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/about',
    images: [
      {
        url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/risemai-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About Risemai',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Risemai',
  description:
    'Learn about Risemai, a research institute dedicated to sustainable economic, medical, and agricultural innovation.',
  url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/about',
  publisher: {
    '@type': 'Organization',
    name: 'Risemai',
    logo: {
      '@type': 'ImageObject',
      url: (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/rise-mai-logo-01.png',
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
