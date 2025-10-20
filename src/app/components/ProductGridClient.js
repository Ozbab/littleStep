"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGridClient({ products }) {
  const [cart, setCart] = useState([]);

  function handleAddToCart(p) {
    setCart((prev) => [...prev, p]);
    // burada toast veya console log da ekleyebilirsin
    // console.log("Added:", p.name);
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {/* İstersen mini özet */}
      {/* <p className="mt-4 text-sm opacity-70">Cart: {cart.length} item(s)</p> */}
    </>
  );
}
