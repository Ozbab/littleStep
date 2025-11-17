'use client';

import { useCart } from '@/lib/cartContext';
import { ArrowLeft, Lock, CreditCard, TruckIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handlePayment = () => {
    if (!form.fullName || !form.email || !form.address) {
      alert("Please fill in all required fields.");
      return;
    }

    clearCart();
    router.push('/order-success');
  };

  const subtotal = parseFloat(getTotalPrice()).toFixed(2);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-black">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <Link href="/">
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-3 rounded-full font-bold">
            Go Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-10 max-w-5xl mx-auto text-black">

      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-8 text-black hover:text-pink-500 transition"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <h1 className="text-3xl font-bold mb-10">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Side – Billing & Payment */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 space-y-6">

          {/* Billing Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Billing Information</h2>

            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg mb-3"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border rounded-lg mb-3"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone (optional)"
              className="w-full p-3 border rounded-lg mb-3"
            />

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Full Address"
              className="w-full p-3 border rounded-lg h-24"
            />
          </div>

          {/* Payment Information */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lock size={20} className="text-pink-500" />
              Payment Information
            </h2>

            <input
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              placeholder="Card Number"
              className="w-full p-3 border rounded-lg mb-3"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full p-3 border rounded-lg"
              />
              <input
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                placeholder="CVV"
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>

        </div>

        {/* Right Side – Order Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TruckIcon size={20} className="text-pink-500" />
            Order Summary
          </h2>

          <div className="space-y-3 text-black">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>{(item.price * item.quantity).toFixed(2)} ₺</span>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-3 flex justify-between font-bold text-lg text-black">
            <span>Total</span>
            <span>{subtotal} ₺</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-6 bg-gradient-to-r from-pink-500 to-orange-400 text-white py-4 rounded-lg font-bold flex justify-center items-center gap-2 hover:scale-105 transition"
          >
            <CreditCard size={20} />
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}