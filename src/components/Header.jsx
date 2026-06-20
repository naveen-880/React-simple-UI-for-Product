import { ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-[#282d9b] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold">ShopZone</h1>

        <nav className="hidden md:flex gap-8">
          <Link to ="/" className="hover:text-gray-300">Home</Link >
          <Link to ="/Store" className="hover:text-gray-300">Store</Link >
          <Link to ="#" className="hover:text-gray-300">About</Link>
          <Link to ="#" className="hover:text-gray-300">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <ShoppingCart size={22} />
          <Menu className="md:hidden" size={24} />
        </div>
      </div>
    </header>
  );
}