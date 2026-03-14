export default function Loading() {
  return (
    <div>
      {/* Hero skeleton */}
      <div className="animate-pulse bg-gray-100 h-40 w-full mb-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {/* Category filter skeleton */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse h-8 w-24 bg-gray-100 rounded-full" />
          ))}
        </div>

        {/* Articles grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="h-48 bg-gray-100" />
              <div className="p-5 space-y-3">
                <div className="h-3 bg-gray-100 rounded w-1/3" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-3 bg-gray-100 rounded w-full" />
                <div className="h-3 bg-gray-100 rounded w-4/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
