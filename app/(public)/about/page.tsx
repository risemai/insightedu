import type { Metadata } from 'next';
import { AboutContent } from '@/components/pages/about';

export const metadata: Metadata = {
  title: 'About Us | InsightEdu',
  description:
    'Learn about InsightEdu, a research institute dedicated to sustainable economic, medical, and agricultural innovation.',
  openGraph: {
    title: 'About Us | InsightEdu',
    description:
      'Learn about InsightEdu, a research institute dedicated to sustainable economic, medical, and agricultural innovation.',
    url:
      (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
      '/about',
    images: [
      {
        url:
          (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
          '/insight-edu-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About InsightEdu',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About InsightEdu',
  description:
    'Learn about InsightEdu, a research institute dedicated to sustainable economic, medical, and agricultural innovation.',
  url:
    (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') + '/about',
  publisher: {
    '@type': 'Organization',
    name: 'InsightEdu',
    logo: {
      '@type': 'ImageObject',
      url:
        (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
        '/insight-edu-logo.png',
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
