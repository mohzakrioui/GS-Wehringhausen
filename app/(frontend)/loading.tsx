export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero skeleton */}
      <div className="animate-pulse mb-10">
        <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-3" />
        <div className="h-4 bg-gray-100 rounded w-96 mx-auto" />
      </div>
      {/* Content skeleton */}
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-4 bg-gray-100 rounded w-5/6" />
        <div className="h-4 bg-gray-100 rounded w-4/6" />
      </div>
    </div>
  )
}
