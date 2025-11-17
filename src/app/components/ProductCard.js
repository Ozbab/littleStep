'use client';

import { useState } from 'react';
import { Star, Heart } from 'lucide-react';
import { useCart } from '@/lib/cartContext';

export default function ProductCard({ product, onAddToCart }) {
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  const isLiked = isFavorite(product.id);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [showSizeModal, setShowSizeModal] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) {
      return; 
    }
    addToCart(product, selectedSize);
    if (onAddToCart) {
      onAddToCart(product, selectedSize);
    }
  };

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative group">
      <div className="relative">        
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-4 left-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isLiked 
              ? 'bg-pink-500 text-white' 
              : 'bg-white text-gray-400 hover:text-pink-500'
          }`}
        >
          <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
        </button>

        <div className="h-60 md:h-72 bg-gray-100 flex items-center justify-center relative overflow-hidden">
          <img
            src={product.image.startsWith('/') ? product.image : '/' + product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      
      <div className="p-4 md:p-5">
        <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-800">
          {product.name}
        </h3>
        <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center text-yellow-500 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
          <span className="ml-2 text-gray-600 text-xs md:text-sm">
            ({product.rating})
          </span>
        </div>

        {/* Beden Seçimi */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Beden:</span>
            <span className="text-sm font-bold text-pink-500">{selectedSize}</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 rounded-lg border-2 font-medium text-sm transition ${
                  selectedSize === size
                    ? 'border-pink-500 bg-pink-500 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-pink-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl md:text-2xl font-bold text-pink-500">
            {product.price} ₺
          </span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 md:py-3 rounded-lg font-bold hover:shadow-lg transition transform hover:scale-105 text-sm md:text-base"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
