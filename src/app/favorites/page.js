'use client';

import { useCart } from '@/lib/cartContext';
import ProductCard from '@/components/ProductCard';
import { Heart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function FavoritesPage() {
  const { favorites } = useCart();
  const router = useRouter();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <Heart size={80} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Your Favorites List is Empty</h2>
            <p className="text-gray-600 mb-8">You have not added any products to your favorites yet.</p>
            <Link href="/">
              <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition">
                Discover Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-6 text-gray-600 hover:text-pink-500 transition"
        >
          <ArrowLeft size={20} />
          Go Back
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Favorite Products</h1>
          <p className="text-gray-600">{favorites.length} products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
