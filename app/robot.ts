import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/privacy-policy',
          '/terms-of-conditions',
          '/support-center',
          '/about',
          '/courses',
          '/services',
          '/research',
          '/publications',
          '/contact',
        ],
        disallow: ['/api', '/_next', '/studio'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/privacy-policy',
          '/terms-of-conditions',
          '/support-center',
          '/about',
          '/courses',
          '/services',
          '/research',
          '/publications',
          '/contact',
        ],
        disallow: ['/api', '/_next', '/studio'],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
    host: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  };
}
