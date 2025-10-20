'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, User, Search, Menu, X } from 'lucide-react';

export default function Header({ cartCount = 0, favCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center justify-start gap-4">
            <Image
              src="/img/thumbnail.jpg"   // public/img/logo.png
              alt="Little Step"
              width={80}
              height={60}
              priority               // ilk ekranda hızlı yükleme
              className="rounded-md"
            />
            <div>
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Little Step 
              </span>
              <p className='text-xs md:text-s font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent'>Little Steps, Big Happiness</p>
            </div>
        </Link>
          
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Serach categories,products,character..."
                className="w-full px-5 py-3 pr-12 border-2  border-gray-300 rounded-full focus:outline-none focus:border-pink-400 transition text-black"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-5 py-2 rounded-full hover:shadow-lg transition">
                <Search size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <button className="hidden md:block relative text-gray-300 hover:text-pink-500 transition">
              <User size={24} />
            </button>
            <button className="relative text-gray-300 hover:text-pink-500 transition">
              <Heart size={24} />
              {favCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {favCount}
                </span>
              )}
            </button>
            <button className="relative text-gray-300 hover:text-pink-500 transition">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
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
              className="w-full px-4 py-2 pr-10 border-2 border-gray-300 rounded-full focus:outline-none focus:border-pink-400 text-black"
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
      <Link
        href="/"
        className="text-gray-700 hover:text-pink-500 font-medium transition relative group whitespace-nowrap"
      >
        Main Page
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
      </Link>

        {[
          { label: "New Arrivals", href: "#" },
          { label: "Disney Collection", href: "#" },
          { label: "Baby Rompers", href: "#" },
          { label: "Kids", href: "#" },
          { label: "Suit Clothes", href: "#" },
          { label: "Pajama", href: "#" },
          { label: "About", href: "/about" }, // ✅ Burada yönlendirme yapıyoruz
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-gray-700 hover:text-pink-500 font-medium transition relative group whitespace-nowrap"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        ))}
      </div>
    </div>
  </nav>

  {/* ✅ Mobil Menü */}
  {mobileMenuOpen && (
    <div className="md:hidden bg-gray-50 border-t border-gray-200">
      <div className="py-4 px-4 space-y-3">
        <Link
          href="/"
          className="block text-gray-700 hover:text-pink-500 font-medium py-2"
        >
          Ana Sayfa
        </Link>
        {[
          { label: "New Arrivals", href: "#" },
          { label: "Disney Collection", href: "#" },
          { label: "Baby Rompers", href: "#" },
          { label: "Kids", href: "#" },
          { label: "Suit Clothes", href: "#" },
          { label: "Pajama", href: "#" },
          { label: "About", href: "/about" }, // ✅ Mobilde de aynı şekilde yönlendirme
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block text-gray-700 hover:text-pink-500 font-medium py-2"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )}

    </header>
  );
}