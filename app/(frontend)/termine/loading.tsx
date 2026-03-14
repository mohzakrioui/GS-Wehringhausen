export default function Loading() {
  return (
    <div>
      {/* Hero skeleton */}
      <div className="animate-pulse bg-gray-100 h-40 w-full mb-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="animate-pulse bg-gray-100 rounded-2xl h-[600px] flex items-center justify-center text-gray-400">
          Kalender wird geladen...
        </div>
      </div>
    </div>
  )
}
