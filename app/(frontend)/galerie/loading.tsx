export default function Loading() {
  return (
    <div>
      <div className="animate-pulse bg-gray-100 h-40 w-full mb-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-100 rounded-xl h-56" />
          ))}
        </div>
      </div>
    </div>
  )
}
