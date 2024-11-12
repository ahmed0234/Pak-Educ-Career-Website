import { Skeleton } from "@/components/ui/skeleton"

export  function SkeletonUI() {
  return (
    <div className="w-full max-w-4xl  p-4">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="grid grid-cols-4 gap-4 px-4 py-3">
            <Skeleton className="h-6 w-24 bg-gray-200" />
            <Skeleton className="h-6 w-32 bg-gray-200" />
            <Skeleton className="h-6 w-24 bg-gray-200" />
            <Skeleton className="h-6 w-20 bg-gray-200" />
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 px-4 py-3">
              <div className="flex items-center space-x-3">
                <Skeleton className="h-8 w-8 rounded-full bg-gray-200" />
                <Skeleton className="h-4 w-24 bg-gray-200" />
              </div>
              <Skeleton className="h-4 w-32 bg-gray-200" />
              <Skeleton className="h-4 w-24 bg-gray-200" />
              <Skeleton className="h-6 w-16 bg-gray-200" />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Skeleton className="h-8 w-24 bg-gray-200" />
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-8 bg-gray-200" />
          <Skeleton className="h-8 w-8 bg-gray-200" />
          <Skeleton className="h-8 w-8 bg-gray-200" />
        </div>
      </div>
    </div>
  )
}