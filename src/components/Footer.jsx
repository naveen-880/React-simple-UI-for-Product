export default function Footer() {
  return (
    <footer className="bg-[#282d9b] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold mb-3">
              ShopZone
            </h2>
            <p className="text-gray-300">
              Your trusted online shopping destination.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Contact
            </h3>

            <p>Email: support@shopzone.com</p>
            <p>Phone: +91 9876543210</p>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-8 pt-4 text-center">
          © 2026 ShopZone. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}