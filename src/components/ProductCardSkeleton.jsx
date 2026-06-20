export default function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-64 bg-gray-300"></div>

      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        
        {/* Title */}
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-8 w-20 bg-gray-300 rounded"></div>

          <div className="h-10 w-28 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}