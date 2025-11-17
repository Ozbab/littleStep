'use client';

import { useParams, useRouter } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import ProductGridClient from '@/components/ProductGridClient';
import { productsData } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();

  // Find category by slug
  const category = Object.values(productsData).find(
    cat => cat.slug === params.slug
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <button
            onClick={() => router.push('/')}
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border-2 border-pink-500 text-pink-500 rounded-full font-bold hover:bg-pink-500 hover:text-white transition mb-6 text-sm md:text-base"
        >
          <ArrowLeft size={20} />
          Return to Home
        </button>

        <div className="text-xs md:text-sm text-gray-600 mb-6">
          <span className="cursor-pointer hover:text-pink-500" onClick={() => router.push('/')}>
            Home
          </span>
          <span className="mx-2">›</span>
          <span>{category.title}</span>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{category.title}</h1>
          <p className="text-base md:text-xl text-gray-600">{category.description}</p>
          <p className="text-sm text-gray-500 mt-2">{category.products.length} products found</p>
        </div>

        <ProductGridClient products={category.products} />
      </div>
    </div>
  );
}
