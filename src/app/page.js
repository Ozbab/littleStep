'use client';

import { useState } from 'react';
import HeroSlider from '@/components/HeroSlider';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/lib/data';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  const handleCategoryClick = (categorySlug) => {
    router.push(`/category/${categorySlug}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSlider />
      
      <div id='categories' className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl mb-4">🚚</div>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">2-3 business days</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl mb-4">🔄</div>
              <h3 className="font-bold text-lg mb-2">Easy Return</h3>
              <p className="text-sm text-gray-600">Within 14 days</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl mb-4">🔒</div>
              <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-600">SSL certified</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl mb-4">⭐</div>
              <h3 className="font-bold text-lg mb-2">Quality Guarantee</h3>
              <p className="text-sm text-gray-600">100% satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kampanya Bölümü */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            10% Off on Orders Over 1000 TL for Your First Purchase!
          </h2>
          <p className="text-lg mb-6">
            Free shipping and gift package opportunity
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition transform hover:scale-105">
            Start Shopping Now
          </button>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}