'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Package } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { shippingOptions } from '@/lib/data';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const router = useRouter();
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);

  const subtotal = parseFloat(getTotalPrice());
  const shippingCost = subtotal > 1000 ? 0 : selectedShipping.price;
  const discount = subtotal > 1000 ? subtotal * 0.10 : 0;
  const totalWithShipping = (subtotal + shippingCost - discount).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag size={80} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
            <p className="text-black mb-8">You haven’t added any products to your cart yet.</p>
            <Link href="/">
              <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-6 text-black hover:text-pink-500 transition"
        >
          <ArrowLeft size={20} />
          Go Back
        </button>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">My Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sepet Ürünleri */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div key={`${item.id}-${item.size}-${index}`} className="bg-white rounded-xl p-4 md:p-6 shadow-md">
                <div className="flex gap-4">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-base md:text-lg">{item.name}</h3>
                        <span className="inline-block mt-1 px-2 py-1 bg-pink-100 text-pink-600 text-xs font-medium rounded">
                          Size: {item.size}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    
                    <p className="text-sm text-black/70 mb-4 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border-2 border-pink-500 text-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-bold text-lg">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border-2 border-pink-500 text-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-white transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-xl md:text-2xl font-bold text-pink-500">
                          {(parseFloat(item.price) * item.quantity).toFixed(2)} ₺
                        </p>
                        <p className="text-xs text-black/70">Unit: {item.price} ₺</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="w-full py-3 text-red-500 hover:text-red-700 font-medium transition"
            >
              Clear Cart
            </button>
          </div>

          {/* Sipariş Özeti */}
          <div className="lg:col-span-1 space-y-6">
            {/* Kargo Seçimi */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Package size={24} className="text-pink-500" />
                Shipping Options
              </h2>
              
              <div className="space-y-3">
                {shippingOptions.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => setSelectedShipping(option)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition ${
                      selectedShipping.id === option.id
                        ? 'border-pink-500 bg-pink-50'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          selectedShipping.id === option.id
                            ? 'border-pink-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedShipping.id === option.id && (
                            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                          )}
                        </div>
                        <span className="font-bold">{option.name}</span>
                      </div>
                      <span className="font-bold text-pink-500">
                        {subtotal > 1000 ? 'FREE' : `${option.price} ₺`}
                      </span>
                    </div>
                    <p className="text-sm text-black/70 ml-6">{option.deliveryTime}</p>
                  </div>
                ))}
              </div>

              {subtotal > 1000 && (
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">
                    🎉 Free shipping! Orders above 1000 ₺ qualify for free delivery.
                  </p>
                </div>
              )}
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">
                  ✔ We accept returns within 14 days.
                </p>
              </div>
            </div>

            {/* Sipariş Özeti */}
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
              <h2 className="text-xl font-bold mb-4">Sipariş Özeti</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-black">
                  <span>Subtotal</span>
                  <span>{subtotal.toFixed(2)} ₺</span>
                </div>
                <div className="flex justify-between text-black">
                  <span>Shipping ({selectedShipping.name})</span>
                  <span className={shippingCost === 0 ? 'text-green-500 font-bold' : ''}>
                    {shippingCost === 0 ? 'FREE' : `${shippingCost.toFixed(2)} ₺`}
                  </span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>First Purchase Discount (10%)</span>
                    <span>-{discount.toFixed(2)} ₺</span>
                  </div>
                )}
                
                {shippingCost > 0 && subtotal < 1000 && (
                  <div className="text-xs text-black/70 bg-yellow-50 p-2 rounded">
                    {(1000 - subtotal).toFixed(2)} ₺ more to get free shipping!
                  </div>
                )}
                
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-pink-500">{totalWithShipping} ₺</span>
                </div>
              </div>

              <Link href="/checkout">
                <button className="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white py-4 rounded-lg font-bold">
                    Complete Order
                </button>
              </Link>
              
              <Link href="/">
                <button className="w-full border-2 border-gray-300 text-black py-3 rounded-lg font-medium hover:border-pink-500 hover:text-pink-500 transition">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}