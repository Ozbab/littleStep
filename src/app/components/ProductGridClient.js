"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGridClient({ products }) {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);

  function handleAddToCart(p) {
    setCart((prev) => [...prev, p]);

    // TOAST MESAJINI GÖSTER
    setToast(`${p.name} sepete eklendi!`);

    // 2 saniye sonra kaybolsun
    setTimeout(() => {
      setToast(null);
    }, 2000);
  }

  return (
    <>
      {/* TOAST BİLDİRİMİ */}
      {toast && (
        <div className="
          fixed top-20 right-5 z-50 
          bg-gradient-to-r from-pink-500 to-orange-400
          text-white px-5 py-3 
          rounded-xl shadow-xl
          animate-slide-in
        ">
          {toast}
        </div>
      )}

      {/* ÜRÜN LİSTESİ */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
}