import { Metadata } from 'next'
import { getPayloadClient } from '../../../lib/payload'
import PageHero from '../../../components/ui/PageHero'
import CalendarClientWrapper from '../../../components/sections/CalendarClientWrapper'
import { unstable_cache } from 'next/cache'

export const metadata: Metadata = {
  title: 'Schulkalender',
  description: 'Schulferien, Veranstaltungen und Termine der Grundschule Wehringhausen.',
}

export const revalidate = 3600 // 1 hour

const getEvents = unstable_cache(
  async () => {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'events',
      limit: 200,
      sort: 'startDate',
    })
    return docs
  },
  ['termine-events'],
  { revalidate: 3600, tags: ['events'] }
)

export default async function TerminePage() {
  const events = await getEvents()

  return (
    <>
      <PageHero
        title="Schulkalender"
        subtitle="Alle Termine, Schulferien (NRW) und Veranstaltungen auf einen Blick"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CalendarClientWrapper events={events as any[]} />
      </div>
    </>
  )
}
