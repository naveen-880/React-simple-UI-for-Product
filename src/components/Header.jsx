import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#282d9b] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold">ShopZone</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/store" className="hover:text-gray-300">
            Store
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <ShoppingCart size={22} />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#282d9b] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300"
          >
            Home
          </Link>

          <Link
            to="/store"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300"
          >
            Store
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}