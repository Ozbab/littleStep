"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import CategoryCard from './components/CategoryCard';
import { categories, products } from './lib/data';

export default function Home() {
  const [cartCount, setCartCount] = useState(2)
  const [favCount, setFavCount] = useState(3)
  const router = useRouter()

  const handleCategoryClick = (categorySlug) => {
    router.push(`/category/${categorySlug}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartCount} favCount={favCount} />
      <HeroSlider />
      
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.slug)}
            />
          ))}
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-white py-12 md:py-16">
        <div className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl mb-4">🚚</div>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">2-3 days</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl mb-4">🔄</div>
              <h3 className="font-bold text-lg mb-2">Easily return</h3>
              <p className="text-sm text-gray-600">Within 14 days</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl mb-4">🔒</div>
              <h3 className="font-bold text-lg mb-2">Safely Pay</h3>
              <p className="text-sm text-gray-600">SSL Sertification</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl mb-4">⭐</div>
              <h3 className="font-bold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-sm text-gray-600">%100 Satisfication</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Little Step
              </h3>
              <p className="text-gray-400 text-sm bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                High Quality Kids Clothing Store
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Enterprise</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-pink-400 transition">About</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Career</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Stores</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Costumer Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Return and Exchange</a></li>
                <li><a href="#" className="hover:text-pink-400 transition">Delivery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center ">
                  <img src="/img/instagram.png"alt="Instagram"/>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center ">
                  <img src="/img/facebook.png" alt="Facebook"/>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center ">
                  <img src="/img/twitter.png" alt="Twitter"/>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Little Step. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}