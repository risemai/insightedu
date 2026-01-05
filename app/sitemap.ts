import { client } from '@/sanity/lib/client';
import { MetadataRoute } from 'next';

export const revalidate = 3600;

interface courseItem {
  slug: string;
  _updatedAt: string;
}

async function fetchCoursesData():Promise<courseItem[]> {
    const query = `
    *[_type == "course"] | order(_createdAt desc) {
      slug,
      _updatedAt
    }
  `;

  try{
    const data:courseItem[] = await client.fetch(query);
    return data;

  }catch(error){
    console.error('Error fetching courses data:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
     const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://insightedu.cloud';
  const currentDate = new Date();
  const coursesData = await fetchCoursesData();
  
  const coursesEntries = coursesData.map((courses)=>({
    url: `${baseUrl}/courses/${courses.slug}`,
    lastModified:courses._updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/research`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support-center`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms-of-conditions`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...coursesEntries,
  ];
}