import type { Metadata } from 'next';
import { ServicePageContent } from '@/components/pages/service';

export const metadata: Metadata = {
  title: 'Our Services | InsightEdu',
  description:
    'Explore the range of services offered by InsightEdu, supporting research, education, and innovation in economic, medical, and agricultural fields.',
  openGraph: {
    title: 'Our Services | InsightEdu',
    description:
      'Explore the range of services offered by InsightEdu, supporting research, education, and innovation in economic, medical, and agricultural fields.',
    url:
      (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
      '/services',
    images: [
      {
        url:
          (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
          '/insight-edu-og.jpg',
        width: 1200,
        height: 630,
        alt: 'InsightEdu Services',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'InsightEdu Services',
  description:
    'Explore the range of services offered by InsightEdu, supporting research, education, and innovation in economic, medical, and agricultural fields.',
  url:
    (process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud') +
    '/services',
  provider: {
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

export default function ServicesPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageContent />
    </>
  );
}
