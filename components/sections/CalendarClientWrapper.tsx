'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const SchoolCalendar = dynamic(() => import('./SchoolCalendar'), {
  loading: () => (
    <div className="animate-pulse bg-gray-100 rounded-2xl h-[600px] flex items-center justify-center text-gray-400">
      Kalender wird geladen...
    </div>
  ),
  ssr: false,
})

export default function CalendarClientWrapper({ events }: { events: any[] }) {
  return <SchoolCalendar events={events} />
}
