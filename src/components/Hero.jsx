export default function Hero() {
  return (
    <section className="bg-[#282d9b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
        
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-6">
            Discover Amazing Products
          </h1>

          <p className="text-lg mb-8 text-gray-200">
            Shop the latest collections with premium quality and unbeatable prices.
          </p>

          <button className="bg-white text-[#282d9b] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="hero"
          className="w-100 rounded-xl mt-10 md:mt-0"
        />
      </div>
    </section>
  );
}