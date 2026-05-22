import { MetadataRoute } from 'next'
import { NEXFIY_APPS } from '@/lib/apps-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://noven.app'

  const appUrls = NEXFIY_APPS.map((app) => ({
    url: `${baseUrl}/${app.id}/${app.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/noven/noven/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/noven/noven/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    },
    ...appUrls,
  ]
}
