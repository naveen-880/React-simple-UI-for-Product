

export default function ProductCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Image */}
      <div className="relative h-48 bg-[#282d9b]">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800"
          alt="Weather API"
          className="w-full h-full object-cover opacity-80"
        />

        <div className="absolute top-3 left-3">
          <span className="bg-white text-[#282d9b] text-xs font-medium px-2 py-1 rounded">
            Featured
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          API USING PRODUCT
        </h3>

        <p className="text-sm text-gray-500 mt-2 leading-6">
          Get real-time weather updates, forecasts, historical data and alerts
          through a simple REST API.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mt-4 text-sm">
          <div>
            <p className="text-gray-400">Requests</p>
            <p className="font-medium text-gray-900">1M / Month</p>
          </div>

          <div>
            <p className="text-gray-400">Uptime</p>
            <p className="font-medium text-gray-900">99.9%</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <div>
            <p className="text-2xl font-bold text-[#282d9b]">
              ₹999
            </p>
            <span className="text-xs text-gray-400">
              per month
            </span>
          </div>

          <button className="bg-[#282d9b] text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}