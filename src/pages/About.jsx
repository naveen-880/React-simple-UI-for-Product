import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">

      <section className="bg-[#282d9b] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-white/80 text-sm font-medium">
              ABOUT SHOPZONE
            </span>

            <h1 className="text-5xl font-bold text-white mt-4">
              Making Online Shopping Simple And Reliable
            </h1>

            <p className="text-white/80 mt-6 text-lg leading-8">
              ShopZone is designed to provide customers with a smooth and
              secure shopping experience. From discovering products to placing
              orders, we focus on quality, convenience, and customer
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200"
              alt="About ShopZone"
              className="w-full h-[500px] object-cover rounded-3xl"
            />
          </div>

          <div>
            <span className="text-[#282d9b] font-semibold">
              OUR STORY
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Built Around Customer Experience
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Our mission is to create a platform where customers can find
              quality products at competitive prices without any hassle.
              We believe shopping should be fast, transparent, and enjoyable.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              Since our beginning, we have focused on building trust through
              reliable service, secure payments, and a carefully selected
              collection of products that meet everyday needs.
            </p>

            <button className="mt-8 bg-[#282d9b] text-white px-8 py-3 rounded-xl">
              Explore Products
            </button>
          </div>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-24">

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-4xl font-bold text-[#282d9b]">
              10K+
            </h3>

            <p className="text-gray-500 mt-3">
              Happy Customers
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-4xl font-bold text-[#282d9b]">
              500+
            </h3>

            <p className="text-gray-500 mt-3">
              Products Available
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-4xl font-bold text-[#282d9b]">
              99%
            </h3>

            <p className="text-gray-500 mt-3">
              Customer Satisfaction
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-4xl font-bold text-[#282d9b]">
              24/7
            </h3>

            <p className="text-gray-500 mt-3">
              Customer Support
            </p>
          </div>

        </div>

        <div className="mt-24">

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#282d9b] font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              Everything You Need In One Place
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              We focus on providing a reliable shopping experience with
              high-quality products and excellent customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold">
                Premium Products
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Carefully selected products that meet high standards of
                quality and performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold">
                Secure Payments
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Safe and trusted payment methods that protect customer
                information and transactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold">
                Fast Delivery
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Efficient shipping services to ensure orders reach customers
                quickly and safely.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold">
                Easy Returns
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Hassle-free return policies designed to provide peace of mind
                after every purchase.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold">
                Trusted Support
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Dedicated support team available to assist customers whenever
                they need help.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-xl font-semibold">
                Best Value
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Competitive pricing and regular offers that help customers
                get more for their money.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-24 bg-[#282d9b] rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Join Thousands Of Happy Customers
          </h2>

          <p className="text-white/80 mt-5 max-w-2xl mx-auto leading-8">
            Discover a wide range of products, enjoy secure shopping,
            and experience customer service that puts your needs first.
          </p>

          <button className="mt-8 bg-white text-[#282d9b] px-8 py-3 rounded-xl font-semibold">
            Start Shopping
          </button>

        </div>

      </div>
    </div>
  );
}