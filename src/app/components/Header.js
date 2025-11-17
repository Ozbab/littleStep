'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, favCount } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-gradient-to-r from-pink-400 to-orange-300 text-white text-center py-2 text-sm font-medium">  
          ⭐️ 10% discount on your first purchase ⭐️
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent cursor-pointer">
              Little Step
            </div>
          </Link>
          
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for product, category or character..."
                className="w-full px-5 py-3 pr-12 border-2 border-black-300 rounded-full text-black placeholder-gray-500 focus:outline-none focus:border-pink-400 transition"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-5 py-2 rounded-full hover:shadow-lg transition">
                <Search size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <button className="hidden md:block relative text-black hover:text-pink-500 transition">
              <User size={24} />
            </button>
            <Link href="/favorites">
              <button className="relative text-black hover:text-pink-500 transition">
                <Heart size={24} />
                {favCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {favCount}
                  </span>
                )}
              </button>
            </Link>
            <Link href="/cart">
              <button className="relative text-black hover:text-pink-500 transition">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pr-10 border-2 border-black-200 rounded-full text-black placeholder-gray-500 focus:outline-none focus:border-pink-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-pink-500">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      <nav className="hidden md:block bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-center gap-8 flex-wrap">
            <Link href="/" className="text-black hover:text-pink-500 font-medium transition relative group whitespace-nowrap">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            {['New Arrivals', 'Disney Collection', 'Baby (0-2 Years)', 'First Step (2-4 Years)', 'Kids (4-8 Years)', 'Campaigns'].map((item) => (
              <a key={item} href="#" className="text-black hover:text-pink-500 font-medium transition relative group whitespace-nowrap">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Link href="/contact" className="text-black hover:text-pink-500 font-medium transition relative group whitespace-nowrap">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-black hover:text-pink-500 font-medium transition relative group whitespace-nowrap">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="py-4 px-4 space-y-3">
            <Link href="/" className="block text-black hover:text-pink-500 font-medium py-2">
              Home
            </Link>
            <Link href="/contact" className="block text-black hover:text-pink-500 font-medium py-2">
              Contact
            </Link>
            {['New Arrivals', 'Disney Collection', 'Baby', 'First Step', 'Kids', 'Campaigns', 'About'].map((item) => (
              <a key={item} href="#" className="block text-black hover:text-pink-500 font-medium py-2">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}