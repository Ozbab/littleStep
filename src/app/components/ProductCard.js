"use client";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ProductCard({ product, onAddToCart = () => {} }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:rotate-[0.5deg]">
      <div className="relative">
        <div className="relative h-60 md:h-72 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            className="object-contain rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>

      <div className="p-4 md:p-5">
        <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-800">
          {product.name}
        </h3>

        <div className="flex items-center text-yellow-500 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
          <span className="ml-2 text-gray-600 text-xs md:text-sm">
            ({product.rating})
          </span>
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl md:text-2xl font-bold text-pink-500">
            {product.price} ₺
          </span>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 md:py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105 text-sm md:text-base"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}
