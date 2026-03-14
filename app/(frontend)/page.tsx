import { getPayloadClient } from '../../lib/payload'
import HeroBanner from '../../components/sections/HeroBanner'
import NewsPreview from '../../components/sections/NewsPreview'
import UpcomingEvents from '../../components/sections/UpcomingEvents'
import SchoolStats from '../../components/sections/SchoolStats'
import { unstable_cache } from 'next/cache'

export const revalidate = 60 // ISR: revalidate every 60 seconds

const getHomeData = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    const [articlesResult, eventsResult] = await Promise.all([
      payload.find({
        collection: 'news-articles',
        limit: 3,
        sort: '-publishedAt',
        where: { status: { equals: 'published' } },
      }),
      payload.find({
        collection: 'events',
        limit: 5,
        sort: 'startDate',
        where: {
          startDate: { greater_than_equal: new Date().toISOString() },
        },
      }),
    ])
    return { articles: articlesResult.docs, events: eventsResult.docs }
  },
  ['home-data'],
  { revalidate: 60, tags: ['news-articles', 'events'] }
)

export default async function HomePage() {
  const { articles: articlesResult, events: eventsResult } = await getHomeData()

  return (
    <>
      <HeroBanner />
      <NewsPreview articles={articlesResult as any} />
      <SchoolStats />
      <UpcomingEvents events={eventsResult as any} />
    </>
  )
}
